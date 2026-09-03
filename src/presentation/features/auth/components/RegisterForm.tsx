/**
 * RegisterForm — Auth feature component.
 *
 * Uses React Hook Form + Yup resolver for validation.
 * Includes password confirmation field.
 */

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Loader2, UserPlus } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate, Link } from 'react-router-dom';

import { Button } from '@/presentation/shared/atoms/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/presentation/shared/atoms/ui/card';
import { FormField } from '@/presentation/shared/molecules/FormField';
import { ROUTES } from '@/domain/constants/app.constants';

import { registerSchema, type RegisterFormData } from '../schemas/auth.schema';
import { useAuthViewModel } from '../view-models/useAuthViewModel';

export function RegisterForm() {
  const { register, isLoading } = useAuthViewModel();
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await register(data);
      toast.success('¡Registro exitoso! Bienvenido.');
      navigate(ROUTES.DASHBOARD);
    } catch {
      toast.error('Error al registrarse. Intenta de nuevo.');
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold">Crear Cuenta</CardTitle>
        <CardDescription>
          Completa el formulario para unirte a la plataforma
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <FormField<RegisterFormData>
            name="name"
            control={control}
            label="Nombre completo"
            placeholder="Juan Pérez"
            disabled={isLoading}
          />

          <FormField<RegisterFormData>
            name="email"
            control={control}
            label="Email"
            type="email"
            placeholder="tu@email.com"
            disabled={isLoading}
          />

          <FormField<RegisterFormData>
            name="password"
            control={control}
            label="Contraseña"
            type="password"
            placeholder="••••••••"
            disabled={isLoading}
          />

          <FormField<RegisterFormData>
            name="confirmPassword"
            control={control}
            label="Confirmar contraseña"
            type="password"
            placeholder="••••••••"
            disabled={isLoading}
          />

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Registrando...
              </>
            ) : (
              <>
                <UserPlus className="mr-2 h-4 w-4" />
                Crear Cuenta
              </>
            )}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            ¿Ya tienes cuenta?{' '}
            <Link to={ROUTES.LOGIN} className="text-primary underline-offset-4 hover:underline">
              Inicia sesión
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
