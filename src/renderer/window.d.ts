import { AddAssigneeDto, AssigneeDto } from '@common/assignee';
import { AddInitiativeDto } from '@common/initiative';
import { ItemDto } from '@common/item';
import { ResultResponse, UserData, VoidResponse } from '@common/types';
import { ItemFormData } from './client/form-validation-schemas/itemSchema';

declare global {
    interface Window {
        electronAPI: {
            createItem: (item: ItemDto) => Promise<ResultResponse<ItemDto>>
            addAssignee: (params: AddAssigneeDto) => Promise<ResultResponse<AddAssigneeDto>>
            getAssignees: () => Promise<ResultResponse<AssigneeDto[]>>
            getInitiatives: () => Promise<ResultResponse<Initiative[]>>
            addInitiative: (params: AddInitiativeDto) => Promise<VoidResponse>
            getItems: () => Promise<ResultResponse<ItemDto[]>>
            delete: () => Promise<VoidResponse>
        };
    }
}