import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <ng-container *ngIf="authService.isAuthenticated(); else loginPage">
      <div class="sidebar">
        <div class="sidebar-header">
          <h2>Sistema Restaurante</h2>
        </div>
        <nav class="sidebar-nav">
          <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
          <a routerLink="/usuarios" routerLinkActive="active" *ngIf="rol === 'ADMINISTRADOR'">Usuarios</a>
          <a routerLink="/menu" routerLinkActive="active" *ngIf="rol === 'ADMINISTRADOR' || rol === 'MESERO'">Menu</a>
          <a routerLink="/mesas" routerLinkActive="active" *ngIf="rol === 'ADMINISTRADOR' || rol === 'MESERO'">Mesas</a>
          <a routerLink="/clientes" routerLinkActive="active" *ngIf="rol === 'ADMINISTRADOR' || rol === 'MESERO'">Clientes</a>
          <a routerLink="/pedidos" routerLinkActive="active" *ngIf="rol === 'ADMINISTRADOR' || rol === 'MESERO' || rol === 'CAJERO'">Pedidos</a>
          <a routerLink="/cocina" routerLinkActive="active" *ngIf="rol === 'ADMINISTRADOR' || rol === 'COCINERO'">Cocina</a>
          <a routerLink="/facturacion" routerLinkActive="active" *ngIf="rol === 'ADMINISTRADOR' || rol === 'CAJERO'">Facturacion</a>
          <a routerLink="/inventario" routerLinkActive="active" *ngIf="rol === 'ADMINISTRADOR'">Inventario</a>
          <a routerLink="/proveedores" routerLinkActive="active" *ngIf="rol === 'ADMINISTRADOR'">Proveedores</a>
          <a routerLink="/reportes" routerLinkActive="active" *ngIf="rol === 'ADMINISTRADOR' || rol === 'CAJERO'">Reportes</a>
          <a routerLink="/configuracion" routerLinkActive="active" *ngIf="rol === 'ADMINISTRADOR'">Configuracion</a>
        </nav>
      </div>
      <div class="main-content">
        <div class="header">
          <h3>{{ getTitle() }}</h3>
          <div>
            <span>{{ authService.getUser()?.nombre }} {{ authService.getUser()?.apellido }} ({{ rol }})</span>
            <button class="btn btn-danger" style="margin-left:10px" (click)="logout()">Cerrar Sesion</button>
          </div>
        </div>
        <router-outlet></router-outlet>
      </div>
    </ng-container>
    <ng-template #loginPage>
      <router-outlet></router-outlet>
    </ng-template>
  `
})
export class AppComponent {
  get rol(): string { return this.authService.getUser()?.rol || ''; }

  constructor(public authService: AuthService) {}

  getTitle(): string {
    return 'Sistema de Gestion de Restaurante';
  }

  logout(): void {
    this.authService.logout();
  }
}
