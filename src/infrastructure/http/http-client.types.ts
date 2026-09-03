import type { AxiosRequestConfig } from 'axios';

export interface HttpClientConfig extends AxiosRequestConfig {
  skipAuth?: boolean;
}

export interface HttpErrorResponse {
  message: string;
  statusCode: number;
  errors?: Record<string, string[]>;
}
