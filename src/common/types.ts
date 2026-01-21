export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface ResultResponse<T> {
  data?: T;
}

export interface VoidResponse {
  success: boolean;
  error?: string;
}

export interface NoData { }

export type asyncFn<T> = () => Promise<ResultResponse<T>>;
