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