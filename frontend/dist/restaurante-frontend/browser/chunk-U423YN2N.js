import {
  AuthService
} from "./chunk-F7PSWAKR.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
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
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  Component,
  DatePipe,
  NgForOf,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
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

// src/app/modules/pedidos/pedidos.component.ts
function PedidosComponent_tr_35_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function PedidosComponent_tr_35_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const p_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cambiarEstado(p_r2, "EN_PREPARACION"));
    });
    \u0275\u0275text(1, "A Cocina");
    \u0275\u0275elementEnd();
  }
}
function PedidosComponent_tr_35_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function PedidosComponent_tr_35_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const p_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cambiarEstado(p_r2, "CANCELADO"));
    });
    \u0275\u0275text(1, "Cancelar");
    \u0275\u0275elementEnd();
  }
}
function PedidosComponent_tr_35_Template(rf, ctx) {
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
    \u0275\u0275elementStart(9, "td")(10, "span", 8);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "button", 9);
    \u0275\u0275listener("click", function PedidosComponent_tr_35_Template_button_click_16_listener() {
      const p_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.verDetalle(p_r2));
    });
    \u0275\u0275text(17, "Detalle");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, PedidosComponent_tr_35_button_18_Template, 2, 0, "button", 10)(19, PedidosComponent_tr_35_button_19_Template, 2, 0, "button", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.numeroMesa || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.clienteNombre || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("S/ ", p_r2.total);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-warning", p_r2.estado === "PENDIENTE")("badge-info", p_r2.estado === "EN_PREPARACION")("badge-success", p_r2.estado === "LISTO")("badge-secondary", p_r2.estado === "ENTREGADO")("badge-danger", p_r2.estado === "CANCELADO");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r2.estado);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 18, p_r2.fecha, "short"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", p_r2.estado === "PENDIENTE");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r2.estado !== "ENTREGADO" && p_r2.estado !== "CANCELADO");
  }
}
function PedidosComponent_div_37_tr_40_Template(rf, ctx) {
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
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r7.platilloNombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r7.cantidad);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("S/ ", d_r7.precioUnitario);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("S/ ", (d_r7.cantidad || 0) * (d_r7.precioUnitario || 0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r7.observaciones || "-");
  }
}
function PedidosComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p")(5, "strong");
    \u0275\u0275text(6, "Mesa:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p")(9, "strong");
    \u0275\u0275text(10, "Cliente:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p")(13, "strong");
    \u0275\u0275text(14, "Estado:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p")(17, "strong");
    \u0275\u0275text(18, "Total:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p")(21, "strong");
    \u0275\u0275text(22, "Observaciones:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "h4", 16);
    \u0275\u0275text(25, "Platillos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "table", 5)(27, "thead")(28, "tr")(29, "th");
    \u0275\u0275text(30, "Platillo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "th");
    \u0275\u0275text(32, "Cantidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "th");
    \u0275\u0275text(34, "Precio Unit.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th");
    \u0275\u0275text(36, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th");
    \u0275\u0275text(38, "Obs.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "tbody");
    \u0275\u0275template(40, PedidosComponent_div_37_tr_40_Template, 11, 5, "tr", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "button", 17);
    \u0275\u0275listener("click", function PedidosComponent_div_37_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showDetalleModal = false);
    });
    \u0275\u0275text(42, "Cerrar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Detalle del Pedido #", ctx_r2.detalleSeleccionado?.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.detalleSeleccionado?.numeroMesa || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.detalleSeleccionado?.clienteNombre || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.detalleSeleccionado?.estado);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" S/ ", ctx_r2.detalleSeleccionado?.total);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.detalleSeleccionado?.observaciones || "-");
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r2.detalleSeleccionado?.detalles);
  }
}
function PedidosComponent_div_38_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r9 = ctx.$implicit;
    \u0275\u0275property("value", m_r9.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("Mesa ", m_r9.numeroMesa, " (", m_r9.capacidad, " pers)");
  }
}
function PedidosComponent_div_38_option_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r10 = ctx.$implicit;
    \u0275\u0275property("value", c_r10.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r10.nombre);
  }
}
function PedidosComponent_div_38_tr_41_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pl_r13 = ctx.$implicit;
    \u0275\u0275property("value", pl_r13.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", pl_r13.nombre, " - S/ ", pl_r13.precio);
  }
}
function PedidosComponent_div_38_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "select", 30);
    \u0275\u0275twoWayListener("ngModelChange", function PedidosComponent_div_38_tr_41_Template_select_ngModelChange_2_listener($event) {
      const d_r12 = \u0275\u0275restoreView(_r11).$implicit;
      \u0275\u0275twoWayBindingSet(d_r12.platilloId, $event) || (d_r12.platilloId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function PedidosComponent_div_38_tr_41_Template_select_change_2_listener() {
      const d_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.actualizarPrecio(d_r12));
    });
    \u0275\u0275template(3, PedidosComponent_div_38_tr_41_option_3_Template, 2, 3, "option", 23);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function PedidosComponent_div_38_tr_41_Template_input_ngModelChange_6_listener($event) {
      const d_r12 = \u0275\u0275restoreView(_r11).$implicit;
      \u0275\u0275twoWayBindingSet(d_r12.cantidad, $event) || (d_r12.cantidad = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function PedidosComponent_div_38_tr_41_Template_input_ngModelChange_10_listener($event) {
      const d_r12 = \u0275\u0275restoreView(_r11).$implicit;
      \u0275\u0275twoWayBindingSet(d_r12.observaciones, $event) || (d_r12.observaciones = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "button", 13);
    \u0275\u0275listener("click", function PedidosComponent_div_38_tr_41_Template_button_click_12_listener() {
      const i_r14 = \u0275\u0275restoreView(_r11).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.eliminarDetalle(i_r14));
    });
    \u0275\u0275text(13, "X");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const d_r12 = ctx.$implicit;
    const i_r14 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", d_r12.platilloId);
    \u0275\u0275property("name", "platillo" + i_r14);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(4, 8, ctx_r2.platillosDisp$));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", d_r12.cantidad);
    \u0275\u0275property("name", "cant" + i_r14);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("S/ ", d_r12.precioUnitario || 0);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", d_r12.observaciones);
    \u0275\u0275property("name", "obs" + i_r14);
    \u0275\u0275control();
  }
}
function PedidosComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "h3");
    \u0275\u0275text(3, "Nuevo Pedido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 18);
    \u0275\u0275listener("ngSubmit", function PedidosComponent_div_38_Template_form_ngSubmit_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.guardar());
    });
    \u0275\u0275elementStart(5, "div", 19)(6, "div", 20)(7, "label");
    \u0275\u0275text(8, "Mesa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "select", 21);
    \u0275\u0275twoWayListener("ngModelChange", function PedidosComponent_div_38_Template_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.mesaId, $event) || (ctx_r2.form.mesaId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(10, "option", 22);
    \u0275\u0275text(11, "Sin mesa");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, PedidosComponent_div_38_option_12_Template, 2, 3, "option", 23);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 20)(15, "label");
    \u0275\u0275text(16, "Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 24);
    \u0275\u0275twoWayListener("ngModelChange", function PedidosComponent_div_38_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.clienteId, $event) || (ctx_r2.form.clienteId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(18, "option", 22);
    \u0275\u0275text(19, "Sin cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, PedidosComponent_div_38_option_20_Template, 2, 2, "option", 23);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 20)(23, "label");
    \u0275\u0275text(24, "Observaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "textarea", 25);
    \u0275\u0275twoWayListener("ngModelChange", function PedidosComponent_div_38_Template_textarea_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.observaciones, $event) || (ctx_r2.form.observaciones = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "h4", 16);
    \u0275\u0275text(27, "Detalle del Pedido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "table", 5)(29, "thead")(30, "tr")(31, "th");
    \u0275\u0275text(32, "Platillo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "th");
    \u0275\u0275text(34, "Cantidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th");
    \u0275\u0275text(36, "Precio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th");
    \u0275\u0275text(38, "Obs.");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "tbody");
    \u0275\u0275template(41, PedidosComponent_div_38_tr_41_Template, 14, 10, "tr", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "button", 26);
    \u0275\u0275listener("click", function PedidosComponent_div_38_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.agregarDetalle());
    });
    \u0275\u0275text(43, "+ Agregar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 16)(45, "button", 27);
    \u0275\u0275text(46, "Crear Pedido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "button", 28);
    \u0275\u0275listener("click", function PedidosComponent_div_38_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancelar());
    });
    \u0275\u0275text(48, "Cancelar");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.mesaId);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(13, 6, ctx_r2.mesasDisponibles$));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.clienteId);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(21, 8, ctx_r2.clientes$));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.observaciones);
    \u0275\u0275control();
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r2.form.detalles);
  }
}
var PedidosComponent = class _PedidosComponent {
  constructor(api, auth) {
    this.api = api;
    this.auth = auth;
    this.pedidos$ = new BehaviorSubject([]);
    this.platillosDisp$ = new BehaviorSubject([]);
    this.mesasDisponibles$ = new BehaviorSubject([]);
    this.clientes$ = new BehaviorSubject([]);
    this.showForm = false;
    this.showDetalleModal = false;
    this.detalleSeleccionado = null;
    this.filtro = "";
    this.form = { detalles: [], usuarioId: this.auth.getUser()?.id };
    this.load();
    this.api.getPlatillosDisponibles().subscribe((d) => this.platillosDisp$.next(d));
    this.api.getMesas().subscribe((d) => this.mesasDisponibles$.next(d.filter((m) => m.estado === "LIBRE")));
    this.api.getClientes().subscribe((d) => this.clientes$.next(d));
  }
  load() {
    if (this.filtro) {
      this.api.getPedidosPorEstado(this.filtro).subscribe((d) => this.pedidos$.next(d));
    } else {
      this.api.getPedidos().subscribe((d) => this.pedidos$.next(d));
    }
  }
  filtrar(estado) {
    this.filtro = estado;
    this.load();
  }
  nuevo() {
    this.form = { detalles: [], usuarioId: this.auth.getUser()?.id };
    this.showForm = true;
  }
  agregarDetalle() {
    this.form.detalles.push({ platilloId: null, cantidad: 1, precioUnitario: 0 });
  }
  eliminarDetalle(i) {
    this.form.detalles.splice(i, 1);
  }
  actualizarPrecio(d) {
    const existente = this.form.detalles.find((det) => det !== d && +det.platilloId === +d.platilloId);
    if (existente) {
      existente.cantidad = (existente.cantidad || 0) + 1;
      const idx = this.form.detalles.indexOf(d);
      this.form.detalles.splice(idx, 1);
      return;
    }
    const platillo = this.platillosDisp$.value.find((p) => p.id === +d.platilloId);
    d.precioUnitario = platillo ? platillo.precio : 0;
  }
  guardar() {
    this.api.createPedido(this.form).subscribe(() => {
      this.load();
      this.showForm = false;
    });
  }
  cancelar() {
    this.showForm = false;
  }
  cambiarEstado(p, estado) {
    this.api.changePedidoEstado(p.id, estado).subscribe(() => this.load());
  }
  verDetalle(p) {
    this.detalleSeleccionado = p;
    this.showDetalleModal = true;
  }
  static {
    this.\u0275fac = function PedidosComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PedidosComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PedidosComponent, selectors: [["app-pedidos"]], decls: 39, vars: 15, consts: [[1, "card"], [2, "display", "flex", "justify-content", "space-between", "margin-bottom", "15px"], [1, "btn", "btn-primary", 3, "click"], [1, "mb-3"], [1, "btn", "btn-sm", 3, "click"], [1, "table"], [4, "ngFor", "ngForOf"], ["class", "modal-overlay", 4, "ngIf"], [1, "badge"], [1, "btn", "btn-info", "btn-sm", 3, "click"], ["class", "btn btn-warning btn-sm", 3, "click", 4, "ngIf"], ["class", "btn btn-danger btn-sm", 3, "click", 4, "ngIf"], [1, "btn", "btn-warning", "btn-sm", 3, "click"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "modal-overlay"], [1, "modal-content"], [1, "mt-3"], [1, "btn", "btn-secondary", 3, "click"], [3, "ngSubmit"], [1, "grid-2"], [1, "form-group"], ["name", "mesaId", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["name", "clienteId", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "observaciones", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["type", "submit", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [3, "value"], [1, "form-control", 3, "ngModelChange", "change", "ngModel", "name"], ["type", "number", "min", "1", 1, "form-control", 3, "ngModelChange", "ngModel", "name"], [1, "form-control", 3, "ngModelChange", "ngModel", "name"]], template: function PedidosComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3");
        \u0275\u0275text(3, "Gestion de Pedidos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 2);
        \u0275\u0275listener("click", function PedidosComponent_Template_button_click_4_listener() {
          return ctx.nuevo();
        });
        \u0275\u0275text(5, "+ Nuevo Pedido");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 3)(7, "button", 4);
        \u0275\u0275listener("click", function PedidosComponent_Template_button_click_7_listener() {
          return ctx.filtrar("");
        });
        \u0275\u0275text(8, "Todos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "button", 4);
        \u0275\u0275listener("click", function PedidosComponent_Template_button_click_9_listener() {
          return ctx.filtrar("PENDIENTE");
        });
        \u0275\u0275text(10, "Pendientes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 4);
        \u0275\u0275listener("click", function PedidosComponent_Template_button_click_11_listener() {
          return ctx.filtrar("EN_PREPARACION");
        });
        \u0275\u0275text(12, "En Preparacion");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "button", 4);
        \u0275\u0275listener("click", function PedidosComponent_Template_button_click_13_listener() {
          return ctx.filtrar("LISTO");
        });
        \u0275\u0275text(14, "Listos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 4);
        \u0275\u0275listener("click", function PedidosComponent_Template_button_click_15_listener() {
          return ctx.filtrar("ENTREGADO");
        });
        \u0275\u0275text(16, "Entregados");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "table", 5)(18, "thead")(19, "tr")(20, "th");
        \u0275\u0275text(21, "ID");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "th");
        \u0275\u0275text(23, "Mesa");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "th");
        \u0275\u0275text(25, "Cliente");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "th");
        \u0275\u0275text(27, "Total");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "th");
        \u0275\u0275text(29, "Estado");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "th");
        \u0275\u0275text(31, "Fecha");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "th");
        \u0275\u0275text(33, "Acciones");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "tbody");
        \u0275\u0275template(35, PedidosComponent_tr_35_Template, 20, 21, "tr", 6);
        \u0275\u0275pipe(36, "async");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(37, PedidosComponent_div_37_Template, 43, 7, "div", 7)(38, PedidosComponent_div_38_Template, 49, 10, "div", 7);
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275classProp("btn-primary", ctx.filtro === "");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("btn-primary", ctx.filtro === "PENDIENTE");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("btn-primary", ctx.filtro === "EN_PREPARACION");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("btn-primary", ctx.filtro === "LISTO");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("btn-primary", ctx.filtro === "ENTREGADO");
        \u0275\u0275advance(20);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(36, 13, ctx.pedidos$));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.showDetalleModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showForm);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, NgModel, NgForm, AsyncPipe, DatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PedidosComponent, [{
    type: Component,
    args: [{
      selector: "app-pedidos",
      standalone: true,
      imports: [CommonModule, FormsModule],
      template: `
    <div class="card">
      <div style="display:flex;justify-content:space-between;margin-bottom:15px;">
        <h3>Gestion de Pedidos</h3>
        <button class="btn btn-primary" (click)="nuevo()">+ Nuevo Pedido</button>
      </div>
      <div class="mb-3">
        <button class="btn btn-sm" [class.btn-primary]="filtro===''" (click)="filtrar('')">Todos</button>
        <button class="btn btn-sm" [class.btn-primary]="filtro==='PENDIENTE'" (click)="filtrar('PENDIENTE')">Pendientes</button>
        <button class="btn btn-sm" [class.btn-primary]="filtro==='EN_PREPARACION'" (click)="filtrar('EN_PREPARACION')">En Preparacion</button>
        <button class="btn btn-sm" [class.btn-primary]="filtro==='LISTO'" (click)="filtrar('LISTO')">Listos</button>
        <button class="btn btn-sm" [class.btn-primary]="filtro==='ENTREGADO'" (click)="filtrar('ENTREGADO')">Entregados</button>
      </div>
      <table class="table">
        <thead>
          <tr><th>ID</th><th>Mesa</th><th>Cliente</th><th>Total</th><th>Estado</th><th>Fecha</th><th>Acciones</th></tr>
        </thead>
        <tbody>
          <tr *ngFor="let p of pedidos$ | async">
            <td>{{ p.id }}</td>
            <td>{{ p.numeroMesa || '-' }}</td>
            <td>{{ p.clienteNombre || '-' }}</td>
            <td>S/ {{ p.total }}</td>
            <td><span class="badge" [class.badge-warning]="p.estado==='PENDIENTE'" [class.badge-info]="p.estado==='EN_PREPARACION'"
                      [class.badge-success]="p.estado==='LISTO'" [class.badge-secondary]="p.estado==='ENTREGADO'"
                      [class.badge-danger]="p.estado==='CANCELADO'">{{ p.estado }}</span></td>
            <td>{{ p.fecha | date:'short' }}</td>
            <td>
              <button class="btn btn-info btn-sm" (click)="verDetalle(p)">Detalle</button>
              <button class="btn btn-warning btn-sm" *ngIf="p.estado==='PENDIENTE'" (click)="cambiarEstado(p, 'EN_PREPARACION')">A Cocina</button>
              <button class="btn btn-danger btn-sm" *ngIf="p.estado!=='ENTREGADO' && p.estado!=='CANCELADO'" (click)="cambiarEstado(p, 'CANCELADO')">Cancelar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="modal-overlay" *ngIf="showDetalleModal">
      <div class="modal-content">
        <h3>Detalle del Pedido #{{ detalleSeleccionado?.id }}</h3>
        <p><strong>Mesa:</strong> {{ detalleSeleccionado?.numeroMesa || '-' }}</p>
        <p><strong>Cliente:</strong> {{ detalleSeleccionado?.clienteNombre || '-' }}</p>
        <p><strong>Estado:</strong> {{ detalleSeleccionado?.estado }}</p>
        <p><strong>Total:</strong> S/ {{ detalleSeleccionado?.total }}</p>
        <p><strong>Observaciones:</strong> {{ detalleSeleccionado?.observaciones || '-' }}</p>
        <h4 class="mt-3">Platillos</h4>
        <table class="table">
          <thead><tr><th>Platillo</th><th>Cantidad</th><th>Precio Unit.</th><th>Subtotal</th><th>Obs.</th></tr></thead>
          <tbody>
            <tr *ngFor="let d of detalleSeleccionado?.detalles">
              <td>{{ d.platilloNombre }}</td>
              <td>{{ d.cantidad }}</td>
              <td>S/ {{ d.precioUnitario }}</td>
              <td>S/ {{ (d.cantidad || 0) * (d.precioUnitario || 0) }}</td>
              <td>{{ d.observaciones || '-' }}</td>
            </tr>
          </tbody>
        </table>
        <button class="btn btn-secondary" (click)="showDetalleModal = false">Cerrar</button>
      </div>
    </div>

    <div class="modal-overlay" *ngIf="showForm">
      <div class="modal-content">
        <h3>Nuevo Pedido</h3>
        <form (ngSubmit)="guardar()">
          <div class="grid-2">
            <div class="form-group">
              <label>Mesa</label>
              <select class="form-control" [(ngModel)]="form.mesaId" name="mesaId">
                <option value="">Sin mesa</option>
                <option *ngFor="let m of mesasDisponibles$ | async" [value]="m.id">Mesa {{ m.numeroMesa }} ({{ m.capacidad }} pers)</option>
              </select>
            </div>
            <div class="form-group">
              <label>Cliente</label>
              <select class="form-control" [(ngModel)]="form.clienteId" name="clienteId">
                <option value="">Sin cliente</option>
                <option *ngFor="let c of clientes$ | async" [value]="c.id">{{ c.nombre }}</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label>Observaciones</label>
            <textarea class="form-control" [(ngModel)]="form.observaciones" name="observaciones"></textarea>
          </div>
          <h4 class="mt-3">Detalle del Pedido</h4>
          <table class="table">
            <thead>
              <tr><th>Platillo</th><th>Cantidad</th><th>Precio</th><th>Obs.</th><th></th></tr>
            </thead>
            <tbody>
              <tr *ngFor="let d of form.detalles; let i = index">
                <td>
                  <select class="form-control" [(ngModel)]="d.platilloId" [name]="'platillo'+i" (change)="actualizarPrecio(d)">
                    <option *ngFor="let pl of platillosDisp$ | async" [value]="pl.id">{{ pl.nombre }} - S/ {{ pl.precio }}</option>
                  </select>
                </td>
                <td><input class="form-control" type="number" min="1" [(ngModel)]="d.cantidad" [name]="'cant'+i"></td>
                <td>S/ {{ d.precioUnitario || 0 }}</td>
                <td><input class="form-control" [(ngModel)]="d.observaciones" [name]="'obs'+i"></td>
                <td><button class="btn btn-danger btn-sm" (click)="eliminarDetalle(i)">X</button></td>
              </tr>
            </tbody>
          </table>
          <button type="button" class="btn btn-info btn-sm" (click)="agregarDetalle()">+ Agregar</button>
          <div class="mt-3">
            <button type="submit" class="btn btn-success">Crear Pedido</button>
            <button type="button" class="btn btn-secondary" (click)="cancelar()">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  `
    }]
  }], () => [{ type: ApiService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PedidosComponent, { className: "PedidosComponent", filePath: "src/app/modules/pedidos/pedidos.component.ts", lineNumber: 128 });
})();
export {
  PedidosComponent
};
//# sourceMappingURL=chunk-U423YN2N.js.map
