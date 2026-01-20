import { contextBridge, ipcRenderer } from 'electron';
import { ApiResponse, UserData, VoidResponse } from '@common/types';
import { AddAssigneeDTO } from '@common/assignee';

contextBridge.exposeInMainWorld('electronAPI', {
  // We wrap the invoke call in a typed function
  getUser: (id: number): Promise<ApiResponse<UserData>> =>
    ipcRenderer.invoke('get-user', id),

  insertUser: (params: { name: string, email: string }): Promise<VoidResponse> => {
    return ipcRenderer.invoke('insert-user', params);
  },

  addAssignee: (params: AddAssigneeDTO): Promise<VoidResponse> => {
    return ipcRenderer.invoke('add-assignee', params);
  },


});



