import { ApiResponse, NoData, UserData } from "@common/types";
import { ipcMain } from "electron";
import { db } from "./drizzle";
import { UserTable } from "./drizzle/schema";



export default function setUpHandlers() {

    ipcMain.handle('get-user', async (event, id: number): Promise<ApiResponse<UserData>> => {

        return {
            success: true,
            data: { id, name: 'Halfonso', email: 'hector.alfonso@yahoo.com' }
        };
    });

    ipcMain.handle('insert-user', async (event, params): Promise<ApiResponse<NoData>> => {

        console.log(params, '123')


        await db.insert(UserTable).values(params)
        return {
            success: true,
        };

        // data: { id, name: 'Halfonso', email: 'hector.alfonso@yahoo.com' }
    });
}