import { UserData } from '@common/types';


declare global {
    interface Window {
        electronAPI: {
            getUser: (id: number) => Promise<ApiResponse<UserData>>;
        };
    }
}