import { AddAssigneeDTO } from '@common/assignee';
import { UserData, VoidResponse } from '@common/types';


declare global {
    interface Window {
        electronAPI: {
            getUser: (id: number) => Promise<ApiResponse<UserData>>;
            insertUser: ({ name: string, email: string }) => Promise<ApiResponse<NoData>>;
            addAssignee: (params: AddAssigneeDTO) => Promise<VoidResponse>;
        };
    }
}