/**
 * PublicRoute — Route guard for unauthenticated users only.
 *
 * Redirects authenticated users to the dashboard.
 * Used for login/register pages.
 */

import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '@/domain/constants/app.constants';
import { useAuthViewModel } from '@/presentation/features/auth/view-models/useAuthViewModel';

export function PublicRoute() {
  const { isAuthenticated } = useAuthViewModel();

  if (isAuthenticated) {
    return <Navigate to={ROUTES.DASHBOARD} replace />;
  }

  return <Outlet />;
}
