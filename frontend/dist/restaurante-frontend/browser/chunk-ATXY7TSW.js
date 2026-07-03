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

// src/app/modules/inventario/inventario.component.ts
function InventarioComponent_tr_22_Template(rf, ctx) {
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
    \u0275\u0275elementStart(9, "td")(10, "span", 6);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "button", 7);
    \u0275\u0275listener("click", function InventarioComponent_tr_22_Template_button_click_13_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.movimiento(i_r2));
    });
    \u0275\u0275text(14, "Movimiento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 8);
    \u0275\u0275listener("click", function InventarioComponent_tr_22_Template_button_click_15_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editar(i_r2));
    });
    \u0275\u0275text(16, "Editar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 9);
    \u0275\u0275listener("click", function InventarioComponent_tr_22_Template_button_click_17_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.eliminar(i_r2.id));
    });
    \u0275\u0275text(18, "Eliminar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r2.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r2.stock);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r2.stockMinimo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r2.unidad);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-success", i_r2.stock > i_r2.stockMinimo)("badge-danger", i_r2.stock <= i_r2.stockMinimo);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", i_r2.stock > i_r2.stockMinimo ? "OK" : "Stock Bajo", " ");
  }
}
function InventarioComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 12);
    \u0275\u0275listener("ngSubmit", function InventarioComponent_div_24_Template_form_ngSubmit_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.guardar());
    });
    \u0275\u0275elementStart(5, "div", 13)(6, "div", 14)(7, "label");
    \u0275\u0275text(8, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function InventarioComponent_div_24_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.nombre, $event) || (ctx_r2.form.nombre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 14)(11, "label");
    \u0275\u0275text(12, "Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function InventarioComponent_div_24_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.stock, $event) || (ctx_r2.form.stock = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 14)(15, "label");
    \u0275\u0275text(16, "Stock Minimo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function InventarioComponent_div_24_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.stockMinimo, $event) || (ctx_r2.form.stockMinimo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 14)(19, "label");
    \u0275\u0275text(20, "Unidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "select", 18);
    \u0275\u0275twoWayListener("ngModelChange", function InventarioComponent_div_24_Template_select_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.unidad, $event) || (ctx_r2.form.unidad = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(22, "option", 19);
    \u0275\u0275text(23, "Unidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 20);
    \u0275\u0275text(25, "Kilogramo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 21);
    \u0275\u0275text(27, "Litro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 22);
    \u0275\u0275text(29, "Gramo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 23);
    \u0275\u0275text(31, "Mililitro");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 24)(33, "button", 25);
    \u0275\u0275text(34, "Guardar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 26);
    \u0275\u0275listener("click", function InventarioComponent_div_24_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancelar());
    });
    \u0275\u0275text(36, "Cancelar");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.editMode ? "Editar" : "Nuevo", " Ingrediente");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.nombre);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.stock);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.stockMinimo);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.unidad);
    \u0275\u0275control();
  }
}
function InventarioComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 12);
    \u0275\u0275listener("ngSubmit", function InventarioComponent_div_25_Template_form_ngSubmit_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.guardarMovimiento());
    });
    \u0275\u0275elementStart(5, "div", 13)(6, "div", 14)(7, "label");
    \u0275\u0275text(8, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "select", 27);
    \u0275\u0275twoWayListener("ngModelChange", function InventarioComponent_div_25_Template_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.movForm.tipo, $event) || (ctx_r2.movForm.tipo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(10, "option", 28);
    \u0275\u0275text(11, "Entrada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 29);
    \u0275\u0275text(13, "Salida");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 14)(15, "label");
    \u0275\u0275text(16, "Cantidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function InventarioComponent_div_25_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.movForm.cantidad, $event) || (ctx_r2.movForm.cantidad = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 14)(19, "label");
    \u0275\u0275text(20, "Observaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "textarea", 31);
    \u0275\u0275twoWayListener("ngModelChange", function InventarioComponent_div_25_Template_textarea_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.movForm.observaciones, $event) || (ctx_r2.movForm.observaciones = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 24)(23, "button", 25);
    \u0275\u0275text(24, "Registrar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 26);
    \u0275\u0275listener("click", function InventarioComponent_div_25_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showMovModal = false);
    });
    \u0275\u0275text(26, "Cancelar");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Registrar Movimiento - ", ctx_r2.selectedIngrediente?.nombre);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.movForm.tipo);
    \u0275\u0275control();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.movForm.cantidad);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.movForm.observaciones);
    \u0275\u0275control();
  }
}
var InventarioComponent = class _InventarioComponent {
  constructor(api) {
    this.api = api;
    this.ingredientes$ = new BehaviorSubject([]);
    this.showFormModal = false;
    this.editMode = false;
    this.showMovModal = false;
    this.form = {};
    this.movForm = {};
    this.load();
  }
  load() {
    this.api.getIngredientes().subscribe((d) => this.ingredientes$.next(d));
  }
  nuevo() {
    this.form = { stock: 0, stockMinimo: 0, unidad: "UNIDAD" };
    this.editMode = false;
    this.showFormModal = true;
  }
  editar(i) {
    this.form = __spreadValues({}, i);
    this.editMode = true;
    this.showFormModal = true;
  }
  guardar() {
    if (this.editMode) {
      this.api.updateIngrediente(this.form.id, this.form).subscribe(() => {
        this.load();
        this.showFormModal = false;
      });
    } else {
      this.api.createIngrediente(this.form).subscribe(() => {
        this.load();
        this.showFormModal = false;
      });
    }
  }
  movimiento(i) {
    this.selectedIngrediente = i;
    this.movForm = { ingredienteId: i.id, tipo: "ENTRADA", cantidad: 0 };
    this.showMovModal = true;
  }
  guardarMovimiento() {
    this.api.registrarMovimiento(this.movForm).subscribe(() => {
      this.load();
      this.showMovModal = false;
    });
  }
  cancelar() {
    this.showFormModal = false;
  }
  eliminar(id) {
    if (confirm("Eliminar ingrediente?"))
      this.api.deleteIngrediente(id).subscribe(() => this.load());
  }
  static {
    this.\u0275fac = function InventarioComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InventarioComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InventarioComponent, selectors: [["app-inventario"]], decls: 26, vars: 5, consts: [[1, "card"], [2, "display", "flex", "justify-content", "space-between", "margin-bottom", "15px"], [1, "btn", "btn-primary", 3, "click"], [1, "table"], [4, "ngFor", "ngForOf"], ["class", "modal-overlay", 4, "ngIf"], [1, "badge"], [1, "btn", "btn-info", "btn-sm", 3, "click"], [1, "btn", "btn-warning", "btn-sm", 3, "click"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "modal-overlay"], [1, "modal-content"], [3, "ngSubmit"], [1, "grid-2"], [1, "form-group"], ["name", "nombre", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "step", "0.1", "name", "stock", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "step", "0.1", "name", "stockMinimo", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "unidad", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "UNIDAD"], ["value", "KG"], ["value", "L"], ["value", "G"], ["value", "ML"], [1, "mt-3"], ["type", "submit", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["name", "tipo", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "ENTRADA"], ["value", "SALIDA"], ["type", "number", "step", "0.1", "name", "cantidad", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "observaciones", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function InventarioComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3");
        \u0275\u0275text(3, "Inventario de Ingredientes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 2);
        \u0275\u0275listener("click", function InventarioComponent_Template_button_click_4_listener() {
          return ctx.nuevo();
        });
        \u0275\u0275text(5, "+ Nuevo Ingrediente");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "table", 3)(7, "thead")(8, "tr")(9, "th");
        \u0275\u0275text(10, "Nombre");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "th");
        \u0275\u0275text(12, "Stock");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "th");
        \u0275\u0275text(14, "Stock Minimo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "th");
        \u0275\u0275text(16, "Unidad");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "th");
        \u0275\u0275text(18, "Estado");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "th");
        \u0275\u0275text(20, "Acciones");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "tbody");
        \u0275\u0275template(22, InventarioComponent_tr_22_Template, 19, 9, "tr", 4);
        \u0275\u0275pipe(23, "async");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(24, InventarioComponent_div_24_Template, 37, 5, "div", 5)(25, InventarioComponent_div_25_Template, 27, 4, "div", 5);
      }
      if (rf & 2) {
        \u0275\u0275advance(22);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(23, 3, ctx.ingredientes$));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.showFormModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showMovModal);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, AsyncPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InventarioComponent, [{
    type: Component,
    args: [{
      selector: "app-inventario",
      standalone: true,
      imports: [CommonModule, FormsModule],
      template: `
    <div class="card">
      <div style="display:flex;justify-content:space-between;margin-bottom:15px;">
        <h3>Inventario de Ingredientes</h3>
        <button class="btn btn-primary" (click)="nuevo()">+ Nuevo Ingrediente</button>
      </div>
      <table class="table">
        <thead>
          <tr><th>Nombre</th><th>Stock</th><th>Stock Minimo</th><th>Unidad</th><th>Estado</th><th>Acciones</th></tr>
        </thead>
        <tbody>
          <tr *ngFor="let i of ingredientes$ | async">
            <td>{{ i.nombre }}</td>
            <td>{{ i.stock }}</td>
            <td>{{ i.stockMinimo }}</td>
            <td>{{ i.unidad }}</td>
            <td>
              <span class="badge" [class.badge-success]="i.stock! > i.stockMinimo!" [class.badge-danger]="i.stock! <= i.stockMinimo!">
                {{ i.stock! > i.stockMinimo! ? 'OK' : 'Stock Bajo' }}
              </span>
            </td>
            <td>
              <button class="btn btn-info btn-sm" (click)="movimiento(i)">Movimiento</button>
              <button class="btn btn-warning btn-sm" (click)="editar(i)">Editar</button>
              <button class="btn btn-danger btn-sm" (click)="eliminar(i.id!)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="modal-overlay" *ngIf="showFormModal">
      <div class="modal-content">
        <h3>{{ editMode ? 'Editar' : 'Nuevo' }} Ingrediente</h3>
        <form (ngSubmit)="guardar()">
          <div class="grid-2">
            <div class="form-group">
              <label>Nombre</label>
              <input class="form-control" [(ngModel)]="form.nombre" name="nombre" required>
            </div>
            <div class="form-group">
              <label>Stock</label>
              <input class="form-control" type="number" step="0.1" [(ngModel)]="form.stock" name="stock">
            </div>
            <div class="form-group">
              <label>Stock Minimo</label>
              <input class="form-control" type="number" step="0.1" [(ngModel)]="form.stockMinimo" name="stockMinimo">
            </div>
            <div class="form-group">
              <label>Unidad</label>
              <select class="form-control" [(ngModel)]="form.unidad" name="unidad">
                <option value="UNIDAD">Unidad</option>
                <option value="KG">Kilogramo</option>
                <option value="L">Litro</option>
                <option value="G">Gramo</option>
                <option value="ML">Mililitro</option>
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

    <div class="modal-overlay" *ngIf="showMovModal">
      <div class="modal-content">
        <h3>Registrar Movimiento - {{ selectedIngrediente?.nombre }}</h3>
        <form (ngSubmit)="guardarMovimiento()">
          <div class="grid-2">
            <div class="form-group">
              <label>Tipo</label>
              <select class="form-control" [(ngModel)]="movForm.tipo" name="tipo">
                <option value="ENTRADA">Entrada</option>
                <option value="SALIDA">Salida</option>
              </select>
            </div>
            <div class="form-group">
              <label>Cantidad</label>
              <input class="form-control" type="number" step="0.1" [(ngModel)]="movForm.cantidad" name="cantidad" required>
            </div>
          </div>
          <div class="form-group">
            <label>Observaciones</label>
            <textarea class="form-control" [(ngModel)]="movForm.observaciones" name="observaciones"></textarea>
          </div>
          <div class="mt-3">
            <button type="submit" class="btn btn-success">Registrar</button>
            <button type="button" class="btn btn-secondary" (click)="showMovModal = false">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  `
    }]
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InventarioComponent, { className: "InventarioComponent", filePath: "src/app/modules/inventario/inventario.component.ts", lineNumber: 109 });
})();
export {
  InventarioComponent
};
//# sourceMappingURL=chunk-ATXY7TSW.js.map
