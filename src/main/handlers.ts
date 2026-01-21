import { InitiativeDto } from './../common/initiative';
import { AddAssigneeDto, AssigneeDto } from '@common/assignee';
import { DataResponse, VoidResponse } from "@common/types";
import { ipcMain } from "electron";
import { db } from "./drizzle";
import { AssigneeTable, InitiativeTable } from "./drizzle/schema";
import { asc, desc } from 'drizzle-orm';

export default function setUpHandlers() {

    ipcMain.handle('get-assignees', async (): Promise<DataResponse<AssigneeDto[]>> => {

        const response = await db.select().from(AssigneeTable).orderBy(asc(AssigneeTable.lastName), desc(AssigneeTable.lastName))

        return {
            data: response,
        };
    });

    ipcMain.handle('get-initiatives', async (): Promise<DataResponse<InitiativeDto[]>> => {

        const response = await db.select().from(InitiativeTable).orderBy(asc(InitiativeTable.name))

        return {
            data: response,
        };
    });

    ipcMain.handle('add-assignee', async (_, params: AddAssigneeDto): Promise<VoidResponse> => {


        console.log('params', params)
        await db.insert(AssigneeTable).values(params);

        return {
            success: true,
        };
    });


    ipcMain.handle('add-initiative', async (_, params): Promise<VoidResponse> => {

        await db.insert(InitiativeTable).values(params);

        return {
            success: true,
        };
    });

    ipcMain.handle('delete', async (): Promise<VoidResponse> => {

        await db.delete(AssigneeTable);
        await db.delete(InitiativeTable);

        return {
            success: true,
        };
    });


}

