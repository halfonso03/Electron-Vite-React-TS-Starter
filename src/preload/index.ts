import { AddInitiativeDto, InitiativeDto } from '@common/initiative';
import { contextBridge, ipcRenderer } from 'electron';
import { ApiResponse, DataResponse, UserData, VoidResponse } from '@common/types';
import { AddAssigneeDto, AssigneeDto } from '@common/assignee';


contextBridge.exposeInMainWorld('electronAPI', {
  // We wrap the invoke call in a typed function
  getUser: (id: number): Promise<ApiResponse<UserData>> =>
    ipcRenderer.invoke('get-user', id),

  insertUser: (params: { name: string, email: string }): Promise<VoidResponse> => {
    return ipcRenderer.invoke('insert-user', params);
  },

  addAssignee: (params: AddAssigneeDto): Promise<VoidResponse> => {
    console.log('params', params)
    return ipcRenderer.invoke('add-assignee', params);
  },

  getAssignees: (): Promise<DataResponse<AssigneeDto[]>> => {
    return ipcRenderer.invoke('get-assignees');
  },

  getInitiatives: (): Promise<DataResponse<InitiativeDto[]>> => {
    return ipcRenderer.invoke('get-initiatives');
  },

  addInitiative: (params: AddInitiativeDto): Promise<VoidResponse> => {
    return ipcRenderer.invoke('add-initiative', params);
  },

  delete: (): Promise<VoidResponse> => {
    return ipcRenderer.invoke('delete');
  }

});



