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

    ipcMain.handle('insert-user', async (event, { name, email }: { name: string, email: string }): Promise<ApiResponse<NoData>> => {

        console.log(name, email)

        
        await db.insert(UserTable).values({ name, email });
        return {
            success: true,
        };

        // data: { id, name: 'Halfonso', email: 'hector.alfonso@yahoo.com' }
    });
}