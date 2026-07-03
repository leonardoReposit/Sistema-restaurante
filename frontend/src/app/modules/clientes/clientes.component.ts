import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { Cliente } from '../../core/models/models';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="card">
      <div style="display:flex;justify-content:space-between;margin-bottom:15px;">
        <h3>Gestion de Clientes</h3>
        <button class="btn btn-primary" (click)="nuevo()">+ Nuevo Cliente</button>
      </div>
      <div class="form-group" style="max-width:300px;">
        <input class="form-control" placeholder="Buscar cliente..." (input)="buscar($event)">
      </div>
      <table class="table">
        <thead>
          <tr><th>Nombre</th><th>Telefono</th><th>Email</th><th>Direccion</th><th>Acciones</th></tr>
        </thead>
        <tbody>
          <tr *ngFor="let c of clientes$ | async">
            <td>{{ c.nombre }}</td>
            <td>{{ c.telefono }}</td>
            <td>{{ c.email }}</td>
            <td>{{ c.direccion }}</td>
            <td>
              <button class="btn btn-warning btn-sm" (click)="editar(c)">Editar</button>
              <button class="btn btn-danger btn-sm" (click)="eliminar(c.id!)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="modal-overlay" *ngIf="showModal">
      <div class="modal-content">
        <h3>{{ editMode ? 'Editar' : 'Nuevo' }} Cliente</h3>
        <form (ngSubmit)="guardar()">
          <div class="grid-2">
            <div class="form-group">
              <label>Nombre</label>
              <input class="form-control" [(ngModel)]="form.nombre" name="nombre" required>
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
export class ClientesComponent {
  clientes$ = new BehaviorSubject<Cliente[]>([]);
  showModal = false;
  editMode = false;
  form: any = {};

  constructor(private api: ApiService) { this.load(); }

  load(): void { this.api.getClientes().subscribe(d => this.clientes$.next(d)); }

  buscar(e: any): void {
    const val = e.target.value;
    if (val.length > 2) {
      this.api.buscarCliente(val).subscribe(d => this.clientes$.next(d));
    } else { this.load(); }
  }

  nuevo(): void { this.form = {}; this.editMode = false; this.showModal = true; }
  editar(c: Cliente): void { this.form = { ...c }; this.editMode = true; this.showModal = true; }

  guardar(): void {
    if (this.editMode) {
      this.api.updateCliente(this.form.id, this.form).subscribe(() => { this.load(); this.showModal = false; });
    } else {
      this.api.createCliente(this.form).subscribe(() => { this.load(); this.showModal = false; });
    }
  }

  cancelar(): void { this.showModal = false; }

  eliminar(id: number): void {
    if (confirm('Eliminar cliente?')) this.api.deleteCliente(id).subscribe(() => this.load());
  }
}
