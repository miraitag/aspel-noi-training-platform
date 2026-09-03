/**
 * AppProviders — Provider composition.
 *
 * Wraps the entire app with all necessary providers.
 * Order matters: outermost providers are most global.
 */

import type { ReactNode } from 'react';

import { Toaster } from '@/presentation/shared/atoms/ui/sonner';

import { ThemeProvider } from './ThemeProvider';

interface AppProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider defaultTheme="system">
      {children}
      <Toaster richColors position="top-right" />
    </ThemeProvider>
  );
}
