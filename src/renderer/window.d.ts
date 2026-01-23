import { AddAssigneeDto, AssigneeDto } from '@common/assignee';
import { AddInitiativeDto } from '@common/initiative';
import { AddItemDto, ItemDto, UpdateItemDto } from '@common/item';
import { ResultResponse, UserData, VoidResponse } from '@common/types';
import { ItemFormData } from './client/form-validation-schemas/itemSchema';

declare global {
    interface Window {
        electronAPI: {
            getInitiatives: () => Promise<ResultResponse<Initiative[]>>
            createInitiative: (params: AddInitiativeDto) => Promise<ResultResponse<number>>
            getAssignees: () => Promise<ResultResponse<AssigneeDto[]>>
            createAssignee: (params: AddAssigneeDto) => Promise<ResultResponse<AddAssigneeDto>>
            getItem: (params: number) => Promise<ResultResponse<ItemDto>>
            getItems: (params: { itemStatusId: string, searchTerm: string, pageNumber: number, pageSize: number }) => Promise<ResultResponse<ItemsPagedResult>>
            createItem: (item: AddItemDto) => Promise<ResultResponse<AddItemDto>>
            updateItem: (item: UpdateItemDto) => Promise<ResultResponse<ItemDto>>
            toggleDisposal: (id: number) => Promise<ResultResponse<boolean | null>>
            populateDatabase: (itemTypes: { value: string, text: string }[]) => Promise<VoidResponse>
            delete: () => Promise<VoidResponse>
        };
    }
}