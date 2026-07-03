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
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-RANSCB4O.js";

// src/app/modules/dashboard/dashboard.component.ts
function DashboardComponent_tr_48_Template(rf, ctx) {
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
function DashboardComponent_tr_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.total);
  }
}
function DashboardComponent_tr_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const v_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Dia ", i_r4 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(5, 2, v_r3, "1.2-2"));
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor(api) {
    this.api = api;
    this.data$ = new BehaviorSubject(null);
    this.cargar();
  }
  cargar() {
    this.api.getDashboard().subscribe((d) => this.data$.next(d));
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 76, vars: 36, consts: [[1, "grid-4", "mb-4"], [1, "card", "text-center"], [2, "color", "#198754"], [2, "color", "#0d6efd"], [2, "color", "#6f42c1"], [2, "color", "#dc3545"], [1, "grid-3", "mb-4"], [1, "grid-2", "mb-4"], [1, "card"], [1, "mb-3"], [1, "table"], [4, "ngFor", "ngForOf"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3");
        \u0275\u0275text(3, "Ventas Hoy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h2", 2);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "async");
        \u0275\u0275pipe(7, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 1)(9, "h3");
        \u0275\u0275text(10, "Ventas Semana");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "h2", 3);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "async");
        \u0275\u0275pipe(14, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 1)(16, "h3");
        \u0275\u0275text(17, "Ventas Mes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "h2", 4);
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "async");
        \u0275\u0275pipe(21, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 1)(23, "h3");
        \u0275\u0275text(24, "Pedidos Pendientes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "h2", 5);
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "async");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "div", 6)(29, "div", 1)(30, "h3");
        \u0275\u0275text(31, "Mesas Ocupadas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "h2");
        \u0275\u0275text(33);
        \u0275\u0275pipe(34, "async");
        \u0275\u0275pipe(35, "async");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(36, "div", 7)(37, "div", 8)(38, "h3", 9);
        \u0275\u0275text(39, "Productos Mas Vendidos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "table", 10)(41, "thead")(42, "tr")(43, "th");
        \u0275\u0275text(44, "Producto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "th");
        \u0275\u0275text(46, "Cantidad Vendida");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(47, "tbody");
        \u0275\u0275template(48, DashboardComponent_tr_48_Template, 5, 2, "tr", 11);
        \u0275\u0275pipe(49, "async");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(50, "div", 8)(51, "h3", 9);
        \u0275\u0275text(52, "Productos Menos Vendidos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "table", 10)(54, "thead")(55, "tr")(56, "th");
        \u0275\u0275text(57, "Producto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "th");
        \u0275\u0275text(59, "Cantidad Vendida");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(60, "tbody");
        \u0275\u0275template(61, DashboardComponent_tr_61_Template, 5, 2, "tr", 11);
        \u0275\u0275pipe(62, "async");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(63, "div", 8)(64, "h3", 9);
        \u0275\u0275text(65, "Ventas de los Ultimos 7 Dias");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "table", 10)(67, "thead")(68, "tr")(69, "th");
        \u0275\u0275text(70, "Dia");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "th");
        \u0275\u0275text(72, "Ventas");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(73, "tbody");
        \u0275\u0275template(74, DashboardComponent_tr_74_Template, 6, 5, "tr", 11);
        \u0275\u0275pipe(75, "async");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(7, 11, \u0275\u0275pipeBind1(6, 9, ctx.data$)?.ventasHoy, "1.2-2"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(14, 16, \u0275\u0275pipeBind1(13, 14, ctx.data$)?.ventasSemana, "1.2-2"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(21, 21, \u0275\u0275pipeBind1(20, 19, ctx.data$)?.ventasMes, "1.2-2"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 24, ctx.data$)?.pedidosPendientes);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(34, 26, ctx.data$)?.mesasOcupadas, " / ", \u0275\u0275pipeBind1(35, 28, ctx.data$)?.totalMesas);
        \u0275\u0275advance(15);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(49, 30, ctx.data$)?.productosMasVendidos);
        \u0275\u0275advance(13);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(62, 32, ctx.data$)?.productosMenosVendidos);
        \u0275\u0275advance(13);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(75, 34, ctx.data$)?.ventasPorDia);
      }
    }, dependencies: [CommonModule, NgForOf, AsyncPipe, DecimalPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{
      selector: "app-dashboard",
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
    }]
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/modules/dashboard/dashboard.component.ts", lineNumber: 80 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-E6UELL5H.js.map
