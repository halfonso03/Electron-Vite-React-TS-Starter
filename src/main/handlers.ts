import { Assignee } from '@common/assignee';
import { DataResponse, VoidResponse, UserData } from "@common/types";
import { ipcMain } from "electron";
import { db } from "./drizzle";
import { AssigneeTable, UserTable } from "./drizzle/schema";
import { asc, desc } from 'drizzle-orm';

export default function setUpHandlers() {

    ipcMain.handle('get-user', async (_, id: number): Promise<DataResponse<UserData>> => {

        return {
            data: { id, name: 'Halfonso', email: 'hector.alfonso@yahoo.com' }
        };
    });

    ipcMain.handle('insert-user', async (_, params): Promise<VoidResponse> => {

        await db.insert(UserTable).values(params);

        return {
            success: true,
        };
    });

    ipcMain.handle('get-assignees', async (): Promise<DataResponse<Assignee[]>> => {

        const response = await db.select().from(AssigneeTable).orderBy(asc(AssigneeTable.lastName), desc(AssigneeTable.lastName))

        return {
            data: response,
        };
    });

    ipcMain.handle('add-assignee', async (_, params): Promise<VoidResponse> => {


        console.log('params', params)
        await db.insert(AssigneeTable).values(params);

        return {
            success: true,
        };
    });
}

