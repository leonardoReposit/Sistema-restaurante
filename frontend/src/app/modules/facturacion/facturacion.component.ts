import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { Factura, Pedido } from '../../core/models/models';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-facturacion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="card">
      <h3 class="mb-3">Facturacion</h3>
      <div class="grid-2">
        <div>
          <h4>Generar Factura</h4>
          <div class="form-group">
            <label>Pedido (ID)</label>
            <select class="form-control" [(ngModel)]="form.pedidoId" name="pedidoId">
              <option value="">Seleccione pedido</option>
              <option *ngFor="let p of pedidosPendientes$ | async" [value]="p.id">#{{ p.id }} - Mesa {{ p.numeroMesa }} - S/ {{ p.total }}</option>
            </select>
          </div>
          <div class="form-group">
            <label>Tipo</label>
            <select class="form-control" [(ngModel)]="form.tipo" name="tipo">
              <option value="BOLETA">Boleta</option>
              <option value="FACTURA">Factura</option>
            </select>
          </div>
          <div class="form-group">
            <label>Metodo de Pago</label>
            <select class="form-control" [(ngModel)]="form.metodoPago" name="metodoPago">
              <option value="EFECTIVO">Efectivo</option>
              <option value="TARJETA">Tarjeta</option>
              <option value="YAPE">Yape</option>
              <option value="PLIN">Plin</option>
            </select>
          </div>
          <div class="form-group">
            <label>Descuento (S/)</label>
            <input class="form-control" type="number" [(ngModel)]="form.descuento" name="descuento">
          </div>
          <button class="btn btn-success" (click)="generar()">Generar Factura</button>
        </div>
        <div>
          <h4>Facturas Emitidas</h4>
          <table class="table">
            <thead>
              <tr><th>Serie</th><th>Total</th><th>Metodo</th><th>Fecha</th></tr>
            </thead>
            <tbody>
              <tr *ngFor="let f of facturas$ | async">
                <td>{{ f.serie }}</td>
                <td>S/ {{ f.total }}</td>
                <td>{{ f.metodoPago }}</td>
                <td>{{ f.fecha | date:'short' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `
})
export class FacturacionComponent {
  facturas$ = new BehaviorSubject<Factura[]>([]);
  pedidosPendientes$ = new BehaviorSubject<Pedido[]>([]);
  form: any = { tipo: 'BOLETA', metodoPago: 'EFECTIVO', descuento: 0 };

  constructor(private api: ApiService) {
    this.api.getFacturas().subscribe(d => this.facturas$.next(d));
    this.api.getPedidosPorEstado('LISTO').subscribe(d => this.pedidosPendientes$.next(d));
  }

  generar(): void {
    this.api.generarFactura(this.form).subscribe(() => {
      this.api.getFacturas().subscribe(d => this.facturas$.next(d));
      this.api.getPedidosPorEstado('LISTO').subscribe(d => this.pedidosPendientes$.next(d));
      this.form = { tipo: 'BOLETA', metodoPago: 'EFECTIVO', descuento: 0 };
    });
  }
}
