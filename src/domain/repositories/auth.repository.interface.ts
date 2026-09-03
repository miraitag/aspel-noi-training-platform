import type { ApiResponse } from '../models/api.types';
import type { LoginCredentials, RegisterCredentials, User } from '../models/auth.model';

export interface AuthResponse {
  user: User;
  token: string;
}

export interface AuthRepository {
  login(credentials: LoginCredentials): Promise<ApiResponse<AuthResponse>>;
  register(credentials: RegisterCredentials): Promise<ApiResponse<AuthResponse>>;
  getProfile(): Promise<ApiResponse<User>>;
  logout(): Promise<void>;
}
