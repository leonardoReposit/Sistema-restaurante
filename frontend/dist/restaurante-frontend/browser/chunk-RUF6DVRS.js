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

// src/app/modules/proveedores/proveedores.component.ts
function ProveedoresComponent_tr_22_Template(rf, ctx) {
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
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "button", 6);
    \u0275\u0275listener("click", function ProveedoresComponent_tr_22_Template_button_click_12_listener() {
      const p_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editar(p_r2));
    });
    \u0275\u0275text(13, "Editar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 7);
    \u0275\u0275listener("click", function ProveedoresComponent_tr_22_Template_button_click_14_listener() {
      const p_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.eliminar(p_r2.id));
    });
    \u0275\u0275text(15, "Eliminar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.contacto);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.telefono);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.direccion);
  }
}
function ProveedoresComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 10);
    \u0275\u0275listener("ngSubmit", function ProveedoresComponent_div_24_Template_form_ngSubmit_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.guardar());
    });
    \u0275\u0275elementStart(5, "div", 11)(6, "div", 12)(7, "label");
    \u0275\u0275text(8, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function ProveedoresComponent_div_24_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.nombre, $event) || (ctx_r2.form.nombre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 12)(11, "label");
    \u0275\u0275text(12, "Contacto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function ProveedoresComponent_div_24_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.contacto, $event) || (ctx_r2.form.contacto = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 12)(15, "label");
    \u0275\u0275text(16, "Telefono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function ProveedoresComponent_div_24_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.telefono, $event) || (ctx_r2.form.telefono = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 12)(19, "label");
    \u0275\u0275text(20, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function ProveedoresComponent_div_24_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.email, $event) || (ctx_r2.form.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 12)(23, "label");
    \u0275\u0275text(24, "Direccion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function ProveedoresComponent_div_24_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.direccion, $event) || (ctx_r2.form.direccion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 18)(27, "button", 19);
    \u0275\u0275text(28, "Guardar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 20);
    \u0275\u0275listener("click", function ProveedoresComponent_div_24_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancelar());
    });
    \u0275\u0275text(30, "Cancelar");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.editMode ? "Editar" : "Nuevo", " Proveedor");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.nombre);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.contacto);
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
var ProveedoresComponent = class _ProveedoresComponent {
  constructor(api) {
    this.api = api;
    this.proveedores$ = new BehaviorSubject([]);
    this.showModal = false;
    this.editMode = false;
    this.form = {};
    this.load();
  }
  load() {
    this.api.getProveedores().subscribe((d) => this.proveedores$.next(d));
  }
  nuevo() {
    this.form = {};
    this.editMode = false;
    this.showModal = true;
  }
  editar(p) {
    this.form = __spreadValues({}, p);
    this.editMode = true;
    this.showModal = true;
  }
  guardar() {
    if (this.editMode) {
      this.api.updateProveedor(this.form.id, this.form).subscribe(() => {
        this.load();
        this.showModal = false;
      });
    } else {
      this.api.createProveedor(this.form).subscribe(() => {
        this.load();
        this.showModal = false;
      });
    }
  }
  cancelar() {
    this.showModal = false;
  }
  eliminar(id) {
    if (confirm("Eliminar proveedor?"))
      this.api.deleteProveedor(id).subscribe(() => this.load());
  }
  static {
    this.\u0275fac = function ProveedoresComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProveedoresComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProveedoresComponent, selectors: [["app-proveedores"]], decls: 25, vars: 4, consts: [[1, "card"], [2, "display", "flex", "justify-content", "space-between", "margin-bottom", "15px"], [1, "btn", "btn-primary", 3, "click"], [1, "table"], [4, "ngFor", "ngForOf"], ["class", "modal-overlay", 4, "ngIf"], [1, "btn", "btn-warning", "btn-sm", 3, "click"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "modal-overlay"], [1, "modal-content"], [3, "ngSubmit"], [1, "grid-2"], [1, "form-group"], ["name", "nombre", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "contacto", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "telefono", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "direccion", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "mt-3"], ["type", "submit", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]], template: function ProveedoresComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3");
        \u0275\u0275text(3, "Gestion de Proveedores");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 2);
        \u0275\u0275listener("click", function ProveedoresComponent_Template_button_click_4_listener() {
          return ctx.nuevo();
        });
        \u0275\u0275text(5, "+ Nuevo Proveedor");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "table", 3)(7, "thead")(8, "tr")(9, "th");
        \u0275\u0275text(10, "Nombre");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "th");
        \u0275\u0275text(12, "Contacto");
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
        \u0275\u0275template(22, ProveedoresComponent_tr_22_Template, 16, 5, "tr", 4);
        \u0275\u0275pipe(23, "async");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(24, ProveedoresComponent_div_24_Template, 31, 6, "div", 5);
      }
      if (rf & 2) {
        \u0275\u0275advance(22);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(23, 2, ctx.proveedores$));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.showModal);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, AsyncPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProveedoresComponent, [{
    type: Component,
    args: [{
      selector: "app-proveedores",
      standalone: true,
      imports: [CommonModule, FormsModule],
      template: `
    <div class="card">
      <div style="display:flex;justify-content:space-between;margin-bottom:15px;">
        <h3>Gestion de Proveedores</h3>
        <button class="btn btn-primary" (click)="nuevo()">+ Nuevo Proveedor</button>
      </div>
      <table class="table">
        <thead>
          <tr><th>Nombre</th><th>Contacto</th><th>Telefono</th><th>Email</th><th>Direccion</th><th>Acciones</th></tr>
        </thead>
        <tbody>
          <tr *ngFor="let p of proveedores$ | async">
            <td>{{ p.nombre }}</td>
            <td>{{ p.contacto }}</td>
            <td>{{ p.telefono }}</td>
            <td>{{ p.email }}</td>
            <td>{{ p.direccion }}</td>
            <td>
              <button class="btn btn-warning btn-sm" (click)="editar(p)">Editar</button>
              <button class="btn btn-danger btn-sm" (click)="eliminar(p.id!)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="modal-overlay" *ngIf="showModal">
      <div class="modal-content">
        <h3>{{ editMode ? 'Editar' : 'Nuevo' }} Proveedor</h3>
        <form (ngSubmit)="guardar()">
          <div class="grid-2">
            <div class="form-group">
              <label>Nombre</label>
              <input class="form-control" [(ngModel)]="form.nombre" name="nombre" required>
            </div>
            <div class="form-group">
              <label>Contacto</label>
              <input class="form-control" [(ngModel)]="form.contacto" name="contacto">
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProveedoresComponent, { className: "ProveedoresComponent", filePath: "src/app/modules/proveedores/proveedores.component.ts", lineNumber: 73 });
})();
export {
  ProveedoresComponent
};
//# sourceMappingURL=chunk-RUF6DVRS.js.map
