/**
 * ConfirmDialog — Modal de confirmación reutilizable.
 *
 * Reemplaza `window.confirm` con un diálogo que respeta el sistema de diseño.
 * Soporta variantes: default (neutral) y destructive (acciones peligrosas).
 */

import { Dialog as DialogPrimitive } from '@base-ui/react/dialog';
import { AlertTriangle } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/presentation/shared/atoms/ui/button';

interface ConfirmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: 'default' | 'destructive';
  onConfirm: () => void;
}

export function ConfirmDialog({
  open,
  onOpenChange,
  title,
  description,
  confirmLabel = 'Confirmar',
  cancelLabel = 'Cancelar',
  variant = 'default',
  onConfirm,
}: ConfirmDialogProps) {
  const isDestructive = variant === 'destructive';

  const handleConfirm = () => {
    onConfirm();
    onOpenChange(false);
  };

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Backdrop
          className="fixed inset-0 z-50 bg-black/40 transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-backdrop-filter:backdrop-blur-sm"
        />
        <DialogPrimitive.Popup
          className={cn(
            'fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2',
            'rounded-xl border bg-card p-6 shadow-2xl',
            'transition duration-200 data-ending-style:opacity-0 data-ending-style:scale-95 data-starting-style:opacity-0 data-starting-style:scale-95',
          )}
        >
          <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-4">
            {/* Icon */}
            <div className={cn(
              'flex h-12 w-12 shrink-0 items-center justify-center rounded-full',
              isDestructive ? 'bg-destructive/10' : 'bg-primary/10',
            )}>
              <AlertTriangle className={cn(
                'h-6 w-6',
                isDestructive ? 'text-destructive' : 'text-primary',
              )} />
            </div>

            {/* Text */}
            <div className="space-y-2">
              <DialogPrimitive.Title className="text-lg font-semibold leading-tight">
                {title}
              </DialogPrimitive.Title>
              <DialogPrimitive.Description className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </DialogPrimitive.Description>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <DialogPrimitive.Close
              render={
                <Button variant="outline">
                  {cancelLabel}
                </Button>
              }
            />
            <Button
              variant={isDestructive ? 'destructive' : 'default'}
              onClick={handleConfirm}
            >
              {confirmLabel}
            </Button>
          </div>
        </DialogPrimitive.Popup>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
