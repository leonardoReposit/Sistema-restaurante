import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { Usuario } from '../../core/models/models';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="card">
      <div style="display:flex;justify-content:space-between;margin-bottom:15px;">
        <h3>Gestion de Usuarios</h3>
        <button class="btn btn-primary" (click)="nuevo()">+ Nuevo Usuario</button>
      </div>
      <table class="table">
        <thead>
          <tr><th>ID</th><th>Usuario</th><th>Nombre</th><th>Rol</th><th>Estado</th><th>Acciones</th></tr>
        </thead>
        <tbody>
          <tr *ngFor="let u of usuarios$ | async">
            <td>{{ u.id }}</td>
            <td>{{ u.username }}</td>
            <td>{{ u.nombre }} {{ u.apellido }}</td>
            <td><span class="badge badge-info">{{ u.rol }}</span></td>
            <td><span [class.badge-success]="u.enabled" [class.badge-danger]="!u.enabled">{{ u.enabled ? 'Activo' : 'Inactivo' }}</span></td>
            <td>
              <button class="btn btn-warning btn-sm" (click)="editar(u)">Editar</button>
              <button class="btn btn-sm" [class.btn-success]="u.enabled" [class.btn-secondary]="!u.enabled" (click)="toggleEstado(u)">{{ u.enabled ? 'Desactivar' : 'Activar' }}</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="modal-overlay" *ngIf="showModal">
      <div class="modal-content">
        <h3>{{ editMode ? 'Editar' : 'Nuevo' }} Usuario</h3>
        <form (ngSubmit)="guardar()">
          <div class="grid-2">
            <div class="form-group">
              <label>Usuario</label>
              <input class="form-control" [(ngModel)]="form.username" name="username" required>
            </div>
            <div class="form-group">
              <label>Password</label>
              <input class="form-control" type="password" [(ngModel)]="form.password" name="password">
            </div>
            <div class="form-group">
              <label>Nombre</label>
              <input class="form-control" [(ngModel)]="form.nombre" name="nombre" required>
            </div>
            <div class="form-group">
              <label>Apellido</label>
              <input class="form-control" [(ngModel)]="form.apellido" name="apellido" required>
            </div>
            <div class="form-group">
              <label>Email</label>
              <input class="form-control" type="email" [(ngModel)]="form.email" name="email">
            </div>
            <div class="form-group">
              <label>Telefono</label>
              <input class="form-control" [(ngModel)]="form.telefono" name="telefono">
            </div>
            <div class="form-group">
              <label>Rol</label>
              <select class="form-control" [(ngModel)]="form.rol" name="rol">
                <option value="ADMINISTRADOR">Administrador</option>
                <option value="CAJERO">Cajero</option>
                <option value="MESERO">Mesero</option>
                <option value="COCINERO">Cocinero</option>
              </select>
            </div>
          </div>
          <div class="mt-3">
            <button type="submit" class="btn btn-success">Guardar</button>
            <button type="button" class="btn btn-secondary" (click)="cancelar()">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  `
})
export class UsuariosComponent {
  usuarios$ = new BehaviorSubject<Usuario[]>([]);
  showModal = false;
  editMode = false;
  form: any = {};

  constructor(private api: ApiService) {
    this.load();
  }

  load(): void {
    this.api.getUsuarios().subscribe(d => this.usuarios$.next(d));
  }

  nuevo(): void {
    this.form = { enabled: true, rol: 'MESERO' };
    this.editMode = false;
    this.showModal = true;
  }

  editar(u: Usuario): void {
    this.form = { ...u };
    this.editMode = true;
    this.showModal = true;
  }

  guardar(): void {
    if (this.editMode) {
      this.api.updateUsuario(this.form.id, this.form).subscribe(() => { this.load(); this.showModal = false; });
    } else {
      this.api.createUsuario(this.form).subscribe(() => { this.load(); this.showModal = false; });
    }
  }

  cancelar(): void { this.showModal = false; }

  toggleEstado(u: Usuario): void {
    this.api.updateUsuario(u.id!, { ...u, enabled: !u.enabled }).subscribe(() => this.load());
  }
}
