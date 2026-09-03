/**
 * ProtectedRoute — Route guard for authenticated users.
 *
 * Wraps protected routes and redirects to login if not authenticated.
 */

import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { ROUTES } from '@/domain/constants/app.constants';
import { useAuthViewModel } from '@/presentation/features/auth/view-models/useAuthViewModel';

export function ProtectedRoute() {
  const { isAuthenticated } = useAuthViewModel();
  const location = useLocation();

  if (!isAuthenticated) {
    // Preserve the intended destination for post-login redirect
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }

  return <Outlet />;
}
