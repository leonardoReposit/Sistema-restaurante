import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
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
  NgForOf,
  NgIf,
  __spreadProps,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RANSCB4O.js";

// src/app/modules/usuarios/usuarios.component.ts
function UsuariosComponent_tr_22_Template(rf, ctx) {
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
    \u0275\u0275elementStart(7, "td")(8, "span", 6);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "button", 7);
    \u0275\u0275listener("click", function UsuariosComponent_tr_22_Template_button_click_14_listener() {
      const u_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editar(u_r2));
    });
    \u0275\u0275text(15, "Editar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 8);
    \u0275\u0275listener("click", function UsuariosComponent_tr_22_Template_button_click_16_listener() {
      const u_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleEstado(u_r2));
    });
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const u_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r2.username);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", u_r2.nombre, " ", u_r2.apellido);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r2.rol);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-success", u_r2.enabled)("badge-danger", !u_r2.enabled);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r2.enabled ? "Activo" : "Inactivo");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("btn-success", u_r2.enabled)("btn-secondary", !u_r2.enabled);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r2.enabled ? "Desactivar" : "Activar");
  }
}
function UsuariosComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 11);
    \u0275\u0275listener("ngSubmit", function UsuariosComponent_div_24_Template_form_ngSubmit_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.guardar());
    });
    \u0275\u0275elementStart(5, "div", 12)(6, "div", 13)(7, "label");
    \u0275\u0275text(8, "Usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function UsuariosComponent_div_24_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.username, $event) || (ctx_r2.form.username = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 13)(11, "label");
    \u0275\u0275text(12, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function UsuariosComponent_div_24_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.password, $event) || (ctx_r2.form.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 13)(15, "label");
    \u0275\u0275text(16, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function UsuariosComponent_div_24_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.nombre, $event) || (ctx_r2.form.nombre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 13)(19, "label");
    \u0275\u0275text(20, "Apellido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function UsuariosComponent_div_24_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.apellido, $event) || (ctx_r2.form.apellido = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 13)(23, "label");
    \u0275\u0275text(24, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function UsuariosComponent_div_24_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.email, $event) || (ctx_r2.form.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 13)(27, "label");
    \u0275\u0275text(28, "Telefono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function UsuariosComponent_div_24_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.telefono, $event) || (ctx_r2.form.telefono = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 13)(31, "label");
    \u0275\u0275text(32, "Rol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "select", 20);
    \u0275\u0275twoWayListener("ngModelChange", function UsuariosComponent_div_24_Template_select_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.rol, $event) || (ctx_r2.form.rol = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(34, "option", 21);
    \u0275\u0275text(35, "Administrador");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "option", 22);
    \u0275\u0275text(37, "Cajero");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "option", 23);
    \u0275\u0275text(39, "Mesero");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "option", 24);
    \u0275\u0275text(41, "Cocinero");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 25)(43, "button", 26);
    \u0275\u0275text(44, "Guardar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "button", 27);
    \u0275\u0275listener("click", function UsuariosComponent_div_24_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancelar());
    });
    \u0275\u0275text(46, "Cancelar");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.editMode ? "Editar" : "Nuevo", " Usuario");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.username);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.password);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.nombre);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.apellido);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.email);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.telefono);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.rol);
    \u0275\u0275control();
  }
}
var UsuariosComponent = class _UsuariosComponent {
  constructor(api) {
    this.api = api;
    this.usuarios$ = new BehaviorSubject([]);
    this.showModal = false;
    this.editMode = false;
    this.form = {};
    this.load();
  }
  load() {
    this.api.getUsuarios().subscribe((d) => this.usuarios$.next(d));
  }
  nuevo() {
    this.form = { enabled: true, rol: "MESERO" };
    this.editMode = false;
    this.showModal = true;
  }
  editar(u) {
    this.form = __spreadValues({}, u);
    this.editMode = true;
    this.showModal = true;
  }
  guardar() {
    if (this.editMode) {
      this.api.updateUsuario(this.form.id, this.form).subscribe(() => {
        this.load();
        this.showModal = false;
      });
    } else {
      this.api.createUsuario(this.form).subscribe(() => {
        this.load();
        this.showModal = false;
      });
    }
  }
  cancelar() {
    this.showModal = false;
  }
  toggleEstado(u) {
    this.api.updateUsuario(u.id, __spreadProps(__spreadValues({}, u), { enabled: !u.enabled })).subscribe(() => this.load());
  }
  static {
    this.\u0275fac = function UsuariosComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UsuariosComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsuariosComponent, selectors: [["app-usuarios"]], decls: 25, vars: 4, consts: [[1, "card"], [2, "display", "flex", "justify-content", "space-between", "margin-bottom", "15px"], [1, "btn", "btn-primary", 3, "click"], [1, "table"], [4, "ngFor", "ngForOf"], ["class", "modal-overlay", 4, "ngIf"], [1, "badge", "badge-info"], [1, "btn", "btn-warning", "btn-sm", 3, "click"], [1, "btn", "btn-sm", 3, "click"], [1, "modal-overlay"], [1, "modal-content"], [3, "ngSubmit"], [1, "grid-2"], [1, "form-group"], ["name", "username", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "password", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "nombre", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "apellido", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "telefono", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "rol", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "ADMINISTRADOR"], ["value", "CAJERO"], ["value", "MESERO"], ["value", "COCINERO"], [1, "mt-3"], ["type", "submit", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]], template: function UsuariosComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3");
        \u0275\u0275text(3, "Gestion de Usuarios");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 2);
        \u0275\u0275listener("click", function UsuariosComponent_Template_button_click_4_listener() {
          return ctx.nuevo();
        });
        \u0275\u0275text(5, "+ Nuevo Usuario");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "table", 3)(7, "thead")(8, "tr")(9, "th");
        \u0275\u0275text(10, "ID");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "th");
        \u0275\u0275text(12, "Usuario");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "th");
        \u0275\u0275text(14, "Nombre");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "th");
        \u0275\u0275text(16, "Rol");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "th");
        \u0275\u0275text(18, "Estado");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "th");
        \u0275\u0275text(20, "Acciones");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "tbody");
        \u0275\u0275template(22, UsuariosComponent_tr_22_Template, 18, 15, "tr", 4);
        \u0275\u0275pipe(23, "async");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(24, UsuariosComponent_div_24_Template, 47, 8, "div", 5);
      }
      if (rf & 2) {
        \u0275\u0275advance(22);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(23, 2, ctx.usuarios$));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.showModal);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, AsyncPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsuariosComponent, [{
    type: Component,
    args: [{
      selector: "app-usuarios",
      standalone: true,
      imports: [CommonModule, FormsModule],
      template: `
    <div class="card">
      <div style="display:flex;justify-content:space-between;margin-bottom:15px;">
        <h3>Gestion de Usuarios</h3>
        <button class="btn btn-primary" (click)="nuevo()">+ Nuevo Usuario</button>
      </div>
      <table class="table">
        <thead>
          <tr><th>ID</th><th>Usuario</th><th>Nombre</th><th>Rol</th><th>Estado</th><th>Acciones</th></tr>
        </thead>
        <tbody>
          <tr *ngFor="let u of usuarios$ | async">
            <td>{{ u.id }}</td>
            <td>{{ u.username }}</td>
            <td>{{ u.nombre }} {{ u.apellido }}</td>
            <td><span class="badge badge-info">{{ u.rol }}</span></td>
            <td><span [class.badge-success]="u.enabled" [class.badge-danger]="!u.enabled">{{ u.enabled ? 'Activo' : 'Inactivo' }}</span></td>
            <td>
              <button class="btn btn-warning btn-sm" (click)="editar(u)">Editar</button>
              <button class="btn btn-sm" [class.btn-success]="u.enabled" [class.btn-secondary]="!u.enabled" (click)="toggleEstado(u)">{{ u.enabled ? 'Desactivar' : 'Activar' }}</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="modal-overlay" *ngIf="showModal">
      <div class="modal-content">
        <h3>{{ editMode ? 'Editar' : 'Nuevo' }} Usuario</h3>
        <form (ngSubmit)="guardar()">
          <div class="grid-2">
            <div class="form-group">
              <label>Usuario</label>
              <input class="form-control" [(ngModel)]="form.username" name="username" required>
            </div>
            <div class="form-group">
              <label>Password</label>
              <input class="form-control" type="password" [(ngModel)]="form.password" name="password">
            </div>
            <div class="form-group">
              <label>Nombre</label>
              <input class="form-control" [(ngModel)]="form.nombre" name="nombre" required>
            </div>
            <div class="form-group">
              <label>Apellido</label>
              <input class="form-control" [(ngModel)]="form.apellido" name="apellido" required>
            </div>
            <div class="form-group">
              <label>Email</label>
              <input class="form-control" type="email" [(ngModel)]="form.email" name="email">
            </div>
            <div class="form-group">
              <label>Telefono</label>
              <input class="form-control" [(ngModel)]="form.telefono" name="telefono">
            </div>
            <div class="form-group">
              <label>Rol</label>
              <select class="form-control" [(ngModel)]="form.rol" name="rol">
                <option value="ADMINISTRADOR">Administrador</option>
                <option value="CAJERO">Cajero</option>
                <option value="MESERO">Mesero</option>
                <option value="COCINERO">Cocinero</option>
              </select>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsuariosComponent, { className: "UsuariosComponent", filePath: "src/app/modules/usuarios/usuarios.component.ts", lineNumber: 86 });
})();
export {
  UsuariosComponent
};
//# sourceMappingURL=chunk-UY2OPRJE.js.map
