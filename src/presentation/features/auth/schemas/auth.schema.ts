/**
 * Yup validation schemas for authentication forms.
 *
 * Factory Pattern: each function returns a configured schema.
 * Centralizes validation rules for consistency across forms.
 */

import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup
    .string()
    .required('El email es obligatorio')
    .email('Ingresa un email válido'),
  password: yup
    .string()
    .required('La contraseña es obligatoria')
    .min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

export const registerSchema = yup.object({
  name: yup
    .string()
    .required('El nombre es obligatorio')
    .min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: yup
    .string()
    .required('El email es obligatorio')
    .email('Ingresa un email válido'),
  password: yup
    .string()
    .required('La contraseña es obligatoria')
    .min(6, 'La contraseña debe tener al menos 6 caracteres'),
  confirmPassword: yup
    .string()
    .required('Confirma tu contraseña')
    .oneOf([yup.ref('password')], 'Las contraseñas no coinciden'),
});

export type LoginFormData = yup.InferType<typeof loginSchema>;
export type RegisterFormData = yup.InferType<typeof registerSchema>;
