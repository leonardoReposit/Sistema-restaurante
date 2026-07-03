import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
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

// src/app/modules/menu/menu.component.ts
function MenuComponent_tr_22_Template(rf, ctx) {
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
    \u0275\u0275elementStart(7, "td")(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "button", 8);
    \u0275\u0275listener("click", function MenuComponent_tr_22_Template_button_click_11_listener() {
      const p_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editar(p_r2));
    });
    \u0275\u0275text(12, "Editar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 9);
    \u0275\u0275listener("click", function MenuComponent_tr_22_Template_button_click_13_listener() {
      const p_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleDisponible(p_r2));
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 10);
    \u0275\u0275listener("click", function MenuComponent_tr_22_Template_button_click_15_listener() {
      const p_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.eliminar(p_r2.id));
    });
    \u0275\u0275text(16, "Eliminar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.categoriaNombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("S/ ", p_r2.precio);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-success", p_r2.disponible)("badge-danger", !p_r2.disponible);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r2.disponible ? "Disponible" : "No disponible");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r2.disponible ? "Deshab." : "Habilitar");
  }
}
function MenuComponent_div_24_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275property("value", c_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r5.nombre);
  }
}
function MenuComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 13);
    \u0275\u0275listener("ngSubmit", function MenuComponent_div_24_Template_form_ngSubmit_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.guardar());
    });
    \u0275\u0275elementStart(5, "div", 14)(6, "div", 15)(7, "label");
    \u0275\u0275text(8, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function MenuComponent_div_24_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.nombre, $event) || (ctx_r2.form.nombre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 15)(11, "label");
    \u0275\u0275text(12, "Precio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function MenuComponent_div_24_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.precio, $event) || (ctx_r2.form.precio = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 15)(15, "label");
    \u0275\u0275text(16, "Categoria");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 18);
    \u0275\u0275twoWayListener("ngModelChange", function MenuComponent_div_24_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.categoriaId, $event) || (ctx_r2.form.categoriaId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(18, MenuComponent_div_24_option_18_Template, 2, 2, "option", 19);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 15)(21, "label");
    \u0275\u0275text(22, "URL Imagen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function MenuComponent_div_24_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.imagenUrl, $event) || (ctx_r2.form.imagenUrl = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 15)(25, "label");
    \u0275\u0275text(26, "Descripcion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "textarea", 21);
    \u0275\u0275twoWayListener("ngModelChange", function MenuComponent_div_24_Template_textarea_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.descripcion, $event) || (ctx_r2.form.descripcion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 22)(29, "button", 23);
    \u0275\u0275text(30, "Guardar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 24);
    \u0275\u0275listener("click", function MenuComponent_div_24_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancelar());
    });
    \u0275\u0275text(32, "Cancelar");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.editMode ? "Editar" : "Nuevo", " Platillo");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.nombre);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.precio);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.categoriaId);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(19, 7, ctx_r2.categorias$));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.imagenUrl);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.descripcion);
    \u0275\u0275control();
  }
}
var MenuComponent = class _MenuComponent {
  constructor(api) {
    this.api = api;
    this.platillos$ = new BehaviorSubject([]);
    this.categorias$ = new BehaviorSubject([]);
    this.showModal = false;
    this.editMode = false;
    this.form = { disponible: true };
    this.load();
    this.api.getCategorias().subscribe((d) => this.categorias$.next(d));
  }
  load() {
    this.api.getPlatillos().subscribe((d) => this.platillos$.next(d));
  }
  buscar(e) {
    const val = e.target.value;
    if (val.length > 2) {
      this.api.buscarPlatillo(val).subscribe((d) => this.platillos$.next(d));
    } else {
      this.load();
    }
  }
  nuevo() {
    this.form = { disponible: true };
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
      this.api.updatePlatillo(this.form.id, this.form).subscribe(() => {
        this.load();
        this.showModal = false;
      });
    } else {
      this.api.createPlatillo(this.form).subscribe(() => {
        this.load();
        this.showModal = false;
      });
    }
  }
  toggleDisponible(p) {
    this.api.toggleDisponible(p.id).subscribe(() => this.load());
  }
  cancelar() {
    this.showModal = false;
  }
  eliminar(id) {
    if (confirm("Eliminar platillo?")) {
      this.api.deletePlatillo(id).subscribe(() => this.load());
    }
  }
  static {
    this.\u0275fac = function MenuComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MenuComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MenuComponent, selectors: [["app-menu"]], decls: 25, vars: 4, consts: [[1, "card"], [2, "display", "flex", "justify-content", "space-between", "margin-bottom", "15px"], [1, "btn", "btn-primary", 3, "click"], [1, "form-group", 2, "max-width", "300px"], ["placeholder", "Buscar platillo...", 1, "form-control", 3, "input"], [1, "table"], [4, "ngFor", "ngForOf"], ["class", "modal-overlay", 4, "ngIf"], [1, "btn", "btn-warning", "btn-sm", 3, "click"], [1, "btn", "btn-info", "btn-sm", 3, "click"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "modal-overlay"], [1, "modal-content"], [3, "ngSubmit"], [1, "grid-2"], [1, "form-group"], ["name", "nombre", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "step", "0.01", "name", "precio", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "categoriaId", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "imagenUrl", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "descripcion", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "mt-3"], ["type", "submit", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [3, "value"]], template: function MenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3");
        \u0275\u0275text(3, "Gestion del Menu");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 2);
        \u0275\u0275listener("click", function MenuComponent_Template_button_click_4_listener() {
          return ctx.nuevo();
        });
        \u0275\u0275text(5, "+ Nuevo Platillo");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 3)(7, "input", 4);
        \u0275\u0275listener("input", function MenuComponent_Template_input_input_7_listener($event) {
          return ctx.buscar($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "table", 5)(9, "thead")(10, "tr")(11, "th");
        \u0275\u0275text(12, "Nombre");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "th");
        \u0275\u0275text(14, "Categoria");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "th");
        \u0275\u0275text(16, "Precio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "th");
        \u0275\u0275text(18, "Estado");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "th");
        \u0275\u0275text(20, "Acciones");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "tbody");
        \u0275\u0275template(22, MenuComponent_tr_22_Template, 17, 9, "tr", 6);
        \u0275\u0275pipe(23, "async");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(24, MenuComponent_div_24_Template, 33, 9, "div", 7);
      }
      if (rf & 2) {
        \u0275\u0275advance(22);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(23, 2, ctx.platillos$));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.showModal);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, AsyncPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuComponent, [{
    type: Component,
    args: [{
      selector: "app-menu",
      standalone: true,
      imports: [CommonModule, FormsModule],
      template: `
    <div class="card">
      <div style="display:flex;justify-content:space-between;margin-bottom:15px;">
        <h3>Gestion del Menu</h3>
        <button class="btn btn-primary" (click)="nuevo()">+ Nuevo Platillo</button>
      </div>
      <div class="form-group" style="max-width:300px;">
        <input class="form-control" placeholder="Buscar platillo..." (input)="buscar($event)">
      </div>
      <table class="table">
        <thead>
          <tr><th>Nombre</th><th>Categoria</th><th>Precio</th><th>Estado</th><th>Acciones</th></tr>
        </thead>
        <tbody>
          <tr *ngFor="let p of platillos$ | async">
            <td>{{ p.nombre }}</td>
            <td>{{ p.categoriaNombre }}</td>
            <td>S/ {{ p.precio }}</td>
            <td><span [class.badge-success]="p.disponible" [class.badge-danger]="!p.disponible">{{ p.disponible ? 'Disponible' : 'No disponible' }}</span></td>
            <td>
              <button class="btn btn-warning btn-sm" (click)="editar(p)">Editar</button>
              <button class="btn btn-info btn-sm" (click)="toggleDisponible(p)">{{ p.disponible ? 'Deshab.' : 'Habilitar' }}</button>
              <button class="btn btn-danger btn-sm" (click)="eliminar(p.id!)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="modal-overlay" *ngIf="showModal">
      <div class="modal-content">
        <h3>{{ editMode ? 'Editar' : 'Nuevo' }} Platillo</h3>
        <form (ngSubmit)="guardar()">
          <div class="grid-2">
            <div class="form-group">
              <label>Nombre</label>
              <input class="form-control" [(ngModel)]="form.nombre" name="nombre" required>
            </div>
            <div class="form-group">
              <label>Precio</label>
              <input class="form-control" type="number" step="0.01" [(ngModel)]="form.precio" name="precio" required>
            </div>
            <div class="form-group">
              <label>Categoria</label>
              <select class="form-control" [(ngModel)]="form.categoriaId" name="categoriaId">
                <option *ngFor="let c of categorias$ | async" [value]="c.id">{{ c.nombre }}</option>
              </select>
            </div>
            <div class="form-group">
              <label>URL Imagen</label>
              <input class="form-control" [(ngModel)]="form.imagenUrl" name="imagenUrl">
            </div>
          </div>
          <div class="form-group">
            <label>Descripcion</label>
            <textarea class="form-control" [(ngModel)]="form.descripcion" name="descripcion"></textarea>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MenuComponent, { className: "MenuComponent", filePath: "src/app/modules/menu/menu.component.ts", lineNumber: 78 });
})();
export {
  MenuComponent
};
//# sourceMappingURL=chunk-VCFYI6BT.js.map
