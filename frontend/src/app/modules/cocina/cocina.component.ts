import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { Pedido } from '../../core/models/models';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cocina',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="card">
      <h3 class="mb-3">Panel de Cocina</h3>
      <div class="grid-2">
        <div class="card" style="border-left: 4px solid #ffc107;">
          <h4 class="mb-3">Pendientes</h4>
          <div *ngFor="let p of pendientes$ | async" style="border:1px solid #ddd;padding:10px;margin-bottom:10px;border-radius:4px;">
            <div style="display:flex;justify-content:space-between;">
              <strong>Pedido #{{ p.id }}</strong>
              <span class="badge badge-warning">{{ p.prioridad }}</span>
            </div>
            <p *ngIf="p.numeroMesa">Mesa: {{ p.numeroMesa }}</p>
            <ul>
              <li *ngFor="let d of p.detalles">{{ d.platilloNombre }} x{{ d.cantidad }}</li>
            </ul>
            <p *ngIf="p.observaciones"><em>{{ p.observaciones }}</em></p>
            <button class="btn btn-primary btn-sm" (click)="iniciarPreparacion(p)">Iniciar Preparacion</button>
          </div>
          <div *ngIf="(pendientes$ | async)?.length === 0" class="text-center" style="color:#999;">Sin pedidos pendientes</div>
        </div>
        <div class="card" style="border-left: 4px solid #0dcaf0;">
          <h4 class="mb-3">En Preparacion</h4>
          <div *ngFor="let p of enPreparacion$ | async" style="border:1px solid #ddd;padding:10px;margin-bottom:10px;border-radius:4px;">
            <div style="display:flex;justify-content:space-between;">
              <strong>Pedido #{{ p.id }}</strong>
              <span class="badge badge-info">Preparando</span>
            </div>
            <p *ngIf="p.numeroMesa">Mesa: {{ p.numeroMesa }}</p>
            <ul>
              <li *ngFor="let d of p.detalles">{{ d.platilloNombre }} x{{ d.cantidad }}</li>
            </ul>
            <p *ngIf="p.observaciones"><em>{{ p.observaciones }}</em></p>
            <button class="btn btn-success btn-sm" (click)="marcarListo(p)">Marcar como Listo</button>
          </div>
          <div *ngIf="(enPreparacion$ | async)?.length === 0" class="text-center" style="color:#999;">Sin pedidos en preparacion</div>
        </div>
      </div>
    </div>
  `
})
export class CocinaComponent {
  pendientes$ = new BehaviorSubject<Pedido[]>([]);
  enPreparacion$ = new BehaviorSubject<Pedido[]>([]);

  constructor(private api: ApiService) { this.load(); }

  load(): void {
    this.api.getPedidosCocina().subscribe(d => {
      this.pendientes$.next(d.filter(p => p.estado === 'PENDIENTE'));
      this.enPreparacion$.next(d.filter(p => p.estado === 'EN_PREPARACION'));
    });
  }

  iniciarPreparacion(p: Pedido): void {
    this.api.changePedidoEstado(p.id!, 'EN_PREPARACION').subscribe(() => this.load());
  }

  marcarListo(p: Pedido): void {
    this.api.changePedidoEstado(p.id!, 'LISTO').subscribe(() => this.load());
  }
}
