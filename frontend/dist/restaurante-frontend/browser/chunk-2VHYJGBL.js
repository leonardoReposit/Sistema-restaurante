import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
  RequiredValidator,
  ɵNgNoValidate
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
  __spreadValues,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵcontrol,
  ɵɵcontrolCreate,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RANSCB4O.js";

// src/app/modules/mesas/mesas.component.ts
function MesasComponent_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "button", 7);
    \u0275\u0275listener("click", function MesasComponent_tr_18_Template_button_click_9_listener() {
      const m_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editar(m_r2));
    });
    \u0275\u0275text(10, "Editar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 8);
    \u0275\u0275listener("click", function MesasComponent_tr_18_Template_button_click_11_listener() {
      const m_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cambiarEstado(m_r2));
    });
    \u0275\u0275text(12, "Cambiar Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 9);
    \u0275\u0275listener("click", function MesasComponent_tr_18_Template_button_click_13_listener() {
      const m_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.eliminar(m_r2.id));
    });
    \u0275\u0275text(14, "Eliminar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const m_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r2.numeroMesa);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", m_r2.capacidad, " personas");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-success", m_r2.estado === "LIBRE")("badge-danger", m_r2.estado === "OCUPADA")("badge-warning", m_r2.estado === "RESERVADA");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", m_r2.estado, " ");
  }
}
function MesasComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 12);
    \u0275\u0275listener("ngSubmit", function MesasComponent_div_20_Template_form_ngSubmit_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.guardar());
    });
    \u0275\u0275elementStart(5, "div", 13)(6, "div", 14)(7, "label");
    \u0275\u0275text(8, "Numero de Mesa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function MesasComponent_div_20_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.numeroMesa, $event) || (ctx_r2.form.numeroMesa = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 14)(11, "label");
    \u0275\u0275text(12, "Capacidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function MesasComponent_div_20_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.capacidad, $event) || (ctx_r2.form.capacidad = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 17)(15, "button", 18);
    \u0275\u0275text(16, "Guardar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 19);
    \u0275\u0275listener("click", function MesasComponent_div_20_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancelar());
    });
    \u0275\u0275text(18, "Cancelar");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.editMode ? "Editar" : "Nueva", " Mesa");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.numeroMesa);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.capacidad);
    \u0275\u0275control();
  }
}
var MesasComponent = class _MesasComponent {
  constructor(api) {
    this.api = api;
    this.mesas$ = new BehaviorSubject([]);
    this.showModal = false;
    this.editMode = false;
    this.form = {};
    this.estados = ["LIBRE", "OCUPADA", "RESERVADA"];
    this.load();
  }
  load() {
    this.api.getMesas().subscribe((d) => this.mesas$.next(d));
  }
  nuevo() {
    this.form = {};
    this.editMode = false;
    this.showModal = true;
  }
  editar(m) {
    this.form = __spreadValues({}, m);
    this.editMode = true;
    this.showModal = true;
  }
  guardar() {
    if (this.editMode) {
      this.api.updateMesa(this.form.id, this.form).subscribe(() => {
        this.load();
        this.showModal = false;
      });
    } else {
      this.api.createMesa(this.form).subscribe(() => {
        this.load();
        this.showModal = false;
      });
    }
  }
  cambiarEstado(m) {
    const idx = this.estados.indexOf(m.estado || "LIBRE");
    const next = this.estados[(idx + 1) % this.estados.length];
    this.api.changeMesaEstado(m.id, next).subscribe(() => this.load());
  }
  cancelar() {
    this.showModal = false;
  }
  eliminar(id) {
    if (confirm("Eliminar mesa?"))
      this.api.deleteMesa(id).subscribe(() => this.load());
  }
  static {
    this.\u0275fac = function MesasComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MesasComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MesasComponent, selectors: [["app-mesas"]], decls: 21, vars: 4, consts: [[1, "card"], [2, "display", "flex", "justify-content", "space-between", "margin-bottom", "15px"], [1, "btn", "btn-primary", 3, "click"], [1, "table"], [4, "ngFor", "ngForOf"], ["class", "modal-overlay", 4, "ngIf"], [1, "badge"], [1, "btn", "btn-warning", "btn-sm", 3, "click"], [1, "btn", "btn-info", "btn-sm", 3, "click"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "modal-overlay"], [1, "modal-content"], [3, "ngSubmit"], [1, "grid-2"], [1, "form-group"], ["type", "number", "name", "numeroMesa", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "capacidad", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "mt-3"], ["type", "submit", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]], template: function MesasComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3");
        \u0275\u0275text(3, "Gestion de Mesas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 2);
        \u0275\u0275listener("click", function MesasComponent_Template_button_click_4_listener() {
          return ctx.nuevo();
        });
        \u0275\u0275text(5, "+ Nueva Mesa");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "table", 3)(7, "thead")(8, "tr")(9, "th");
        \u0275\u0275text(10, "Nro Mesa");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "th");
        \u0275\u0275text(12, "Capacidad");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "th");
        \u0275\u0275text(14, "Estado");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "th");
        \u0275\u0275text(16, "Acciones");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "tbody");
        \u0275\u0275template(18, MesasComponent_tr_18_Template, 15, 9, "tr", 4);
        \u0275\u0275pipe(19, "async");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(20, MesasComponent_div_20_Template, 19, 3, "div", 5);
      }
      if (rf & 2) {
        \u0275\u0275advance(18);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(19, 2, ctx.mesas$));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.showModal);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, AsyncPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MesasComponent, [{
    type: Component,
    args: [{
      selector: "app-mesas",
      standalone: true,
      imports: [CommonModule, FormsModule],
      template: `
    <div class="card">
      <div style="display:flex;justify-content:space-between;margin-bottom:15px;">
        <h3>Gestion de Mesas</h3>
        <button class="btn btn-primary" (click)="nuevo()">+ Nueva Mesa</button>
      </div>
      <table class="table">
        <thead>
          <tr><th>Nro Mesa</th><th>Capacidad</th><th>Estado</th><th>Acciones</th></tr>
        </thead>
        <tbody>
          <tr *ngFor="let m of mesas$ | async">
            <td>{{ m.numeroMesa }}</td>
            <td>{{ m.capacidad }} personas</td>
            <td>
              <span class="badge" [class.badge-success]="m.estado==='LIBRE'" [class.badge-danger]="m.estado==='OCUPADA'"
                    [class.badge-warning]="m.estado==='RESERVADA'">
                {{ m.estado }}
              </span>
            </td>
            <td>
              <button class="btn btn-warning btn-sm" (click)="editar(m)">Editar</button>
              <button class="btn btn-info btn-sm" (click)="cambiarEstado(m)">Cambiar Estado</button>
              <button class="btn btn-danger btn-sm" (click)="eliminar(m.id!)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="modal-overlay" *ngIf="showModal">
      <div class="modal-content">
        <h3>{{ editMode ? 'Editar' : 'Nueva' }} Mesa</h3>
        <form (ngSubmit)="guardar()">
          <div class="grid-2">
            <div class="form-group">
              <label>Numero de Mesa</label>
              <input class="form-control" type="number" [(ngModel)]="form.numeroMesa" name="numeroMesa" required>
            </div>
            <div class="form-group">
              <label>Capacidad</label>
              <input class="form-control" type="number" [(ngModel)]="form.capacidad" name="capacidad" required>
            </div>
          </div>
          <div class="mt-3">
            <button type="submit" class="btn btn-success">Guardar</button>
            <button type="button" class="btn btn-secondary" (click)="cancelar()">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  `
    }]
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MesasComponent, { className: "MesasComponent", filePath: "src/app/modules/mesas/mesas.component.ts", lineNumber: 65 });
})();
export {
  MesasComponent
};
//# sourceMappingURL=chunk-2VHYJGBL.js.map
