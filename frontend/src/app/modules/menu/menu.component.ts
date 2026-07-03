import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { Platillo, Categoria } from '../../core/models/models';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="card">
      <div style="display:flex;justify-content:space-between;margin-bottom:15px;">
        <h3>Gestion del Menu</h3>
        <button class="btn btn-primary" (click)="nuevo()">+ Nuevo Platillo</button>
      </div>
      <div class="form-group" style="max-width:300px;">
        <input class="form-control" placeholder="Buscar platillo..." (input)="buscar($event)">
      </div>
      <table class="table">
        <thead>
          <tr><th>Nombre</th><th>Categoria</th><th>Precio</th><th>Estado</th><th>Acciones</th></tr>
        </thead>
        <tbody>
          <tr *ngFor="let p of platillos$ | async">
            <td>{{ p.nombre }}</td>
            <td>{{ p.categoriaNombre }}</td>
            <td>S/ {{ p.precio }}</td>
            <td><span [class.badge-success]="p.disponible" [class.badge-danger]="!p.disponible">{{ p.disponible ? 'Disponible' : 'No disponible' }}</span></td>
            <td>
              <button class="btn btn-warning btn-sm" (click)="editar(p)">Editar</button>
              <button class="btn btn-info btn-sm" (click)="toggleDisponible(p)">{{ p.disponible ? 'Deshab.' : 'Habilitar' }}</button>
              <button class="btn btn-danger btn-sm" (click)="eliminar(p.id!)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="modal-overlay" *ngIf="showModal">
      <div class="modal-content">
        <h3>{{ editMode ? 'Editar' : 'Nuevo' }} Platillo</h3>
        <form (ngSubmit)="guardar()">
          <div class="grid-2">
            <div class="form-group">
              <label>Nombre</label>
              <input class="form-control" [(ngModel)]="form.nombre" name="nombre" required>
            </div>
            <div class="form-group">
              <label>Precio</label>
              <input class="form-control" type="number" step="0.01" [(ngModel)]="form.precio" name="precio" required>
            </div>
            <div class="form-group">
              <label>Categoria</label>
              <select class="form-control" [(ngModel)]="form.categoriaId" name="categoriaId">
                <option *ngFor="let c of categorias$ | async" [value]="c.id">{{ c.nombre }}</option>
              </select>
            </div>
            <div class="form-group">
              <label>URL Imagen</label>
              <input class="form-control" [(ngModel)]="form.imagenUrl" name="imagenUrl">
            </div>
          </div>
          <div class="form-group">
            <label>Descripcion</label>
            <textarea class="form-control" [(ngModel)]="form.descripcion" name="descripcion"></textarea>
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
export class MenuComponent {
  platillos$ = new BehaviorSubject<Platillo[]>([]);
  categorias$ = new BehaviorSubject<Categoria[]>([]);
  showModal = false;
  editMode = false;
  form: any = { disponible: true };

  constructor(private api: ApiService) {
    this.load();
    this.api.getCategorias().subscribe(d => this.categorias$.next(d));
  }

  load(): void {
    this.api.getPlatillos().subscribe(d => this.platillos$.next(d));
  }

  buscar(e: any): void {
    const val = e.target.value;
    if (val.length > 2) {
      this.api.buscarPlatillo(val).subscribe(d => this.platillos$.next(d));
    } else {
      this.load();
    }
  }

  nuevo(): void {
    this.form = { disponible: true };
    this.editMode = false;
    this.showModal = true;
  }

  editar(p: Platillo): void {
    this.form = { ...p };
    this.editMode = true;
    this.showModal = true;
  }

  guardar(): void {
    if (this.editMode) {
      this.api.updatePlatillo(this.form.id, this.form).subscribe(() => { this.load(); this.showModal = false; });
    } else {
      this.api.createPlatillo(this.form).subscribe(() => { this.load(); this.showModal = false; });
    }
  }

  toggleDisponible(p: Platillo): void {
    this.api.toggleDisponible(p.id!).subscribe(() => this.load());
  }

  cancelar(): void { this.showModal = false; }

  eliminar(id: number): void {
    if (confirm('Eliminar platillo?')) {
      this.api.deletePlatillo(id).subscribe(() => this.load());
    }
  }
}
