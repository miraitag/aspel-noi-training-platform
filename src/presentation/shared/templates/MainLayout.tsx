/**
 * MainLayout — Template component.
 *
 * Layout for authenticated pages: Sidebar + Navbar + Content area.
 * Uses React Router's Outlet for nested route rendering.
 */

import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { DesktopSidebar, MobileSidebar } from '@/presentation/shared/organisms/Sidebar';
import { useAuthViewModel } from '@/presentation/features/auth/view-models/useAuthViewModel';

export function MainLayout() {
  const { user } = useAuthViewModel();
  const { pathname } = useLocation();
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <div className="flex h-svh overflow-hidden">
      {/* Sidebar */}
      <DesktopSidebar />

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="flex h-14 shrink-0 items-center gap-4 border-b bg-card px-4 lg:px-6">
          <MobileSidebar />
          <div className="ml-auto flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              Hola, <span className="font-medium text-foreground">{user?.name || 'Usuario'}</span>
            </span>
          </div>
        </header>

        {/* Page Content */}
        <main ref={mainRef} className="flex-1 overflow-y-auto p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
