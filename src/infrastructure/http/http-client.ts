/**
 * Centralized HTTP client — Gateway Pattern.
 *
 * Single Axios instance with interceptors for:
 * - Automatic token injection (request interceptor)
 * - 401 handling with automatic logout (response interceptor)
 * - Standardized error transformation
 *
 * All feature services (repositories) use this client instead of
 * creating their own Axios instances.
 */

import axios from 'axios';
import type { AxiosError } from 'axios';

import { API_CONFIG, STORAGE_KEYS } from '@/domain/constants/app.constants';
import { localStorageService } from '@/infrastructure/storage/local-storage.service';

import type { HttpErrorResponse } from './http-client.types';

const httpClient = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Request Interceptor:
 * Injects the auth token from localStorage into every request header.
 */
httpClient.interceptors.request.use(
  (config) => {
    const token = localStorageService.get<string>(STORAGE_KEYS.AUTH_TOKEN);

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

/**
 * Response Interceptor:
 * - Handles 401 (unauthorized) by clearing auth data and redirecting to login.
 * - Transforms error responses into a consistent HttpErrorResponse shape.
 */
httpClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError<HttpErrorResponse>) => {
    if (error.response?.status === 401) {
      localStorageService.remove(STORAGE_KEYS.AUTH_TOKEN);
      localStorageService.remove(STORAGE_KEYS.AUTH_USER);
      window.location.href = '/login';
    }

    const errorResponse: HttpErrorResponse = {
      message: error.response?.data?.message || error.message || 'An unexpected error occurred',
      statusCode: error.response?.status || 500,
      errors: error.response?.data?.errors,
    };

    return Promise.reject(errorResponse);
  },
);

export { httpClient };
