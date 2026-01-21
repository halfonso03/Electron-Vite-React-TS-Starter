import { AddAssigneeDto, AssigneeDto } from '@common/assignee';
import { AddInitiativeDto } from '@common/initiative';
import { AddItemDto, ItemDto } from '@common/item';
import { ResultResponse, UserData, VoidResponse } from '@common/types';
import { ItemFormData } from './client/form-validation-schemas/itemSchema';

declare global {
    interface Window {
        electronAPI: {
            createInitiative: (params: AddInitiativeDto) => Promise<VoidResponse>
            createAssignee: (params: AddAssigneeDto) => Promise<ResultResponse<AddAssigneeDto>>
            createItem: (item: AddItemDto) => Promise<ResultResponse<AddItemDto>>
            getAssignees: () => Promise<ResultResponse<AssigneeDto[]>>
            getInitiatives: () => Promise<ResultResponse<Initiative[]>>
            getItems: () => Promise<ResultResponse<ItemDto[]>>
            delete: () => Promise<VoidResponse>
        };
    }
}