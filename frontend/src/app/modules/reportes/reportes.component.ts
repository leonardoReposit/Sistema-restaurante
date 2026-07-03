import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { environment } from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="card">
      <h3 class="mb-3">Reportes</h3>
      <div class="grid-2">
        <div class="card">
          <h4>Reporte de Ventas</h4>
          <div class="grid-2">
            <div class="form-group">
              <label>Fecha Inicio</label>
              <input class="form-control" type="date" [(ngModel)]="fechaInicio" name="fechaInicio">
            </div>
            <div class="form-group">
              <label>Fecha Fin</label>
              <input class="form-control" type="date" [(ngModel)]="fechaFin" name="fechaFin">
            </div>
          </div>
          <div class="mt-2">
            <button class="btn btn-primary btn-sm" (click)="exportarPDF()">Exportar PDF</button>
            <button class="btn btn-success btn-sm" (click)="exportarExcel()">Exportar Excel</button>
          </div>
        </div>
        <div class="card">
          <h4>Resumen</h4>
          <table class="table">
            <tr><th>Total Ventas (Mes)</th><td>S/ {{ (resumen$ | async)?.ventasMes | number:'1.2-2' }}</td></tr>
            <tr><th>Total Ventas (Semana)</th><td>S/ {{ (resumen$ | async)?.ventasSemana | number:'1.2-2' }}</td></tr>
            <tr><th>Total Ventas (Hoy)</th><td>S/ {{ (resumen$ | async)?.ventasHoy | number:'1.2-2' }}</td></tr>
            <tr><th>Pedidos Pendientes</th><td>{{ (resumen$ | async)?.pedidosPendientes }}</td></tr>
          </table>
        </div>
      </div>
    </div>
    <div class="card">
      <h3 class="mb-3">Productos Mas Vendidos</h3>
      <table class="table">
        <thead>
          <tr><th>Producto</th><th>Cantidad</th></tr>
        </thead>
        <tbody>
          <tr *ngFor="let p of (resumen$ | async)?.productosMasVendidos">
            <td>{{ p.nombre }}</td><td>{{ p.total }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})
export class ReportesComponent {
  fechaInicio = '';
  fechaFin = '';
  resumen$ = new BehaviorSubject<any>(null);

  constructor(private api: ApiService) {
    const hoy = new Date();
    this.fechaInicio = new Date(hoy.getFullYear(), hoy.getMonth(), 1).toISOString().split('T')[0];
    this.fechaFin = hoy.toISOString().split('T')[0];
    this.api.getDashboard().subscribe(d => this.resumen$.next(d));
  }

  exportarPDF(): void {
    const params = `?inicio=${this.fechaInicio}&fin=${this.fechaFin}`;
    window.open(`${environment.apiUrl}/exportar/pdf/ventas${params}`, '_blank');
  }

  exportarExcel(): void {
    const params = `?inicio=${this.fechaInicio}&fin=${this.fechaFin}`;
    window.open(`${environment.apiUrl}/exportar/excel/ventas${params}`, '_blank');
  }
}
