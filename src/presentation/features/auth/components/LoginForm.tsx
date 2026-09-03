/**
 * LoginForm — Auth feature component.
 *
 * Uses React Hook Form + Yup resolver for validation.
 * Consumes the useAuthViewModel ViewModel hook for login logic.
 */

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Loader2, LogIn } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate, Link } from 'react-router-dom';

import { Button } from '@/presentation/shared/atoms/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/presentation/shared/atoms/ui/card';
import { FormField } from '@/presentation/shared/molecules/FormField';
import { ROUTES } from '@/domain/constants/app.constants';

import { loginSchema, type LoginFormData } from '../schemas/auth.schema';
import { useAuthViewModel } from '../view-models/useAuthViewModel';

export function LoginForm() {
  const { login, isLoading } = useAuthViewModel();
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data);
      toast.success('¡Bienvenido de vuelta!');
      navigate(ROUTES.DASHBOARD);
    } catch {
      toast.error('Credenciales inválidas. Intenta de nuevo.');
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold">Iniciar Sesión</CardTitle>
        <CardDescription>Ingresa tus credenciales para acceder a la plataforma</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <FormField<LoginFormData>
            name="email"
            control={control}
            label="Email"
            type="email"
            placeholder="tu@email.com"
            disabled={isLoading}
          />

          <FormField<LoginFormData>
            name="password"
            control={control}
            label="Contraseña"
            type="password"
            placeholder="••••••••"
            disabled={isLoading}
          />

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Iniciando sesión...
              </>
            ) : (
              <>
                <LogIn className="mr-2 h-4 w-4" />
                Iniciar Sesión
              </>
            )}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            ¿No tienes cuenta?{' '}
            <Link to={ROUTES.REGISTER} className="text-primary underline-offset-4 hover:underline">
              Regístrate
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
