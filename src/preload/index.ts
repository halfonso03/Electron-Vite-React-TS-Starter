import { ItemDto } from '@common/item';
import { AddInitiativeDto, InitiativeDto } from '@common/initiative';
import { contextBridge, ipcRenderer } from 'electron';
import { ResultResponse, VoidResponse } from '@common/types';
import { AddAssigneeDto, AssigneeDto } from '@common/assignee';


contextBridge.exposeInMainWorld('electronAPI', {
  // We wrap the invoke call in a typed function

  insertUser: (params: { name: string, email: string }): Promise<VoidResponse> => {
    return ipcRenderer.invoke('insert-user', params);
  },

  addAssignee: (params: AddAssigneeDto): Promise<ResultResponse<AddAssigneeDto>> => {

    console.log('params', params)

    return ipcRenderer.invoke('add-assignee', params);
  },

  getAssignees: (): Promise<ResultResponse<AssigneeDto[]>> => {
    return ipcRenderer.invoke('get-assignees');
  },

  getInitiatives: (): Promise<ResultResponse<InitiativeDto[]>> => {
    return ipcRenderer.invoke('get-initiatives');
  },

  addInitiative: (params: AddInitiativeDto): Promise<VoidResponse> => {
    return ipcRenderer.invoke('add-initiative', params);
  },

  getItems: (): Promise<ResultResponse<ItemDto[]>> => {
    return ipcRenderer.invoke('get-items');
  },

  delete: (): Promise<VoidResponse> => {
    return ipcRenderer.invoke('delete');
  }

});



