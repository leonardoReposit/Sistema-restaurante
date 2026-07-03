import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { Mesa } from '../../core/models/models';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-mesas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="card">
      <div style="display:flex;justify-content:space-between;margin-bottom:15px;">
        <h3>Gestion de Mesas</h3>
        <button class="btn btn-primary" (click)="nuevo()">+ Nueva Mesa</button>
      </div>
      <table class="table">
        <thead>
          <tr><th>Nro Mesa</th><th>Capacidad</th><th>Estado</th><th>Acciones</th></tr>
        </thead>
        <tbody>
          <tr *ngFor="let m of mesas$ | async">
            <td>{{ m.numeroMesa }}</td>
            <td>{{ m.capacidad }} personas</td>
            <td>
              <span class="badge" [class.badge-success]="m.estado==='LIBRE'" [class.badge-danger]="m.estado==='OCUPADA'"
                    [class.badge-warning]="m.estado==='RESERVADA'">
                {{ m.estado }}
              </span>
            </td>
            <td>
              <button class="btn btn-warning btn-sm" (click)="editar(m)">Editar</button>
              <button class="btn btn-info btn-sm" (click)="cambiarEstado(m)">Cambiar Estado</button>
              <button class="btn btn-danger btn-sm" (click)="eliminar(m.id!)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="modal-overlay" *ngIf="showModal">
      <div class="modal-content">
        <h3>{{ editMode ? 'Editar' : 'Nueva' }} Mesa</h3>
        <form (ngSubmit)="guardar()">
          <div class="grid-2">
            <div class="form-group">
              <label>Numero de Mesa</label>
              <input class="form-control" type="number" [(ngModel)]="form.numeroMesa" name="numeroMesa" required>
            </div>
            <div class="form-group">
              <label>Capacidad</label>
              <input class="form-control" type="number" [(ngModel)]="form.capacidad" name="capacidad" required>
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
export class MesasComponent {
  mesas$ = new BehaviorSubject<Mesa[]>([]);
  showModal = false;
  editMode = false;
  form: any = {};
  estados = ['LIBRE', 'OCUPADA', 'RESERVADA'];

  constructor(private api: ApiService) { this.load(); }

  load(): void { this.api.getMesas().subscribe(d => this.mesas$.next(d)); }

  nuevo(): void { this.form = {}; this.editMode = false; this.showModal = true; }

  editar(m: Mesa): void { this.form = { ...m }; this.editMode = true; this.showModal = true; }

  guardar(): void {
    if (this.editMode) {
      this.api.updateMesa(this.form.id, this.form).subscribe(() => { this.load(); this.showModal = false; });
    } else {
      this.api.createMesa(this.form).subscribe(() => { this.load(); this.showModal = false; });
    }
  }

  cambiarEstado(m: Mesa): void {
    const idx = this.estados.indexOf(m.estado || 'LIBRE');
    const next = this.estados[(idx + 1) % this.estados.length];
    this.api.changeMesaEstado(m.id!, next).subscribe(() => this.load());
  }

  cancelar(): void { this.showModal = false; }

  eliminar(id: number): void {
    if (confirm('Eliminar mesa?')) this.api.deleteMesa(id).subscribe(() => this.load());
  }
}
