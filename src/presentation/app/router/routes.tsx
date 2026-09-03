/**
 * Route Definitions — Factory Pattern.
 *
 * Centralized route configuration using React Router v7.
 * Routes are organized by access level (public vs protected).
 */

import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import { ROUTES } from '@/domain/constants/app.constants';
import { AuthLayout } from '@/presentation/shared/templates/AuthLayout';
import { MainLayout } from '@/presentation/shared/templates/MainLayout';
import { LoginPage } from '@/presentation/features/auth/pages/LoginPage';
import { RegisterPage } from '@/presentation/features/auth/pages/RegisterPage';
import { DashboardPage } from '@/presentation/features/dashboard/pages/DashboardPage';

import { ProtectedRoute } from './ProtectedRoute';
import { PublicRoute } from './PublicRoute';

/**
 * Creates the application route tree.
 * Factory function allows future parameterization (e.g., feature flags).
 */
export function createRoutes(): RouteObject[] {
  return [
    // Public routes (login, register)
    {
      element: <PublicRoute />,
      children: [
        {
          element: <AuthLayout />,
          children: [
            { path: ROUTES.LOGIN, element: <LoginPage /> },
            { path: ROUTES.REGISTER, element: <RegisterPage /> },
          ],
        },
      ],
    },

    // Protected routes (dashboard, courses, etc.)
    {
      element: <ProtectedRoute />,
      children: [
        {
          element: <MainLayout />,
          children: [
            { path: ROUTES.DASHBOARD, element: <DashboardPage /> },
            {
              path: ROUTES.COURSES,
              element: (
                <div className="flex items-center justify-center py-20">
                  <p className="text-lg text-muted-foreground">
                    📚 Módulo de cursos — Próximamente
                  </p>
                </div>
              ),
            },
            {
              path: ROUTES.PROFILE,
              element: (
                <div className="flex items-center justify-center py-20">
                  <p className="text-lg text-muted-foreground">
                    👤 Perfil de usuario — Próximamente
                  </p>
                </div>
              ),
            },
          ],
        },
      ],
    },

    // Redirect root to dashboard (will redirect to login if not authenticated)
    { path: ROUTES.HOME, element: <Navigate to={ROUTES.DASHBOARD} replace /> },

    // 404 catch-all
    {
      path: '*',
      element: (
        <div className="flex h-svh flex-col items-center justify-center gap-4">
          <h1 className="text-6xl font-bold text-muted-foreground">404</h1>
          <p className="text-lg text-muted-foreground">Página no encontrada</p>
        </div>
      ),
    },
  ];
}
