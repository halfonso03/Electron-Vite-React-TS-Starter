import { contextBridge, ipcRenderer } from 'electron';
import { UserData, ApiResponse } from '@common/types';

contextBridge.exposeInMainWorld('electronAPI', {
  // We wrap the invoke call in a typed function
  getUser: (id: number): Promise<ApiResponse<UserData>> =>
    ipcRenderer.invoke('get-user', id),
});