/**
 * useAuthViewModel — ViewModel hook (MVVM pattern adapted to React).
 *
 * This hook acts as the ViewModel: it combines the auth store (state)
 * with the auth service (data layer) and exposes a clean API
 * for components to consume.
 *
 * Components NEVER access the store or service directly.
 */

import { useAuthStore } from '../store/auth.store';

export function useAuthViewModel() {
  const { user, token, isAuthenticated, isLoading, login, register, logout } = useAuthStore();

  return {
    // State
    user,
    token,
    isAuthenticated,
    isLoading,

    // Actions
    login,
    register,
    logout,
  };
}
