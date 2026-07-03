import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { Ingrediente } from '../../core/models/models';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="card">
      <div style="display:flex;justify-content:space-between;margin-bottom:15px;">
        <h3>Inventario de Ingredientes</h3>
        <button class="btn btn-primary" (click)="nuevo()">+ Nuevo Ingrediente</button>
      </div>
      <table class="table">
        <thead>
          <tr><th>Nombre</th><th>Stock</th><th>Stock Minimo</th><th>Unidad</th><th>Estado</th><th>Acciones</th></tr>
        </thead>
        <tbody>
          <tr *ngFor="let i of ingredientes$ | async">
            <td>{{ i.nombre }}</td>
            <td>{{ i.stock }}</td>
            <td>{{ i.stockMinimo }}</td>
            <td>{{ i.unidad }}</td>
            <td>
              <span class="badge" [class.badge-success]="i.stock! > i.stockMinimo!" [class.badge-danger]="i.stock! <= i.stockMinimo!">
                {{ i.stock! > i.stockMinimo! ? 'OK' : 'Stock Bajo' }}
              </span>
            </td>
            <td>
              <button class="btn btn-info btn-sm" (click)="movimiento(i)">Movimiento</button>
              <button class="btn btn-warning btn-sm" (click)="editar(i)">Editar</button>
              <button class="btn btn-danger btn-sm" (click)="eliminar(i.id!)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="modal-overlay" *ngIf="showFormModal">
      <div class="modal-content">
        <h3>{{ editMode ? 'Editar' : 'Nuevo' }} Ingrediente</h3>
        <form (ngSubmit)="guardar()">
          <div class="grid-2">
            <div class="form-group">
              <label>Nombre</label>
              <input class="form-control" [(ngModel)]="form.nombre" name="nombre" required>
            </div>
            <div class="form-group">
              <label>Stock</label>
              <input class="form-control" type="number" step="0.1" [(ngModel)]="form.stock" name="stock">
            </div>
            <div class="form-group">
              <label>Stock Minimo</label>
              <input class="form-control" type="number" step="0.1" [(ngModel)]="form.stockMinimo" name="stockMinimo">
            </div>
            <div class="form-group">
              <label>Unidad</label>
              <select class="form-control" [(ngModel)]="form.unidad" name="unidad">
                <option value="UNIDAD">Unidad</option>
                <option value="KG">Kilogramo</option>
                <option value="L">Litro</option>
                <option value="G">Gramo</option>
                <option value="ML">Mililitro</option>
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

    <div class="modal-overlay" *ngIf="showMovModal">
      <div class="modal-content">
        <h3>Registrar Movimiento - {{ selectedIngrediente?.nombre }}</h3>
        <form (ngSubmit)="guardarMovimiento()">
          <div class="grid-2">
            <div class="form-group">
              <label>Tipo</label>
              <select class="form-control" [(ngModel)]="movForm.tipo" name="tipo">
                <option value="ENTRADA">Entrada</option>
                <option value="SALIDA">Salida</option>
              </select>
            </div>
            <div class="form-group">
              <label>Cantidad</label>
              <input class="form-control" type="number" step="0.1" [(ngModel)]="movForm.cantidad" name="cantidad" required>
            </div>
          </div>
          <div class="form-group">
            <label>Observaciones</label>
            <textarea class="form-control" [(ngModel)]="movForm.observaciones" name="observaciones"></textarea>
          </div>
          <div class="mt-3">
            <button type="submit" class="btn btn-success">Registrar</button>
            <button type="button" class="btn btn-secondary" (click)="showMovModal = false">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  `
})
export class InventarioComponent {
  ingredientes$ = new BehaviorSubject<Ingrediente[]>([]);
  showFormModal = false;
  editMode = false;
  showMovModal = false;
  form: any = {};
  movForm: any = {};
  selectedIngrediente?: Ingrediente;

  constructor(private api: ApiService) { this.load(); }

  load(): void { this.api.getIngredientes().subscribe(d => this.ingredientes$.next(d)); }

  nuevo(): void { this.form = { stock: 0, stockMinimo: 0, unidad: 'UNIDAD' }; this.editMode = false; this.showFormModal = true; }
  editar(i: Ingrediente): void { this.form = { ...i }; this.editMode = true; this.showFormModal = true; }

  guardar(): void {
    if (this.editMode) {
      this.api.updateIngrediente(this.form.id, this.form).subscribe(() => { this.load(); this.showFormModal = false; });
    } else {
      this.api.createIngrediente(this.form).subscribe(() => { this.load(); this.showFormModal = false; });
    }
  }

  movimiento(i: Ingrediente): void {
    this.selectedIngrediente = i;
    this.movForm = { ingredienteId: i.id, tipo: 'ENTRADA', cantidad: 0 };
    this.showMovModal = true;
  }

  guardarMovimiento(): void {
    this.api.registrarMovimiento(this.movForm).subscribe(() => { this.load(); this.showMovModal = false; });
  }

  cancelar(): void { this.showFormModal = false; }

  eliminar(id: number): void {
    if (confirm('Eliminar ingrediente?')) this.api.deleteIngrediente(id).subscribe(() => this.load());
  }
}
