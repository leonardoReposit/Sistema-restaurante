import { Routes } from '@angular/router';
import { LoginComponent } from './core/auth/login.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', loadComponent: () => import('./modules/dashboard/dashboard.component').then(m => m.DashboardComponent), canActivate: [authGuard] },
  { path: 'usuarios', loadComponent: () => import('./modules/usuarios/usuarios.component').then(m => m.UsuariosComponent), canActivate: [authGuard] },
  { path: 'menu', loadComponent: () => import('./modules/menu/menu.component').then(m => m.MenuComponent), canActivate: [authGuard] },
  { path: 'mesas', loadComponent: () => import('./modules/mesas/mesas.component').then(m => m.MesasComponent), canActivate: [authGuard] },
  { path: 'clientes', loadComponent: () => import('./modules/clientes/clientes.component').then(m => m.ClientesComponent), canActivate: [authGuard] },
  { path: 'pedidos', loadComponent: () => import('./modules/pedidos/pedidos.component').then(m => m.PedidosComponent), canActivate: [authGuard] },
  { path: 'cocina', loadComponent: () => import('./modules/cocina/cocina.component').then(m => m.CocinaComponent), canActivate: [authGuard] },
  { path: 'facturacion', loadComponent: () => import('./modules/facturacion/facturacion.component').then(m => m.FacturacionComponent), canActivate: [authGuard] },
  { path: 'inventario', loadComponent: () => import('./modules/inventario/inventario.component').then(m => m.InventarioComponent), canActivate: [authGuard] },
  { path: 'proveedores', loadComponent: () => import('./modules/proveedores/proveedores.component').then(m => m.ProveedoresComponent), canActivate: [authGuard] },
  { path: 'reportes', loadComponent: () => import('./modules/reportes/reportes.component').then(m => m.ReportesComponent), canActivate: [authGuard] },
  { path: 'configuracion', loadComponent: () => import('./modules/configuracion/configuracion.component').then(m => m.ConfiguracionComponent), canActivate: [authGuard] },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' }
];
