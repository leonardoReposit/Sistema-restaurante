import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../core/services/api.service';
import { Dashboard } from '../../core/models/models';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="grid-4 mb-4">
      <div class="card text-center">
        <h3>Ventas Hoy</h3>
        <h2 style="color:#198754;">S/ {{ (data$ | async)?.ventasHoy | number:'1.2-2' }}</h2>
      </div>
      <div class="card text-center">
        <h3>Ventas Semana</h3>
        <h2 style="color:#0d6efd;">S/ {{ (data$ | async)?.ventasSemana | number:'1.2-2' }}</h2>
      </div>
      <div class="card text-center">
        <h3>Ventas Mes</h3>
        <h2 style="color:#6f42c1;">S/ {{ (data$ | async)?.ventasMes | number:'1.2-2' }}</h2>
      </div>
      <div class="card text-center">
        <h3>Pedidos Pendientes</h3>
        <h2 style="color:#dc3545;">{{ (data$ | async)?.pedidosPendientes }}</h2>
      </div>
    </div>
    <div class="grid-3 mb-4">
      <div class="card text-center">
        <h3>Mesas Ocupadas</h3>
        <h2>{{ (data$ | async)?.mesasOcupadas }} / {{ (data$ | async)?.totalMesas }}</h2>
      </div>
    </div>
    <div class="grid-2 mb-4">
      <div class="card">
        <h3 class="mb-3">Productos Mas Vendidos</h3>
        <table class="table">
          <thead>
            <tr><th>Producto</th><th>Cantidad Vendida</th></tr>
          </thead>
          <tbody>
            <tr *ngFor="let p of (data$ | async)?.productosMasVendidos">
              <td>{{ p.nombre }}</td><td>{{ p.total }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card">
        <h3 class="mb-3">Productos Menos Vendidos</h3>
        <table class="table">
          <thead>
            <tr><th>Producto</th><th>Cantidad Vendida</th></tr>
          </thead>
          <tbody>
            <tr *ngFor="let p of (data$ | async)?.productosMenosVendidos">
              <td>{{ p.nombre }}</td><td>{{ p.total }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="card">
      <h3 class="mb-3">Ventas de los Ultimos 7 Dias</h3>
      <table class="table">
        <thead>
          <tr><th>Dia</th><th>Ventas</th></tr>
        </thead>
        <tbody>
          <tr *ngFor="let v of (data$ | async)?.ventasPorDia; let i = index">
            <td>Dia {{ i + 1 }}</td>
            <td>S/ {{ v | number:'1.2-2' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})
export class DashboardComponent {
  data$ = new BehaviorSubject<Dashboard | null>(null);

  constructor(private api: ApiService) {
    this.cargar();
  }

  private cargar(): void {
    this.api.getDashboard().subscribe(d => this.data$.next(d));
  }
}
