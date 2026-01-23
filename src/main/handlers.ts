import { defaultItem, ItemStatus, UpdateItemDto } from './../common/item';
import { ItemDto } from '@common/item';
import { AddInitiativeDto, InitiativeDto } from './../common/initiative';
import { AddAssigneeDto, AssigneeDto, AssigneeType } from '@common/assignee';
import { ResultResponse, VoidResponse } from "@common/types";
import { ipcMain } from "electron";
import { db } from "./drizzle";
import { AssigneeTable, InitiativeTable, ItemTable } from "./drizzle/schema";
import { asc, desc, eq, sql } from 'drizzle-orm';
import { formatInTimeZone } from 'date-fns-tz';

const ItemTypes: { value: string; text: string }[] = [
    { value: '1', text: 'Desktop' },
    { value: '2', text: 'Server' },
    { value: '3', text: 'Switch' },
    { value: '4', text: 'Monitor' },
    { value: '5', text: 'Printer' },
    { value: '6', text: 'MobilePhone' },
    { value: '7', text: 'Misc' },
];
export default function setUpHandlers() {

    ipcMain.handle('get-assignees', async (): Promise<ResultResponse<AssigneeDto[]>> => {

        const response = await db
            .select()
            .from(AssigneeTable)
            .orderBy(asc(AssigneeTable.lastName), desc(AssigneeTable.lastName))

        const assignees: AssigneeDto[] = response.map(a => ({
            id: a.id,
            firstName: a.firstName,
            lastName: a.lastName,
            email: a.email,
            locationName: a.locationName,
            extension: a.extension,
            assigneeTypeId: a.assigneeTypeId
        }));

        return {
            data: assignees
        };
    });

    ipcMain.handle('get-initiatives', async (): Promise<ResultResponse<InitiativeDto[]>> => {

        const response = await db.select().from(InitiativeTable).orderBy(asc(InitiativeTable.name))

        return {
            data: response,
        };
    });

    ipcMain.handle('add-assignee', async (_, params: AddAssigneeDto): Promise<ResultResponse<AddAssigneeDto>> => {

        const results = await db.insert(AssigneeTable).values(params).returning({ insertedId: AssigneeTable.id });
        const newId = results[0].insertedId;

        params.id = newId;

        return {
            data: params
        };
    });


    ipcMain.handle('add-initiative', async (_, params: AddInitiativeDto): Promise<ResultResponse<number>> => {

        const results = await db.insert(InitiativeTable).values(params).returning({ insertedId: InitiativeTable.id });
        const newId = results[0].insertedId;

        return {
            data: newId
        };
    });

    ipcMain.handle('get-items', async (): Promise<ResultResponse<ItemDto[]>> => {

        const response = await db
            .select({
                items: ItemTable,
                assignee: AssigneeTable,
                initiative: InitiativeTable
            })
            .from(ItemTable)
            .leftJoin(AssigneeTable, eq(ItemTable.assignedToId, AssigneeTable.id))
            .leftJoin(InitiativeTable, eq(ItemTable.initiativeId, InitiativeTable.id));

        const items: ItemDto[] = response.map(i => {
            const item: ItemDto = {
                ...i.items,
                created_at: formatInTimeZone(i.items.created_at as string, 'America/New_York', 'yyyy-MM-dd HH:mm'),
                assignedToId: i.items.assignedToId as number | undefined,
                initiativeId: i.items.initiativeId as number | undefined,
                itemStatus: getItemStatusText(i.items.itemStatusId),
                itemType: ItemTypes.filter(x => x.value === i.items.itemTypeId.toString()).at(0)?.text ?? '',
                assignedTo: i.assignee
                    ? i.assignee.assigneeTypeId == AssigneeType.Individual
                        ? `${i.assignee?.firstName} ${i.assignee?.lastName}`
                        : i.assignee.locationName
                    : null,
                disposalDate: i.items.disposalDate ? new Date(i.items.disposalDate) : null,
                assignedDate: i.items.assignedDate ? new Date(i.items.assignedDate) : null,
                initiative: i.initiative?.name ?? null
            };
            return item;
        });


        return {
            data: items
        };
    });

    ipcMain.handle('get-item', async (_, params): Promise<ResultResponse<ItemDto>> => {

        const result = (await db.select().from(ItemTable).where(eq(ItemTable.id, params))).at(0);

        let item: ItemDto = defaultItem;

        if (result) {
            item = {
                ...result,
                id: result?.id!,
                assignedDate: result.assignedToId && result.assignedDate ? new Date(result.assignedDate) : null,
                disposalDate: result.disposalDate ? new Date(result.disposalDate) : null
            };
        }
        console.log('get-item params', item)

        return {
            data: item,
        };
    });


    ipcMain.handle('add-item', async (_, params): Promise<ResultResponse<ItemDto[]>> => {

        console.log('params', params)

        const results = await db
            .insert(ItemTable)
            .values(params)
            .returning({
                insertedId: ItemTable.id,
                created_at: ItemTable.created_at
            });

        params.id = results[0].insertedId;
        params.created_at = results[0].created_at

        return {
            data: params,
        };
    });

    ipcMain.handle('update-item', async (_, params): Promise<ResultResponse<ItemDto[]>> => {

        const updateItemDto = params as UpdateItemDto;

        await db.update(ItemTable)
            .set({
                itemTypeId: updateItemDto.itemTypeId,
                hbcNumber: updateItemDto.hbcNumber,
                serialNumber: updateItemDto.serialNumber ?? undefined,
                description: updateItemDto.description,
                computerName: updateItemDto.computerName,
                ipAddress: updateItemDto.ipAddress ?? undefined,
                macAddress: updateItemDto.macAddress ?? undefined,
                cubicle_Room: updateItemDto.cubicle_Room ?? undefined,
                cabinetOrRack: updateItemDto.cabinetOrRack ?? undefined,
                initiativeId: updateItemDto.initiativeId,
                assignedToId: updateItemDto.assignedToId,
                assignedDate: updateItemDto.assignedToId ? sql`(CURRENT_TIMESTAMP)` : null

            })
            .where(eq(ItemTable.id, updateItemDto.id!));

        return {
            data: params,
        };
    });

    ipcMain.handle('toggle-disposal', async (_, params): Promise<ResultResponse<boolean | null>> => {

        const item = (await db.select().from(ItemTable).where(eq(ItemTable.id, params))).at(0)

        if (item) {

            await db.update(ItemTable)
                .set({
                    itemStatusId: item.disposalDate ? ItemStatus.Unassigned : ItemStatus.Disposed,
                    disposalDate: item.disposalDate ? null : sql`(CURRENT_TIMESTAMP)`,
                    assignedToId: null,
                    assignedDate: null
                })
                .where(eq(ItemTable.id, params));


            // return new disposal true if disposed, false if not

            return {
                data: !!!item.disposalDate
            };
        }

        return {
            data: null
        };
    });

    ipcMain.handle('delete', async (): Promise<VoidResponse> => {

        await db.delete(ItemTable);

        return {
            success: true,
        };
    });


}

function getItemStatusText(itemStatusId: number): string {
    switch (itemStatusId) {
        case 1:
            return "Unassigned"
        case 2:
            return "Assigned"
        case 3:
            return "TBD"
        case 4:
            return "Disposed"
        default:
            return ""
    }
}

