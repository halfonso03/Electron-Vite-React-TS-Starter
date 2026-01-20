export interface UserData {
  id: number;
  name: string;
  email: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface DataResponse<T> {
  data?: T;
}

export interface VoidResponse {
  success: boolean;
  error?: string;
}

export interface NoData { }