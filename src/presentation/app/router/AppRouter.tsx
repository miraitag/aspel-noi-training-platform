/**
 * AppRouter — Root router component.
 *
 * Uses createBrowserRouter for React Router v7 data router features.
 */

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useMemo } from 'react';

import { createRoutes } from './routes';

export function AppRouter() {
  const router = useMemo(() => createBrowserRouter(createRoutes()), []);

  return <RouterProvider router={router} />;
}
