import { AddAssigneeDto, AssigneeDto } from '@common/assignee';
import { AddInitiativeDto } from '@common/initiative';
import { AddItemDto, ItemDto, UpdateItemDto } from '@common/item';
import { ResultResponse, UserData, VoidResponse } from '@common/types';
import { ItemFormData } from './client/form-validation-schemas/itemSchema';

declare global {
    interface Window {
        electronAPI: {
            getInitiatives: () => Promise<ResultResponse<Initiative[]>>
            createInitiative: (params: AddInitiativeDto) => Promise<VoidResponse>
            getAssignees: () => Promise<ResultResponse<AssigneeDto[]>>
            createAssignee: (params: AddAssigneeDto) => Promise<ResultResponse<AddAssigneeDto>>
            getItem: (params: number) => Promise<ResultResponse<ItemDto>>
            getItems: () => Promise<ResultResponse<ItemDto[]>>
            createItem: (item: AddItemDto) => Promise<ResultResponse<AddItemDto>>
            updateItem: (item: UpdateItemDto) => Promise<ResultResponse<ItemDto>>
            toggleDisposal: (id: number) => Promise<ResultResponse<boolean | null>>

            delete: () => Promise<VoidResponse>
        };
    }
}