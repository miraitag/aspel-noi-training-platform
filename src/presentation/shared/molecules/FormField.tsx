/**
 * FormField — Molecule component.
 *
 * Combines a Label + Input + Error message into a single reusable form field.
 * Integrates with React Hook Form via the Controller pattern.
 */

import { type Control, Controller, type FieldValues, type Path } from 'react-hook-form';

import { Input } from '@/presentation/shared/atoms/ui/input';
import { Label } from '@/presentation/shared/atoms/ui/label';

interface FormFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
}

export function FormField<T extends FieldValues>({
  name,
  control,
  label,
  type = 'text',
  placeholder,
  disabled = false,
}: FormFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="space-y-2">
          <Label htmlFor={name} className={fieldState.error ? 'text-destructive' : ''}>
            {label}
          </Label>
          <Input
            {...field}
            id={name}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            className={fieldState.error ? 'border-destructive' : ''}
          />
          {fieldState.error && (
            <p className="text-sm text-destructive">{fieldState.error.message}</p>
          )}
        </div>
      )}
    />
  );
}
