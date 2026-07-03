import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
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

// src/app/modules/clientes/clientes.component.ts
function ClientesComponent_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
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
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "button", 8);
    \u0275\u0275listener("click", function ClientesComponent_tr_22_Template_button_click_10_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editar(c_r2));
    });
    \u0275\u0275text(11, "Editar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 9);
    \u0275\u0275listener("click", function ClientesComponent_tr_22_Template_button_click_12_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.eliminar(c_r2.id));
    });
    \u0275\u0275text(13, "Eliminar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.telefono);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.direccion);
  }
}
function ClientesComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 12);
    \u0275\u0275listener("ngSubmit", function ClientesComponent_div_24_Template_form_ngSubmit_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.guardar());
    });
    \u0275\u0275elementStart(5, "div", 13)(6, "div", 14)(7, "label");
    \u0275\u0275text(8, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function ClientesComponent_div_24_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.nombre, $event) || (ctx_r2.form.nombre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 14)(11, "label");
    \u0275\u0275text(12, "Telefono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function ClientesComponent_div_24_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.telefono, $event) || (ctx_r2.form.telefono = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 14)(15, "label");
    \u0275\u0275text(16, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function ClientesComponent_div_24_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.email, $event) || (ctx_r2.form.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 14)(19, "label");
    \u0275\u0275text(20, "Direccion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function ClientesComponent_div_24_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.direccion, $event) || (ctx_r2.form.direccion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 19)(23, "button", 20);
    \u0275\u0275text(24, "Guardar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 21);
    \u0275\u0275listener("click", function ClientesComponent_div_24_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancelar());
    });
    \u0275\u0275text(26, "Cancelar");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.editMode ? "Editar" : "Nuevo", " Cliente");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.nombre);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.telefono);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.email);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.direccion);
    \u0275\u0275control();
  }
}
var ClientesComponent = class _ClientesComponent {
  constructor(api) {
    this.api = api;
    this.clientes$ = new BehaviorSubject([]);
    this.showModal = false;
    this.editMode = false;
    this.form = {};
    this.load();
  }
  load() {
    this.api.getClientes().subscribe((d) => this.clientes$.next(d));
  }
  buscar(e) {
    const val = e.target.value;
    if (val.length > 2) {
      this.api.buscarCliente(val).subscribe((d) => this.clientes$.next(d));
    } else {
      this.load();
    }
  }
  nuevo() {
    this.form = {};
    this.editMode = false;
    this.showModal = true;
  }
  editar(c) {
    this.form = __spreadValues({}, c);
    this.editMode = true;
    this.showModal = true;
  }
  guardar() {
    if (this.editMode) {
      this.api.updateCliente(this.form.id, this.form).subscribe(() => {
        this.load();
        this.showModal = false;
      });
    } else {
      this.api.createCliente(this.form).subscribe(() => {
        this.load();
        this.showModal = false;
      });
    }
  }
  cancelar() {
    this.showModal = false;
  }
  eliminar(id) {
    if (confirm("Eliminar cliente?"))
      this.api.deleteCliente(id).subscribe(() => this.load());
  }
  static {
    this.\u0275fac = function ClientesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClientesComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientesComponent, selectors: [["app-clientes"]], decls: 25, vars: 4, consts: [[1, "card"], [2, "display", "flex", "justify-content", "space-between", "margin-bottom", "15px"], [1, "btn", "btn-primary", 3, "click"], [1, "form-group", 2, "max-width", "300px"], ["placeholder", "Buscar cliente...", 1, "form-control", 3, "input"], [1, "table"], [4, "ngFor", "ngForOf"], ["class", "modal-overlay", 4, "ngIf"], [1, "btn", "btn-warning", "btn-sm", 3, "click"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "modal-overlay"], [1, "modal-content"], [3, "ngSubmit"], [1, "grid-2"], [1, "form-group"], ["name", "nombre", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "telefono", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "direccion", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "mt-3"], ["type", "submit", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]], template: function ClientesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3");
        \u0275\u0275text(3, "Gestion de Clientes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 2);
        \u0275\u0275listener("click", function ClientesComponent_Template_button_click_4_listener() {
          return ctx.nuevo();
        });
        \u0275\u0275text(5, "+ Nuevo Cliente");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 3)(7, "input", 4);
        \u0275\u0275listener("input", function ClientesComponent_Template_input_input_7_listener($event) {
          return ctx.buscar($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "table", 5)(9, "thead")(10, "tr")(11, "th");
        \u0275\u0275text(12, "Nombre");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "th");
        \u0275\u0275text(14, "Telefono");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "th");
        \u0275\u0275text(16, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "th");
        \u0275\u0275text(18, "Direccion");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "th");
        \u0275\u0275text(20, "Acciones");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "tbody");
        \u0275\u0275template(22, ClientesComponent_tr_22_Template, 14, 4, "tr", 6);
        \u0275\u0275pipe(23, "async");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(24, ClientesComponent_div_24_Template, 27, 5, "div", 7);
      }
      if (rf & 2) {
        \u0275\u0275advance(22);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(23, 2, ctx.clientes$));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.showModal);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, AsyncPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientesComponent, [{
    type: Component,
    args: [{
      selector: "app-clientes",
      standalone: true,
      imports: [CommonModule, FormsModule],
      template: `
    <div class="card">
      <div style="display:flex;justify-content:space-between;margin-bottom:15px;">
        <h3>Gestion de Clientes</h3>
        <button class="btn btn-primary" (click)="nuevo()">+ Nuevo Cliente</button>
      </div>
      <div class="form-group" style="max-width:300px;">
        <input class="form-control" placeholder="Buscar cliente..." (input)="buscar($event)">
      </div>
      <table class="table">
        <thead>
          <tr><th>Nombre</th><th>Telefono</th><th>Email</th><th>Direccion</th><th>Acciones</th></tr>
        </thead>
        <tbody>
          <tr *ngFor="let c of clientes$ | async">
            <td>{{ c.nombre }}</td>
            <td>{{ c.telefono }}</td>
            <td>{{ c.email }}</td>
            <td>{{ c.direccion }}</td>
            <td>
              <button class="btn btn-warning btn-sm" (click)="editar(c)">Editar</button>
              <button class="btn btn-danger btn-sm" (click)="eliminar(c.id!)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="modal-overlay" *ngIf="showModal">
      <div class="modal-content">
        <h3>{{ editMode ? 'Editar' : 'Nuevo' }} Cliente</h3>
        <form (ngSubmit)="guardar()">
          <div class="grid-2">
            <div class="form-group">
              <label>Nombre</label>
              <input class="form-control" [(ngModel)]="form.nombre" name="nombre" required>
            </div>
            <div class="form-group">
              <label>Telefono</label>
              <input class="form-control" [(ngModel)]="form.telefono" name="telefono">
            </div>
            <div class="form-group">
              <label>Email</label>
              <input class="form-control" type="email" [(ngModel)]="form.email" name="email">
            </div>
            <div class="form-group">
              <label>Direccion</label>
              <input class="form-control" [(ngModel)]="form.direccion" name="direccion">
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientesComponent, { className: "ClientesComponent", filePath: "src/app/modules/clientes/clientes.component.ts", lineNumber: 71 });
})();
export {
  ClientesComponent
};
//# sourceMappingURL=chunk-STLAQKXD.js.map
