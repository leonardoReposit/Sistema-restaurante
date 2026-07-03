import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-MHBWVEJO.js";
import {
  ApiService
} from "./chunk-SGUWGNAX.js";
import {
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  Component,
  DecimalPipe,
  NgForOf,
  environment,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RANSCB4O.js";

// src/app/modules/reportes/reportes.component.ts
function ReportesComponent_tr_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r1.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r1.total);
  }
}
var ReportesComponent = class _ReportesComponent {
  constructor(api) {
    this.api = api;
    this.fechaInicio = "";
    this.fechaFin = "";
    this.resumen$ = new BehaviorSubject(null);
    const hoy = /* @__PURE__ */ new Date();
    this.fechaInicio = new Date(hoy.getFullYear(), hoy.getMonth(), 1).toISOString().split("T")[0];
    this.fechaFin = hoy.toISOString().split("T")[0];
    this.api.getDashboard().subscribe((d) => this.resumen$.next(d));
  }
  exportarPDF() {
    const params = `?inicio=${this.fechaInicio}&fin=${this.fechaFin}`;
    window.open(`${environment.apiUrl}/exportar/pdf/ventas${params}`, "_blank");
  }
  exportarExcel() {
    const params = `?inicio=${this.fechaInicio}&fin=${this.fechaFin}`;
    window.open(`${environment.apiUrl}/exportar/excel/ventas${params}`, "_blank");
  }
  static {
    this.\u0275fac = function ReportesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportesComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportesComponent, selectors: [["app-reportes"]], decls: 65, vars: 26, consts: [[1, "card"], [1, "mb-3"], [1, "grid-2"], [1, "form-group"], ["type", "date", "name", "fechaInicio", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "fechaFin", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "mt-2"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "btn", "btn-success", "btn-sm", 3, "click"], [1, "table"], [4, "ngFor", "ngForOf"]], template: function ReportesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2, "Reportes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 0)(5, "h4");
        \u0275\u0275text(6, "Reporte de Ventas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 2)(8, "div", 3)(9, "label");
        \u0275\u0275text(10, "Fecha Inicio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "input", 4);
        \u0275\u0275twoWayListener("ngModelChange", function ReportesComponent_Template_input_ngModelChange_11_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.fechaInicio, $event) || (ctx.fechaInicio = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 3)(13, "label");
        \u0275\u0275text(14, "Fecha Fin");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "input", 5);
        \u0275\u0275twoWayListener("ngModelChange", function ReportesComponent_Template_input_ngModelChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.fechaFin, $event) || (ctx.fechaFin = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 6)(17, "button", 7);
        \u0275\u0275listener("click", function ReportesComponent_Template_button_click_17_listener() {
          return ctx.exportarPDF();
        });
        \u0275\u0275text(18, "Exportar PDF");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "button", 8);
        \u0275\u0275listener("click", function ReportesComponent_Template_button_click_19_listener() {
          return ctx.exportarExcel();
        });
        \u0275\u0275text(20, "Exportar Excel");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "div", 0)(22, "h4");
        \u0275\u0275text(23, "Resumen");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "table", 9)(25, "tr")(26, "th");
        \u0275\u0275text(27, "Total Ventas (Mes)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "td");
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "async");
        \u0275\u0275pipe(31, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "tr")(33, "th");
        \u0275\u0275text(34, "Total Ventas (Semana)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "td");
        \u0275\u0275text(36);
        \u0275\u0275pipe(37, "async");
        \u0275\u0275pipe(38, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "tr")(40, "th");
        \u0275\u0275text(41, "Total Ventas (Hoy)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "td");
        \u0275\u0275text(43);
        \u0275\u0275pipe(44, "async");
        \u0275\u0275pipe(45, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "tr")(47, "th");
        \u0275\u0275text(48, "Pedidos Pendientes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "td");
        \u0275\u0275text(50);
        \u0275\u0275pipe(51, "async");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(52, "div", 0)(53, "h3", 1);
        \u0275\u0275text(54, "Productos Mas Vendidos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "table", 9)(56, "thead")(57, "tr")(58, "th");
        \u0275\u0275text(59, "Producto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "th");
        \u0275\u0275text(61, "Cantidad");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(62, "tbody");
        \u0275\u0275template(63, ReportesComponent_tr_63_Template, 5, 2, "tr", 10);
        \u0275\u0275pipe(64, "async");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275twoWayProperty("ngModel", ctx.fechaInicio);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.fechaFin);
        \u0275\u0275control();
        \u0275\u0275advance(14);
        \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(31, 9, \u0275\u0275pipeBind1(30, 7, ctx.resumen$)?.ventasMes, "1.2-2"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(38, 14, \u0275\u0275pipeBind1(37, 12, ctx.resumen$)?.ventasSemana, "1.2-2"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(45, 19, \u0275\u0275pipeBind1(44, 17, ctx.resumen$)?.ventasHoy, "1.2-2"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 22, ctx.resumen$)?.pedidosPendientes);
        \u0275\u0275advance(13);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(64, 24, ctx.resumen$)?.productosMasVendidos);
      }
    }, dependencies: [CommonModule, NgForOf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, AsyncPipe, DecimalPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportesComponent, [{
    type: Component,
    args: [{
      selector: "app-reportes",
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
    }]
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportesComponent, { className: "ReportesComponent", filePath: "src/app/modules/reportes/reportes.component.ts", lineNumber: 59 });
})();
export {
  ReportesComponent
};
//# sourceMappingURL=chunk-TUDHABKD.js.map
