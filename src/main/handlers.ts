import { ApiResponse, UserData } from "@common/types";
import { ipcMain } from "electron";


export default function setUpHandlers() {

    ipcMain.handle('get-user', async (event, id: number): Promise<ApiResponse<UserData>> => {
        // Mock database call

        console.log('here1')
        return {
            success: true,
            data: { id, name: 'Halfonso', email: 'hector.alfonso@yahoo.com' }
        };
    });
}