/**
 * AuthLayout — Template component.
 *
 * Centered layout for login/register pages.
 * Split view with branding section on the left (desktop only).
 */

import { Outlet } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

import { APP_CONFIG } from '@/domain/constants/app.constants';

export function AuthLayout() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      {/* Branding Panel — visible on desktop */}
      <div className="relative hidden flex-col justify-between bg-primary p-10 text-primary-foreground lg:flex">
        <div className="flex items-center gap-3">
          <GraduationCap className="h-8 w-8" />
          <span className="text-xl font-bold">{APP_CONFIG.name}</span>
        </div>
        <div className="space-y-4">
          <blockquote className="text-lg font-medium leading-relaxed">
            "La inversión en conocimiento paga el mejor interés."
          </blockquote>
          <p className="text-sm opacity-80">— Benjamin Franklin</p>
        </div>
        <p className="text-sm opacity-60">
          &copy; {new Date().getFullYear()} {APP_CONFIG.name}
        </p>
      </div>

      {/* Form Panel */}
      <div className="flex items-center justify-center p-6 lg:p-10">
        <Outlet />
      </div>
    </div>
  );
}
