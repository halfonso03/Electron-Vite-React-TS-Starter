import { AddItemDto, ItemDto, ItemsPagedResult, UpdateItemDto } from '@common/item';
import { AddInitiativeDto, InitiativeDto } from '@common/initiative';
import { contextBridge, ipcRenderer } from 'electron';
import { ResultResponse, VoidResponse } from '@common/types';
import { AddAssigneeDto, AssigneeDto } from '@common/assignee';


contextBridge.exposeInMainWorld('electronAPI', {
  // We wrap the invoke call in a typed function

  getAssignees: (): Promise<ResultResponse<AssigneeDto[]>> => {
    return ipcRenderer.invoke('get-assignees');
  },

  getInitiatives: (): Promise<ResultResponse<InitiativeDto[]>> => {
    return ipcRenderer.invoke('get-initiatives');
  },

  getItems: (params: { itemStatusId: string, searchTerm: string, pageNumber: number, pageSize: number }): Promise<ResultResponse<ItemsPagedResult[]>> => {
    return ipcRenderer.invoke('get-items', params);
  },

  createAssignee: (params: AddAssigneeDto): Promise<ResultResponse<AddAssigneeDto>> => {
    return ipcRenderer.invoke('add-assignee', params);
  },

  createInitiative: (params: AddInitiativeDto): Promise<ResultResponse<number>> => {
    return ipcRenderer.invoke('add-initiative', params);
  },

  getItem: (params: number): Promise<ResultResponse<ItemDto>> => {
    return ipcRenderer.invoke('get-item', params);
  },

  createItem: (params: AddItemDto): Promise<ResultResponse<AddItemDto>> => {
    return ipcRenderer.invoke('add-item', params);
  },

  updateItem: (params: UpdateItemDto): Promise<ResultResponse<ItemDto>> => {
    return ipcRenderer.invoke('update-item', params);
  },

  toggleDisposal: (params: number): Promise<ResultResponse<boolean | null>> => {
    return ipcRenderer.invoke('toggle-disposal', params);
  },

  // this deletes all data!!
  delete: (): Promise<VoidResponse> => {
    return ipcRenderer.invoke('delete');
  },

  populateDatabase: (params: { value: string, text: string }[]): Promise<VoidResponse> => {
    return ipcRenderer.invoke('populate-database', params)
  }

});



