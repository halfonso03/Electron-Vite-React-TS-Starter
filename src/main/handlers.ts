import { ItemDto } from '@common/item';
import { InitiativeDto } from './../common/initiative';
import { AddAssigneeDto, AssigneeDto } from '@common/assignee';
import { ResultResponse, VoidResponse } from "@common/types";
import { ipcMain } from "electron";
import { db } from "./drizzle";
import { AssigneeTable, InitiativeTable, ItemTable } from "./drizzle/schema";
import { asc, desc } from 'drizzle-orm';
import { formatInTimeZone } from 'date-fns-tz';

export default function setUpHandlers() {

    ipcMain.handle('get-assignees', async (): Promise<ResultResponse<AssigneeDto[]>> => {

        const response = await db.select().from(AssigneeTable).orderBy(asc(AssigneeTable.lastName), desc(AssigneeTable.lastName))

        const assignees: AssigneeDto[] = response.map(a => {

            return {
                id: a.id,
                firstName: a.firstName,
                lastName: a.lastName,
                email: a.email,
                locationName: a.locationName,
                extension: a.extension,
                assigneeTypeId: a.assigneeTypeId
            }
        });

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

        console.log('newId', newId)

        params.id = newId;

        return {
            data: params
        };
    });


    ipcMain.handle('add-initiative', async (_, params): Promise<VoidResponse> => {

        await db.insert(InitiativeTable).values(params);

        return {
            success: true,
        };
    });

    ipcMain.handle('get-items', async (): Promise<ResultResponse<ItemDto[]>> => {

        const response = await db.select().from(ItemTable);

        const items: ItemDto[] = response.map(i => {

            const item: ItemDto = {
                id: i.id,
                created_at: formatInTimeZone(i.created_at as string, 'America/New_York', 'yyyy-MM-dd HH:mm'),
                description: i.description,
                hbcNumber: i.hbcNumber,
                computerName: i.computerName,
                serialNumber: i.serialNumber,
                cubicle_Room: i.cubicle_Room,
                ipAddress: i.ipAddress,
                macAddress: i.macAddress,
                cabinetOrRack: i.cabinetOrRack,
                itemTypeId: i.itemTypeId,
                itemType: '',
                assignedToId: i.assignedToId as number | undefined,
                initiativeId: i.initiativeId as number | undefined,
                itemStatusId: i.itemStatusId,
                itemStatus: getItemStatusText(i.itemStatusId)
            };
            return item;
        });


        return {
            data: items
        };
    });

    ipcMain.handle('add-item', async (_, params): Promise<ResultResponse<ItemDto[]>> => {

        console.log('params', params)

        const results = await db.insert(ItemTable).values(params).returning({ insertedId: ItemTable.id, created_at: ItemTable.created_at });

        params.id = results[0].insertedId;
        params.created_at = results[0].created_at

        return {
            data: params,
        };
    });


    ipcMain.handle('delete', async (): Promise<VoidResponse> => {

        await db.delete(AssigneeTable);
        await db.delete(InitiativeTable);
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

