import { UserData } from '@common/types';


declare global {
    interface Window {
        electronAPI: {
            getUser: (id: number) => Promise<ApiResponse<UserData>>;
            insertUser: ({ name: string, email: string }) => Promise<ApiResponse<NoData>>;
        };
    }
}