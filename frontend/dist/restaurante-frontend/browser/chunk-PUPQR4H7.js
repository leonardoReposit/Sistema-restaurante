import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-MHBWVEJO.js";
import {
  ApiService
} from "./chunk-SGUWGNAX.js";
import {
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  Component,
  DatePipe,
  NgForOf,
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
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RANSCB4O.js";

// src/app/modules/facturacion/facturacion.component.ts
function FacturacionComponent_option_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    \u0275\u0275property("value", p_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("#", p_r1.id, " - Mesa ", p_r1.numeroMesa, " - S/ ", p_r1.total);
  }
}
function FacturacionComponent_tr_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r2.serie);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("S/ ", f_r2.total);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r2.metodoPago);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 4, f_r2.fecha, "short"));
  }
}
var FacturacionComponent = class _FacturacionComponent {
  constructor(api) {
    this.api = api;
    this.facturas$ = new BehaviorSubject([]);
    this.pedidosPendientes$ = new BehaviorSubject([]);
    this.form = { tipo: "BOLETA", metodoPago: "EFECTIVO", descuento: 0 };
    this.api.getFacturas().subscribe((d) => this.facturas$.next(d));
    this.api.getPedidosPorEstado("LISTO").subscribe((d) => this.pedidosPendientes$.next(d));
  }
  generar() {
    this.api.generarFactura(this.form).subscribe(() => {
      this.api.getFacturas().subscribe((d) => this.facturas$.next(d));
      this.api.getPedidosPorEstado("LISTO").subscribe((d) => this.pedidosPendientes$.next(d));
      this.form = { tipo: "BOLETA", metodoPago: "EFECTIVO", descuento: 0 };
    });
  }
  static {
    this.\u0275fac = function FacturacionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FacturacionComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FacturacionComponent, selectors: [["app-facturacion"]], decls: 58, vars: 10, consts: [[1, "card"], [1, "mb-3"], [1, "grid-2"], [1, "form-group"], ["name", "pedidoId", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["name", "tipo", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "BOLETA"], ["value", "FACTURA"], ["name", "metodoPago", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "EFECTIVO"], ["value", "TARJETA"], ["value", "YAPE"], ["value", "PLIN"], ["type", "number", "name", "descuento", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-success", 3, "click"], [1, "table"], [4, "ngFor", "ngForOf"], [3, "value"]], template: function FacturacionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2, "Facturacion");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "div")(5, "h4");
        \u0275\u0275text(6, "Generar Factura");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 3)(8, "label");
        \u0275\u0275text(9, "Pedido (ID)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "select", 4);
        \u0275\u0275twoWayListener("ngModelChange", function FacturacionComponent_Template_select_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.pedidoId, $event) || (ctx.form.pedidoId = $event);
          return $event;
        });
        \u0275\u0275elementStart(11, "option", 5);
        \u0275\u0275text(12, "Seleccione pedido");
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, FacturacionComponent_option_13_Template, 2, 4, "option", 6);
        \u0275\u0275pipe(14, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 3)(16, "label");
        \u0275\u0275text(17, "Tipo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "select", 7);
        \u0275\u0275twoWayListener("ngModelChange", function FacturacionComponent_Template_select_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.tipo, $event) || (ctx.form.tipo = $event);
          return $event;
        });
        \u0275\u0275elementStart(19, "option", 8);
        \u0275\u0275text(20, "Boleta");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "option", 9);
        \u0275\u0275text(22, "Factura");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 3)(24, "label");
        \u0275\u0275text(25, "Metodo de Pago");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "select", 10);
        \u0275\u0275twoWayListener("ngModelChange", function FacturacionComponent_Template_select_ngModelChange_26_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.metodoPago, $event) || (ctx.form.metodoPago = $event);
          return $event;
        });
        \u0275\u0275elementStart(27, "option", 11);
        \u0275\u0275text(28, "Efectivo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "option", 12);
        \u0275\u0275text(30, "Tarjeta");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "option", 13);
        \u0275\u0275text(32, "Yape");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "option", 14);
        \u0275\u0275text(34, "Plin");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 3)(36, "label");
        \u0275\u0275text(37, "Descuento (S/)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function FacturacionComponent_Template_input_ngModelChange_38_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.descuento, $event) || (ctx.form.descuento = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "button", 16);
        \u0275\u0275listener("click", function FacturacionComponent_Template_button_click_39_listener() {
          return ctx.generar();
        });
        \u0275\u0275text(40, "Generar Factura");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div")(42, "h4");
        \u0275\u0275text(43, "Facturas Emitidas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "table", 17)(45, "thead")(46, "tr")(47, "th");
        \u0275\u0275text(48, "Serie");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "th");
        \u0275\u0275text(50, "Total");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "th");
        \u0275\u0275text(52, "Metodo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "th");
        \u0275\u0275text(54, "Fecha");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(55, "tbody");
        \u0275\u0275template(56, FacturacionComponent_tr_56_Template, 10, 7, "tr", 18);
        \u0275\u0275pipe(57, "async");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.pedidoId);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(14, 6, ctx.pedidosPendientes$));
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.tipo);
        \u0275\u0275control();
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.metodoPago);
        \u0275\u0275control();
        \u0275\u0275advance(12);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.descuento);
        \u0275\u0275control();
        \u0275\u0275advance(18);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(57, 8, ctx.facturas$));
      }
    }, dependencies: [CommonModule, NgForOf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, AsyncPipe, DatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FacturacionComponent, [{
    type: Component,
    args: [{
      selector: "app-facturacion",
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
    }]
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FacturacionComponent, { className: "FacturacionComponent", filePath: "src/app/modules/facturacion/facturacion.component.ts", lineNumber: 67 });
})();
export {
  FacturacionComponent
};
//# sourceMappingURL=chunk-PUPQR4H7.js.map
