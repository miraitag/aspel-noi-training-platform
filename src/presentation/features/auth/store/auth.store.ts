/**
 * Auth Store — Zustand (Singleton pattern by design).
 *
 * Manages authentication state with localStorage persistence via Zustand's persist middleware.
 * This store is the single source of truth for auth state across the entire app.
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { STORAGE_KEYS } from '@/domain/constants/app.constants';

import type { AuthActions, AuthState, LoginCredentials, RegisterCredentials, User } from '@/domain/models/auth.model';
import { authRepository } from '@/infrastructure/repositories/auth.repository';

type AuthStore = AuthState & AuthActions;

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      // State
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,

      // Actions
      login: async (credentials: LoginCredentials) => {
        set({ isLoading: true });
        try {
          const response = await authRepository.login(credentials);
          set({
            user: response.data.user,
            token: response.data.token,
            isAuthenticated: true,
            isLoading: false,
          });
        } catch {
          set({ isLoading: false });
          throw new Error('Error al iniciar sesión');
        }
      },

      register: async (credentials: RegisterCredentials) => {
        set({ isLoading: true });
        try {
          const response = await authRepository.register(credentials);
          set({
            user: response.data.user,
            token: response.data.token,
            isAuthenticated: true,
            isLoading: false,
          });
        } catch {
          set({ isLoading: false });
          throw new Error('Error al registrarse');
        }
      },

      logout: () => {
        authRepository.logout();
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        });
      },

      setUser: (user: User) => set({ user }),

      setLoading: (isLoading: boolean) => set({ isLoading }),

      hydrate: () => {
        // Persist middleware handles rehydration automatically.
        // This method exists for manual re-hydration if needed.
      },
    }),
    {
      name: STORAGE_KEYS.AUTH_TOKEN,
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
);
