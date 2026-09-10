/**
 * ProfilePage — User profile, settings, and preferences.
 */

import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Trash2, Moon, Sun, Monitor, User, Shield, Bell, RotateCcw } from 'lucide-react';

import { useAuthStore } from '@/presentation/features/auth/store/auth.store';
import { useProgressStore } from '@/presentation/features/courses/store/useProgressStore';
import { useTheme } from '@/presentation/app/providers/ThemeProvider';
import { Button } from '@/presentation/shared/atoms/ui/button';
import { Input } from '@/presentation/shared/atoms/ui/input';
import { Label } from '@/presentation/shared/atoms/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/presentation/shared/atoms/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/presentation/shared/atoms/ui/tabs';
import { Separator } from '@/presentation/shared/atoms/ui/separator';
import { ConfirmDialog } from '@/presentation/shared/atoms/ui/confirm-dialog';
import { toast } from 'sonner';

export function ProfilePage() {
  const navigate = useNavigate();
  const { user, setUser, logout } = useAuthStore();
  const { resetProgress } = useProgressStore();
  const { theme, setTheme } = useTheme();

  // Local state for forms
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [isSaving, setIsSaving] = useState(false);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      if (user) {
        setUser({ ...user, name, email });
        toast.success('Perfil actualizado correctamente');
      }
      setIsSaving(false);
    }, 800);
  };

  // Confirm dialog state
  const [confirmDialog, setConfirmDialog] = useState<{
    open: boolean;
    title: string;
    description: string;
    confirmLabel: string;
    onConfirm: () => void;
  }>({ open: false, title: '', description: '', confirmLabel: '', onConfirm: () => {} });

  const openConfirm = useCallback((opts: Omit<typeof confirmDialog, 'open'>) => {
    setConfirmDialog({ ...opts, open: true });
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
    toast.info('Sesión cerrada correctamente');
  };

  const handleDeleteAccount = () => {
    openConfirm({
      title: 'Eliminar cuenta',
      description: 'Se eliminará tu cuenta y todos los datos asociados de forma permanente. Esta acción no se puede deshacer.',
      confirmLabel: 'Eliminar cuenta',
      onConfirm: () => {
        logout();
        navigate('/login');
        toast.error('Tu cuenta ha sido eliminada permanentemente.');
      },
    });
  };

  const handleResetCourse = () => {
    openConfirm({
      title: 'Reiniciar curso completo',
      description: 'Se borrará TODO tu progreso en lecciones, quizzes y niveles. Volverás al 0%. Esta acción no se puede deshacer.',
      confirmLabel: 'Reiniciar curso',
      onConfirm: () => {
        resetProgress();
        toast.success('Tu progreso ha sido reiniciado completamente.');
      },
    });
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="animate-fade-in-up">
        <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">Configuración de Perfil</h1>
        <p className="text-muted-foreground mt-2">
          Administra tus datos personales, preferencias de la plataforma y seguridad.
        </p>
      </div>

      <Tabs defaultValue="general" className="w-full animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="general" className="flex items-center gap-2">
            <User className="h-4 w-4" /> <span className="hidden sm:inline">General</span>
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2">
            <Monitor className="h-4 w-4" /> <span className="hidden sm:inline">Ajustes</span>
          </TabsTrigger>
          <TabsTrigger value="account" className="flex items-center gap-2">
            <Shield className="h-4 w-4" /> <span className="hidden sm:inline">Cuenta</span>
          </TabsTrigger>
        </TabsList>

        {/* TAB: GENERAL */}
        <TabsContent value="general" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Datos Personales</CardTitle>
              <CardDescription>
                Actualiza tu información personal. Los cambios se verán reflejados en toda la plataforma.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleUpdateProfile} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                  />
                </div>
                <Button type="submit" disabled={isSaving || (!name && !email)}>
                  {isSaving ? 'Guardando...' : 'Guardar cambios'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* TAB: AJUSTES */}
        <TabsContent value="settings" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Apariencia</CardTitle>
              <CardDescription>
                Personaliza el tema visual de la plataforma.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  variant={theme === 'light' ? 'default' : 'outline'}
                  className="flex-1 justify-start gap-3"
                  onClick={() => setTheme('light')}
                >
                  <Sun className="h-5 w-5" /> Modo Claro
                </Button>
                <Button
                  variant={theme === 'dark' ? 'default' : 'outline'}
                  className="flex-1 justify-start gap-3"
                  onClick={() => setTheme('dark')}
                >
                  <Moon className="h-5 w-5" /> Modo Oscuro
                </Button>
                <Button
                  variant={theme === 'system' ? 'default' : 'outline'}
                  className="flex-1 justify-start gap-3"
                  onClick={() => setTheme('system')}
                >
                  <Monitor className="h-5 w-5" /> Sistema
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notificaciones</CardTitle>
              <CardDescription>
                Administra cómo quieres que la plataforma se comunique contigo.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <Label className="text-base flex items-center gap-2">
                    <Bell className="h-4 w-4" /> Boletín de actualizaciones
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Recibe un correo cuando agreguemos nuevas lecciones de Aspel NOI.
                  </p>
                </div>
                {/* Simulated Toggle */}
                <Button variant="outline" size="sm" onClick={() => toast.success('Preferencia actualizada')}>
                  Desactivar
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* TAB: CUENTA */}
        <TabsContent value="account" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Seguridad</CardTitle>
              <CardDescription>
                Actualiza tu contraseña para mantener tu cuenta segura.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); toast.success('Contraseña actualizada'); }}>
                <div className="space-y-2">
                  <Label htmlFor="current-password">Contraseña actual</Label>
                  <Input id="current-password" type="password" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">Nueva contraseña</Label>
                  <Input id="new-password" type="password" required />
                </div>
                <Button type="submit">Actualizar contraseña</Button>
              </form>
            </CardContent>
          </Card>

          <Separator />

          <Card className="border-destructive/50">
            <CardHeader>
              <CardTitle className="text-destructive">Zona de Peligro</CardTitle>
              <CardDescription>
                Acciones irreversibles sobre tu cuenta. Proceder con precaución.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-lg border border-destructive/20 bg-destructive/10 p-4">
                <div className="space-y-0.5">
                  <Label className="text-base text-destructive flex items-center gap-2">
                    <LogOut className="h-4 w-4" /> Cerrar sesión
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Cierra tu sesión activa en este dispositivo.
                  </p>
                </div>
                <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground" onClick={handleLogout}>
                  Cerrar sesión
                </Button>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-lg border border-destructive/20 bg-destructive/10 p-4">
                <div className="space-y-0.5">
                  <Label className="text-base text-destructive flex items-center gap-2">
                    <Trash2 className="h-4 w-4" /> Eliminar cuenta
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Elimina tu cuenta y todos los datos asociados permanentemente.
                  </p>
                </div>
                <Button variant="destructive" onClick={handleDeleteAccount}>
                  Eliminar cuenta
                </Button>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-lg border border-destructive/20 bg-destructive/10 p-4">
                <div className="space-y-0.5">
                  <Label className="text-base text-destructive flex items-center gap-2">
                    <RotateCcw className="h-4 w-4" /> Reiniciar curso completo
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Borra todo tu progreso en lecciones, quizzes y niveles. Volverás al 0%.
                  </p>
                </div>
                <Button variant="destructive" onClick={handleResetCourse}>
                  Reiniciar curso
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <ConfirmDialog
        open={confirmDialog.open}
        onOpenChange={(open) => setConfirmDialog((prev) => ({ ...prev, open }))}
        title={confirmDialog.title}
        description={confirmDialog.description}
        confirmLabel={confirmDialog.confirmLabel}
        variant="destructive"
        onConfirm={confirmDialog.onConfirm}
      />
    </div>
  );
}
