import { AddAssigneeDto, AssigneeDto } from '@common/assignee';
import { AddInitiativeDto } from '@common/initiative';
import { DataResponse, UserData, VoidResponse } from '@common/types';


declare global {
    interface Window {
        electronAPI: {
            getUser: (id: number) => Promise<ApiResponse<UserData>>;
            insertUser: ({ name: string, email: string }) => Promise<ApiResponse<NoData>>;
            addAssignee: (params: AddAssigneeDto) => Promise<VoidResponse>;
            getAssignees: () => Promise<DataResponse<AssigneeDto[]>>
            getInitiatives: () => Promise<DataResponse<Initiative[]>>
            addInitiative: (params: AddInitiativeDto) => Promise<VoidResponse>
            delete: () => Promise<VoidResponse>
        };
    }
}