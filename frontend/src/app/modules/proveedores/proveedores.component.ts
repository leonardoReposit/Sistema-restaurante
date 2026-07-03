import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { Proveedor } from '../../core/models/models';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="card">
      <div style="display:flex;justify-content:space-between;margin-bottom:15px;">
        <h3>Gestion de Proveedores</h3>
        <button class="btn btn-primary" (click)="nuevo()">+ Nuevo Proveedor</button>
      </div>
      <table class="table">
        <thead>
          <tr><th>Nombre</th><th>Contacto</th><th>Telefono</th><th>Email</th><th>Direccion</th><th>Acciones</th></tr>
        </thead>
        <tbody>
          <tr *ngFor="let p of proveedores$ | async">
            <td>{{ p.nombre }}</td>
            <td>{{ p.contacto }}</td>
            <td>{{ p.telefono }}</td>
            <td>{{ p.email }}</td>
            <td>{{ p.direccion }}</td>
            <td>
              <button class="btn btn-warning btn-sm" (click)="editar(p)">Editar</button>
              <button class="btn btn-danger btn-sm" (click)="eliminar(p.id!)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="modal-overlay" *ngIf="showModal">
      <div class="modal-content">
        <h3>{{ editMode ? 'Editar' : 'Nuevo' }} Proveedor</h3>
        <form (ngSubmit)="guardar()">
          <div class="grid-2">
            <div class="form-group">
              <label>Nombre</label>
              <input class="form-control" [(ngModel)]="form.nombre" name="nombre" required>
            </div>
            <div class="form-group">
              <label>Contacto</label>
              <input class="form-control" [(ngModel)]="form.contacto" name="contacto">
            </div>
            <div class="form-group">
              <label>Telefono</label>
              <input class="form-control" [(ngModel)]="form.telefono" name="telefono">
            </div>
            <div class="form-group">
              <label>Email</label>
              <input class="form-control" type="email" [(ngModel)]="form.email" name="email">
            </div>
            <div class="form-group">
              <label>Direccion</label>
              <input class="form-control" [(ngModel)]="form.direccion" name="direccion">
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
export class ProveedoresComponent {
  proveedores$ = new BehaviorSubject<Proveedor[]>([]);
  showModal = false;
  editMode = false;
  form: any = {};

  constructor(private api: ApiService) { this.load(); }

  load(): void { this.api.getProveedores().subscribe(d => this.proveedores$.next(d)); }

  nuevo(): void { this.form = {}; this.editMode = false; this.showModal = true; }
  editar(p: Proveedor): void { this.form = { ...p }; this.editMode = true; this.showModal = true; }

  guardar(): void {
    if (this.editMode) {
      this.api.updateProveedor(this.form.id, this.form).subscribe(() => { this.load(); this.showModal = false; });
    } else {
      this.api.createProveedor(this.form).subscribe(() => { this.load(); this.showModal = false; });
    }
  }

  cancelar(): void { this.showModal = false; }

  eliminar(id: number): void {
    if (confirm('Eliminar proveedor?')) this.api.deleteProveedor(id).subscribe(() => this.load());
  }
}
