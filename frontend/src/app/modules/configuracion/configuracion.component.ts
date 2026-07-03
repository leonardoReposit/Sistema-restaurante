import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="card">
      <h3 class="mb-3">Configuracion del Restaurante</h3>
      <form (ngSubmit)="guardar()">
        <div class="grid-2">
          <div class="form-group">
            <label>Nombre del Restaurante</label>
            <input class="form-control" [(ngModel)]="config.nombreRestaurante" name="nombreRestaurante">
          </div>
          <div class="form-group">
            <label>Moneda</label>
            <select class="form-control" [(ngModel)]="config.moneda" name="moneda">
              <option value="PEN">Soles (PEN)</option>
              <option value="USD">Dolares (USD)</option>
            </select>
          </div>
          <div class="form-group">
            <label>IGV (%)</label>
            <input class="form-control" type="number" step="0.01" [(ngModel)]="config.igv" name="igv" [disabled]="true">
          </div>
          <div class="form-group">
            <label>URL del Logo</label>
            <input class="form-control" [(ngModel)]="config.logoUrl" name="logoUrl">
          </div>
        </div>
        <div class="mt-3">
          <button type="submit" class="btn btn-success">Guardar Configuracion</button>
        </div>
      </form>
    </div>
    <div class="card">
      <h3 class="mb-3">Informacion del Sistema</h3>
      <table class="table">
        <tr><th>Version</th><td>1.0.0</td></tr>
        <tr><th>Backend</th><td>Java 21 + Spring Boot 3.4</td></tr>
        <tr><th>Frontend</th><td>Angular 22</td></tr>
        <tr><th>Base de Datos</th><td>MySQL 9.7</td></tr>
      </table>
    </div>
  `
})
export class ConfiguracionComponent {
  config$ = new BehaviorSubject<any>({});
  config: any = {};

  constructor(private api: ApiService) {
    this.api.getConfiguracion().subscribe(d => {
      this.config = d;
      this.config$.next(d);
    });
  }

  guardar(): void {
    this.api.updateConfiguracion(this.config).subscribe(() => {
      alert('Configuracion guardada exitosamente');
    });
  }
}
