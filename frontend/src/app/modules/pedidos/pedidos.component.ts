import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';
import { Pedido, Platillo, Mesa, Cliente } from '../../core/models/models';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="card">
      <div style="display:flex;justify-content:space-between;margin-bottom:15px;">
        <h3>Gestion de Pedidos</h3>
        <button class="btn btn-primary" (click)="nuevo()">+ Nuevo Pedido</button>
      </div>
      <div class="mb-3">
        <button class="btn btn-sm" [class.btn-primary]="filtro===''" (click)="filtrar('')">Todos</button>
        <button class="btn btn-sm" [class.btn-primary]="filtro==='PENDIENTE'" (click)="filtrar('PENDIENTE')">Pendientes</button>
        <button class="btn btn-sm" [class.btn-primary]="filtro==='EN_PREPARACION'" (click)="filtrar('EN_PREPARACION')">En Preparacion</button>
        <button class="btn btn-sm" [class.btn-primary]="filtro==='LISTO'" (click)="filtrar('LISTO')">Listos</button>
        <button class="btn btn-sm" [class.btn-primary]="filtro==='ENTREGADO'" (click)="filtrar('ENTREGADO')">Entregados</button>
      </div>
      <table class="table">
        <thead>
          <tr><th>ID</th><th>Mesa</th><th>Cliente</th><th>Total</th><th>Estado</th><th>Fecha</th><th>Acciones</th></tr>
        </thead>
        <tbody>
          <tr *ngFor="let p of pedidos$ | async">
            <td>{{ p.id }}</td>
            <td>{{ p.numeroMesa || '-' }}</td>
            <td>{{ p.clienteNombre || '-' }}</td>
            <td>S/ {{ p.total }}</td>
            <td><span class="badge" [class.badge-warning]="p.estado==='PENDIENTE'" [class.badge-info]="p.estado==='EN_PREPARACION'"
                      [class.badge-success]="p.estado==='LISTO'" [class.badge-secondary]="p.estado==='ENTREGADO'"
                      [class.badge-danger]="p.estado==='CANCELADO'">{{ p.estado }}</span></td>
            <td>{{ p.fecha | date:'short' }}</td>
            <td>
              <button class="btn btn-info btn-sm" (click)="verDetalle(p)">Detalle</button>
              <button class="btn btn-warning btn-sm" *ngIf="p.estado==='PENDIENTE'" (click)="cambiarEstado(p, 'EN_PREPARACION')">A Cocina</button>
              <button class="btn btn-danger btn-sm" *ngIf="p.estado!=='ENTREGADO' && p.estado!=='CANCELADO'" (click)="cambiarEstado(p, 'CANCELADO')">Cancelar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="modal-overlay" *ngIf="showDetalleModal">
      <div class="modal-content">
        <h3>Detalle del Pedido #{{ detalleSeleccionado?.id }}</h3>
        <p><strong>Mesa:</strong> {{ detalleSeleccionado?.numeroMesa || '-' }}</p>
        <p><strong>Cliente:</strong> {{ detalleSeleccionado?.clienteNombre || '-' }}</p>
        <p><strong>Estado:</strong> {{ detalleSeleccionado?.estado }}</p>
        <p><strong>Total:</strong> S/ {{ detalleSeleccionado?.total }}</p>
        <p><strong>Observaciones:</strong> {{ detalleSeleccionado?.observaciones || '-' }}</p>
        <h4 class="mt-3">Platillos</h4>
        <table class="table">
          <thead><tr><th>Platillo</th><th>Cantidad</th><th>Precio Unit.</th><th>Subtotal</th><th>Obs.</th></tr></thead>
          <tbody>
            <tr *ngFor="let d of detalleSeleccionado?.detalles">
              <td>{{ d.platilloNombre }}</td>
              <td>{{ d.cantidad }}</td>
              <td>S/ {{ d.precioUnitario }}</td>
              <td>S/ {{ (d.cantidad || 0) * (d.precioUnitario || 0) }}</td>
              <td>{{ d.observaciones || '-' }}</td>
            </tr>
          </tbody>
        </table>
        <button class="btn btn-secondary" (click)="showDetalleModal = false">Cerrar</button>
      </div>
    </div>

    <div class="modal-overlay" *ngIf="showForm">
      <div class="modal-content">
        <h3>Nuevo Pedido</h3>
        <form (ngSubmit)="guardar()">
          <div class="grid-2">
            <div class="form-group">
              <label>Mesa</label>
              <select class="form-control" [(ngModel)]="form.mesaId" name="mesaId">
                <option value="">Sin mesa</option>
                <option *ngFor="let m of mesasDisponibles$ | async" [value]="m.id">Mesa {{ m.numeroMesa }} ({{ m.capacidad }} pers)</option>
              </select>
            </div>
            <div class="form-group">
              <label>Cliente</label>
              <select class="form-control" [(ngModel)]="form.clienteId" name="clienteId">
                <option value="">Sin cliente</option>
                <option *ngFor="let c of clientes$ | async" [value]="c.id">{{ c.nombre }}</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label>Observaciones</label>
            <textarea class="form-control" [(ngModel)]="form.observaciones" name="observaciones"></textarea>
          </div>
          <h4 class="mt-3">Detalle del Pedido</h4>
          <table class="table">
            <thead>
              <tr><th>Platillo</th><th>Cantidad</th><th>Precio</th><th>Obs.</th><th></th></tr>
            </thead>
            <tbody>
              <tr *ngFor="let d of form.detalles; let i = index">
                <td>
                  <select class="form-control" [(ngModel)]="d.platilloId" [name]="'platillo'+i" (change)="actualizarPrecio(d)">
                    <option *ngFor="let pl of platillosDisp$ | async" [value]="pl.id">{{ pl.nombre }} - S/ {{ pl.precio }}</option>
                  </select>
                </td>
                <td><input class="form-control" type="number" min="1" [(ngModel)]="d.cantidad" [name]="'cant'+i"></td>
                <td>S/ {{ d.precioUnitario || 0 }}</td>
                <td><input class="form-control" [(ngModel)]="d.observaciones" [name]="'obs'+i"></td>
                <td><button class="btn btn-danger btn-sm" (click)="eliminarDetalle(i)">X</button></td>
              </tr>
            </tbody>
          </table>
          <button type="button" class="btn btn-info btn-sm" (click)="agregarDetalle()">+ Agregar</button>
          <div class="mt-3">
            <button type="submit" class="btn btn-success">Crear Pedido</button>
            <button type="button" class="btn btn-secondary" (click)="cancelar()">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  `
})
export class PedidosComponent {
  pedidos$ = new BehaviorSubject<Pedido[]>([]);
  platillosDisp$ = new BehaviorSubject<Platillo[]>([]);
  mesasDisponibles$ = new BehaviorSubject<Mesa[]>([]);
  clientes$ = new BehaviorSubject<Cliente[]>([]);
  showForm = false;
  showDetalleModal = false;
  detalleSeleccionado: Pedido | null = null;
  filtro = '';
  form: any = { detalles: [], usuarioId: this.auth.getUser()?.id };

  constructor(private api: ApiService, private auth: AuthService) {
    this.load();
    this.api.getPlatillosDisponibles().subscribe(d => this.platillosDisp$.next(d));
    this.api.getMesas().subscribe(d => this.mesasDisponibles$.next(d.filter(m => m.estado === 'LIBRE')));
    this.api.getClientes().subscribe(d => this.clientes$.next(d));
  }

  load(): void {
    if (this.filtro) {
      this.api.getPedidosPorEstado(this.filtro).subscribe(d => this.pedidos$.next(d));
    } else {
      this.api.getPedidos().subscribe(d => this.pedidos$.next(d));
    }
  }

  filtrar(estado: string): void { this.filtro = estado; this.load(); }

  nuevo(): void {
    this.form = { detalles: [], usuarioId: this.auth.getUser()?.id };
    this.showForm = true;
  }

  agregarDetalle(): void {
    this.form.detalles.push({ platilloId: null, cantidad: 1, precioUnitario: 0 });
  }

  eliminarDetalle(i: number): void {
    this.form.detalles.splice(i, 1);
  }

  actualizarPrecio(d: any): void {
    const existente = this.form.detalles.find((det: any) => det !== d && +det.platilloId === +d.platilloId);
    if (existente) {
      existente.cantidad = (existente.cantidad || 0) + 1;
      const idx = this.form.detalles.indexOf(d);
      this.form.detalles.splice(idx, 1);
      return;
    }
    const platillo = this.platillosDisp$.value.find(p => p.id === +d.platilloId);
    d.precioUnitario = platillo ? platillo.precio : 0;
  }

  guardar(): void {
    this.api.createPedido(this.form).subscribe(() => {
      this.load();
      this.showForm = false;
    });
  }

  cancelar(): void { this.showForm = false; }

  cambiarEstado(p: Pedido, estado: string): void {
    this.api.changePedidoEstado(p.id!, estado).subscribe(() => this.load());
  }

  verDetalle(p: Pedido): void {
    this.detalleSeleccionado = p;
    this.showDetalleModal = true;
  }
}
