/**
 * Sidebar — Organism component.
 *
 * Responsive sidebar with navigation links.
 * Collapsible on mobile via Sheet (slide-over).
 * Uses lucide-react icons and integrates with React Router.
 */

import { NavLink } from 'react-router-dom';
import {
  BookOpen,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  Moon,
  Sun,
  User,
} from 'lucide-react';

import { Button, buttonVariants } from '@/presentation/shared/atoms/ui/button';
import { Separator } from '@/presentation/shared/atoms/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/presentation/shared/atoms/ui/sheet';
import { APP_CONFIG, ROUTES } from '@/domain/constants/app.constants';
import { useTheme } from '@/presentation/app/providers/ThemeProvider';
import { useAuthViewModel } from '@/presentation/features/auth/view-models/useAuthViewModel';

const navItems = [
  { to: ROUTES.DASHBOARD, label: 'Dashboard', icon: LayoutDashboard },
  { to: ROUTES.COURSES, label: 'Cursos', icon: BookOpen },
  { to: ROUTES.PROFILE, label: 'Perfil', icon: User },
];

function NavContent({ onClose }: { onClose?: () => void }) {
  const { logout } = useAuthViewModel();
  const { resolvedTheme, toggleTheme } = useTheme();

  return (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-6">
        <GraduationCap className="h-7 w-7 text-primary" />
        <span className="text-lg font-bold">{APP_CONFIG.name}</span>
      </div>

      <Separator />

      {/* Navigation Links */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              }`
            }
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <Separator />

      {/* Bottom Actions */}
      <div className="space-y-2 px-3 py-4">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3"
          onClick={toggleTheme}
        >
          {resolvedTheme === 'dark' ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
          {resolvedTheme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
        </Button>

        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-destructive hover:text-destructive"
          onClick={logout}
        >
          <LogOut className="h-4 w-4" />
          Cerrar sesión
        </Button>
      </div>
    </div>
  );
}

/** Desktop sidebar — always visible on lg+ */
export function DesktopSidebar() {
  return (
    <aside className="hidden h-svh w-64 shrink-0 border-r bg-card lg:block">
      <NavContent />
    </aside>
  );
}

/** Mobile sidebar — Sheet triggered by hamburger button */
export function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger className={buttonVariants({ variant: "ghost", size: "icon" }) + " lg:hidden"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          <span className="sr-only">Toggle menu</span>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 p-0">
        <SheetHeader className="sr-only">
          <SheetTitle>Navegación</SheetTitle>
        </SheetHeader>
        <NavContent />
      </SheetContent>
    </Sheet>
  );
}
