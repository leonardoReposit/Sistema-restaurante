import {
  FormsModule
} from "./chunk-MHBWVEJO.js";
import {
  ApiService
} from "./chunk-SGUWGNAX.js";
import {
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-RANSCB4O.js";

// src/app/modules/cocina/cocina.component.ts
function CocinaComponent_div_7_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Mesa: ", p_r2.numeroMesa);
  }
}
function CocinaComponent_div_7_li_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", d_r3.platilloNombre, " x", d_r3.cantidad);
  }
}
function CocinaComponent_div_7_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p")(1, "em");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.observaciones);
  }
}
function CocinaComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 9);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, CocinaComponent_div_7_p_6_Template, 2, 1, "p", 10);
    \u0275\u0275elementStart(7, "ul");
    \u0275\u0275template(8, CocinaComponent_div_7_li_8_Template, 2, 2, "li", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, CocinaComponent_div_7_p_9_Template, 3, 1, "p", 10);
    \u0275\u0275elementStart(10, "button", 12);
    \u0275\u0275listener("click", function CocinaComponent_div_7_Template_button_click_10_listener() {
      const p_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.iniciarPreparacion(p_r2));
    });
    \u0275\u0275text(11, "Iniciar Preparacion");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Pedido #", p_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.prioridad);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r2.numeroMesa);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", p_r2.detalles);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r2.observaciones);
  }
}
function CocinaComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, "Sin pedidos pendientes");
    \u0275\u0275elementEnd();
  }
}
function CocinaComponent_div_14_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Mesa: ", p_r6.numeroMesa);
  }
}
function CocinaComponent_div_14_li_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", d_r7.platilloNombre, " x", d_r7.cantidad);
  }
}
function CocinaComponent_div_14_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p")(1, "em");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r6.observaciones);
  }
}
function CocinaComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 14);
    \u0275\u0275text(5, "Preparando");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, CocinaComponent_div_14_p_6_Template, 2, 1, "p", 10);
    \u0275\u0275elementStart(7, "ul");
    \u0275\u0275template(8, CocinaComponent_div_14_li_8_Template, 2, 2, "li", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, CocinaComponent_div_14_p_9_Template, 3, 1, "p", 10);
    \u0275\u0275elementStart(10, "button", 15);
    \u0275\u0275listener("click", function CocinaComponent_div_14_Template_button_click_10_listener() {
      const p_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.marcarListo(p_r6));
    });
    \u0275\u0275text(11, "Marcar como Listo");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Pedido #", p_r6.id);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", p_r6.numeroMesa);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", p_r6.detalles);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r6.observaciones);
  }
}
function CocinaComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, "Sin pedidos en preparacion");
    \u0275\u0275elementEnd();
  }
}
var CocinaComponent = class _CocinaComponent {
  constructor(api) {
    this.api = api;
    this.pendientes$ = new BehaviorSubject([]);
    this.enPreparacion$ = new BehaviorSubject([]);
    this.load();
  }
  load() {
    this.api.getPedidosCocina().subscribe((d) => {
      this.pendientes$.next(d.filter((p) => p.estado === "PENDIENTE"));
      this.enPreparacion$.next(d.filter((p) => p.estado === "EN_PREPARACION"));
    });
  }
  iniciarPreparacion(p) {
    this.api.changePedidoEstado(p.id, "EN_PREPARACION").subscribe(() => this.load());
  }
  marcarListo(p) {
    this.api.changePedidoEstado(p.id, "LISTO").subscribe(() => this.load());
  }
  static {
    this.\u0275fac = function CocinaComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CocinaComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CocinaComponent, selectors: [["app-cocina"]], decls: 18, vars: 12, consts: [[1, "card"], [1, "mb-3"], [1, "grid-2"], [1, "card", 2, "border-left", "4px solid #ffc107"], ["style", "border:1px solid #ddd;padding:10px;margin-bottom:10px;border-radius:4px;", 4, "ngFor", "ngForOf"], ["class", "text-center", "style", "color:#999;", 4, "ngIf"], [1, "card", 2, "border-left", "4px solid #0dcaf0"], [2, "border", "1px solid #ddd", "padding", "10px", "margin-bottom", "10px", "border-radius", "4px"], [2, "display", "flex", "justify-content", "space-between"], [1, "badge", "badge-warning"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "text-center", 2, "color", "#999"], [1, "badge", "badge-info"], [1, "btn", "btn-success", "btn-sm", 3, "click"]], template: function CocinaComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2, "Panel de Cocina");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "h4", 1);
        \u0275\u0275text(6, "Pendientes");
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, CocinaComponent_div_7_Template, 12, 5, "div", 4);
        \u0275\u0275pipe(8, "async");
        \u0275\u0275template(9, CocinaComponent_div_9_Template, 2, 0, "div", 5);
        \u0275\u0275pipe(10, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 6)(12, "h4", 1);
        \u0275\u0275text(13, "En Preparacion");
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, CocinaComponent_div_14_Template, 12, 4, "div", 4);
        \u0275\u0275pipe(15, "async");
        \u0275\u0275template(16, CocinaComponent_div_16_Template, 2, 0, "div", 5);
        \u0275\u0275pipe(17, "async");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(8, 4, ctx.pendientes$));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(10, 6, ctx.pendientes$)?.length === 0);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(15, 8, ctx.enPreparacion$));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(17, 10, ctx.enPreparacion$)?.length === 0);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, AsyncPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CocinaComponent, [{
    type: Component,
    args: [{
      selector: "app-cocina",
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
    }]
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CocinaComponent, { className: "CocinaComponent", filePath: "src/app/modules/cocina/cocina.component.ts", lineNumber: 52 });
})();
export {
  CocinaComponent
};
//# sourceMappingURL=chunk-BCZAWRCE.js.map
