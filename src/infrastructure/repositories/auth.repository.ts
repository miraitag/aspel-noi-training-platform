/**
 * Auth Service — Repository Pattern.
 *
 * Encapsulates all authentication API calls.
 * Feature hooks consume this service, never the httpClient directly.
 *
 * Currently simulates backend responses for development.
 * Replace the mock implementations with real API calls when the backend is ready.
 */

import { httpClient } from '@/infrastructure/http/http-client';
import type { ApiResponse } from '@/domain/models/api.types';

import type { LoginCredentials, RegisterCredentials, User } from '@/domain/models/auth.model';
import type { AuthRepository, AuthResponse } from '@/domain/repositories/auth.repository.interface';

export const authRepository: AuthRepository = {
  async login(credentials: LoginCredentials): Promise<ApiResponse<AuthResponse>> {
    // TODO: Replace with real API call
    // return httpClient.post('/auth/login', credentials).then(res => res.data);

    // Mock implementation for development
    await new Promise((resolve) => setTimeout(resolve, 800));

    const mockUser: User = {
      id: '1',
      name: 'Usuario Demo',
      email: credentials.email,
      role: 'student',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    return {
      success: true,
      message: 'Login exitoso',
      data: {
        user: mockUser,
        token: 'mock-jwt-token-' + Date.now(),
      },
    };
  },

  async register(credentials: RegisterCredentials): Promise<ApiResponse<AuthResponse>> {
    // TODO: Replace with real API call
    // return httpClient.post('/auth/register', credentials).then(res => res.data);

    await new Promise((resolve) => setTimeout(resolve, 800));

    const mockUser: User = {
      id: '2',
      name: credentials.name,
      email: credentials.email,
      role: 'student',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    return {
      success: true,
      message: 'Registro exitoso',
      data: {
        user: mockUser,
        token: 'mock-jwt-token-' + Date.now(),
      },
    };
  },

  async getProfile(): Promise<ApiResponse<User>> {
    return httpClient.get('/auth/profile').then((res) => res.data);
  },

  async logout(): Promise<void> {
    // Optional: notify backend
    // await httpClient.post('/auth/logout');
  },
};
