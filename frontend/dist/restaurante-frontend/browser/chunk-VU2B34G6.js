import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-MHBWVEJO.js";
import {
  ApiService
} from "./chunk-SGUWGNAX.js";
import {
  BehaviorSubject,
  CommonModule,
  Component,
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
  ɵɵproperty,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RANSCB4O.js";

// src/app/modules/configuracion/configuracion.component.ts
var ConfiguracionComponent = class _ConfiguracionComponent {
  constructor(api) {
    this.api = api;
    this.config$ = new BehaviorSubject({});
    this.config = {};
    this.api.getConfiguracion().subscribe((d) => {
      this.config = d;
      this.config$.next(d);
    });
  }
  guardar() {
    this.api.updateConfiguracion(this.config).subscribe(() => {
      alert("Configuracion guardada exitosamente");
    });
  }
  static {
    this.\u0275fac = function ConfiguracionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguracionComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfiguracionComponent, selectors: [["app-configuracion"]], decls: 52, vars: 5, consts: [[1, "card"], [1, "mb-3"], [3, "ngSubmit"], [1, "grid-2"], [1, "form-group"], ["name", "nombreRestaurante", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "moneda", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "PEN"], ["value", "USD"], ["type", "number", "step", "0.01", "name", "igv", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], ["name", "logoUrl", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "mt-3"], ["type", "submit", 1, "btn", "btn-success"], [1, "table"]], template: function ConfiguracionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2, "Configuracion del Restaurante");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "form", 2);
        \u0275\u0275listener("ngSubmit", function ConfiguracionComponent_Template_form_ngSubmit_3_listener() {
          return ctx.guardar();
        });
        \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "label");
        \u0275\u0275text(7, "Nombre del Restaurante");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "input", 5);
        \u0275\u0275twoWayListener("ngModelChange", function ConfiguracionComponent_Template_input_ngModelChange_8_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.config.nombreRestaurante, $event) || (ctx.config.nombreRestaurante = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 4)(10, "label");
        \u0275\u0275text(11, "Moneda");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "select", 6);
        \u0275\u0275twoWayListener("ngModelChange", function ConfiguracionComponent_Template_select_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.config.moneda, $event) || (ctx.config.moneda = $event);
          return $event;
        });
        \u0275\u0275elementStart(13, "option", 7);
        \u0275\u0275text(14, "Soles (PEN)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "option", 8);
        \u0275\u0275text(16, "Dolares (USD)");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 4)(18, "label");
        \u0275\u0275text(19, "IGV (%)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function ConfiguracionComponent_Template_input_ngModelChange_20_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.config.igv, $event) || (ctx.config.igv = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 4)(22, "label");
        \u0275\u0275text(23, "URL del Logo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function ConfiguracionComponent_Template_input_ngModelChange_24_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.config.logoUrl, $event) || (ctx.config.logoUrl = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 11)(26, "button", 12);
        \u0275\u0275text(27, "Guardar Configuracion");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(28, "div", 0)(29, "h3", 1);
        \u0275\u0275text(30, "Informacion del Sistema");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "table", 13)(32, "tr")(33, "th");
        \u0275\u0275text(34, "Version");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "td");
        \u0275\u0275text(36, "1.0.0");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "tr")(38, "th");
        \u0275\u0275text(39, "Backend");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "td");
        \u0275\u0275text(41, "Java 21 + Spring Boot 3.4");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "tr")(43, "th");
        \u0275\u0275text(44, "Frontend");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "td");
        \u0275\u0275text(46, "Angular 22");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "tr")(48, "th");
        \u0275\u0275text(49, "Base de Datos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "td");
        \u0275\u0275text(51, "MySQL 9.7");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.config.nombreRestaurante);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.config.moneda);
        \u0275\u0275control();
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.config.igv);
        \u0275\u0275property("disabled", true);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.config.logoUrl);
        \u0275\u0275control();
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguracionComponent, [{
    type: Component,
    args: [{
      selector: "app-configuracion",
      standalone: true,
      imports: [CommonModule, FormsModule],
      template: `
    <div class="card">
      <h3 class="mb-3">Configuracion del Restaurante</h3>
      <form (ngSubmit)="guardar()">
        <div class="grid-2">
          <div class="form-group">
            <label>Nombre del Restaurante</label>
            <input class="form-control" [(ngModel)]="config.nombreRestaurante" name="nombreRestaurante">
          </div>
          <div class="form-group">
            <label>Moneda</label>
            <select class="form-control" [(ngModel)]="config.moneda" name="moneda">
              <option value="PEN">Soles (PEN)</option>
              <option value="USD">Dolares (USD)</option>
            </select>
          </div>
          <div class="form-group">
            <label>IGV (%)</label>
            <input class="form-control" type="number" step="0.01" [(ngModel)]="config.igv" name="igv" [disabled]="true">
          </div>
          <div class="form-group">
            <label>URL del Logo</label>
            <input class="form-control" [(ngModel)]="config.logoUrl" name="logoUrl">
          </div>
        </div>
        <div class="mt-3">
          <button type="submit" class="btn btn-success">Guardar Configuracion</button>
        </div>
      </form>
    </div>
    <div class="card">
      <h3 class="mb-3">Informacion del Sistema</h3>
      <table class="table">
        <tr><th>Version</th><td>1.0.0</td></tr>
        <tr><th>Backend</th><td>Java 21 + Spring Boot 3.4</td></tr>
        <tr><th>Frontend</th><td>Angular 22</td></tr>
        <tr><th>Base de Datos</th><td>MySQL 9.7</td></tr>
      </table>
    </div>
  `
    }]
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfiguracionComponent, { className: "ConfiguracionComponent", filePath: "src/app/modules/configuracion/configuracion.component.ts", lineNumber: 52 });
})();
export {
  ConfiguracionComponent
};
//# sourceMappingURL=chunk-VU2B34G6.js.map
