import {
  AuthService,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-F7PSWAKR.js";
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
  CommonModule,
  Component,
  NgIf,
  catchError,
  inject,
  provideHttpClient,
  provideZoneChangeDetection,
  setClassMetadata,
  throwError,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RANSCB4O.js";

// src/app/core/auth/login.component.ts
function LoginComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
var LoginComponent = class _LoginComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.username = "";
    this.password = "";
    this.error = "";
    this.loading = false;
  }
  onSubmit() {
    this.loading = true;
    this.error = "";
    this.authService.login({ username: this.username, password: this.password }).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(["/dashboard"]);
      },
      error: (err) => {
        this.loading = false;
        this.error = "Credenciales invalidas";
      }
    });
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 16, vars: 5, consts: [[1, "login-container"], [1, "login-card"], ["class", "alert alert-error", 4, "ngIf"], [3, "ngSubmit"], [1, "form-group"], ["type", "text", "name", "username", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "password", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "alert", "alert-error"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
        \u0275\u0275text(3, "Iniciar Sesion");
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, LoginComponent_div_4_Template, 2, 1, "div", 2);
        \u0275\u0275elementStart(5, "form", 3);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(6, "div", 4)(7, "label");
        \u0275\u0275text(8, "Usuario");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "input", 5);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_9_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.username, $event) || (ctx.username = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 4)(11, "label");
        \u0275\u0275text(12, "Contrasena");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "button", 7);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.error);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.username);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.password);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading ? "Ingresando..." : "Ingresar", " ");
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{
      selector: "app-login",
      standalone: true,
      imports: [CommonModule, FormsModule],
      template: `
    <div class="login-container">
      <div class="login-card">
        <h2>Iniciar Sesion</h2>
        <div *ngIf="error" class="alert alert-error">{{ error }}</div>
        <form (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label>Usuario</label>
            <input type="text" class="form-control" [(ngModel)]="username" name="username" required>
          </div>
          <div class="form-group">
            <label>Contrasena</label>
            <input type="password" class="form-control" [(ngModel)]="password" name="password" required>
          </div>
          <button type="submit" class="btn btn-primary" [disabled]="loading">
            {{ loading ? 'Ingresando...' : 'Ingresar' }}
          </button>
        </form>
      </div>
    </div>
  `
    }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/core/auth/login.component.ts", lineNumber: 33 });
})();

// src/app/core/guards/auth.guard.ts
var authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isAuthenticated()) {
    return true;
  }
  router.navigate(["/login"]);
  return false;
};

// src/app/app.routes.ts
var routes = [
  { path: "login", component: LoginComponent },
  { path: "dashboard", loadComponent: () => import("./chunk-E6UELL5H.js").then((m) => m.DashboardComponent), canActivate: [authGuard] },
  { path: "usuarios", loadComponent: () => import("./chunk-UY2OPRJE.js").then((m) => m.UsuariosComponent), canActivate: [authGuard] },
  { path: "menu", loadComponent: () => import("./chunk-VCFYI6BT.js").then((m) => m.MenuComponent), canActivate: [authGuard] },
  { path: "mesas", loadComponent: () => import("./chunk-2VHYJGBL.js").then((m) => m.MesasComponent), canActivate: [authGuard] },
  { path: "clientes", loadComponent: () => import("./chunk-STLAQKXD.js").then((m) => m.ClientesComponent), canActivate: [authGuard] },
  { path: "pedidos", loadComponent: () => import("./chunk-U423YN2N.js").then((m) => m.PedidosComponent), canActivate: [authGuard] },
  { path: "cocina", loadComponent: () => import("./chunk-BCZAWRCE.js").then((m) => m.CocinaComponent), canActivate: [authGuard] },
  { path: "facturacion", loadComponent: () => import("./chunk-PUPQR4H7.js").then((m) => m.FacturacionComponent), canActivate: [authGuard] },
  { path: "inventario", loadComponent: () => import("./chunk-ATXY7TSW.js").then((m) => m.InventarioComponent), canActivate: [authGuard] },
  { path: "proveedores", loadComponent: () => import("./chunk-RUF6DVRS.js").then((m) => m.ProveedoresComponent), canActivate: [authGuard] },
  { path: "reportes", loadComponent: () => import("./chunk-TUDHABKD.js").then((m) => m.ReportesComponent), canActivate: [authGuard] },
  { path: "configuracion", loadComponent: () => import("./chunk-VU2B34G6.js").then((m) => m.ConfiguracionComponent), canActivate: [authGuard] },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "**", redirectTo: "/dashboard" }
];

// src/app/core/interceptors/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const token = authService.getToken();
  if (token) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }
  return next(req).pipe(catchError((error) => {
    if (error.status === 401) {
      authService.logout();
      router.navigate(["/login"]);
    }
    return throwError(() => error);
  }));
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: false }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};

// src/app/app.component.ts
function AppComponent_ng_container_0_a_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 20);
    \u0275\u0275text(1, "Usuarios");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_ng_container_0_a_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 21);
    \u0275\u0275text(1, "Menu");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_ng_container_0_a_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 22);
    \u0275\u0275text(1, "Mesas");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_ng_container_0_a_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 23);
    \u0275\u0275text(1, "Clientes");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_ng_container_0_a_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 24);
    \u0275\u0275text(1, "Pedidos");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_ng_container_0_a_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 25);
    \u0275\u0275text(1, "Cocina");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_ng_container_0_a_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 26);
    \u0275\u0275text(1, "Facturacion");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_ng_container_0_a_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 27);
    \u0275\u0275text(1, "Inventario");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_ng_container_0_a_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 28);
    \u0275\u0275text(1, "Proveedores");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_ng_container_0_a_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 29);
    \u0275\u0275text(1, "Reportes");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_ng_container_0_a_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 30);
    \u0275\u0275text(1, "Configuracion");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "h2");
    \u0275\u0275text(4, "Sistema Restaurante");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "nav", 4)(6, "a", 5);
    \u0275\u0275text(7, "Dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, AppComponent_ng_container_0_a_8_Template, 2, 0, "a", 6)(9, AppComponent_ng_container_0_a_9_Template, 2, 0, "a", 7)(10, AppComponent_ng_container_0_a_10_Template, 2, 0, "a", 8)(11, AppComponent_ng_container_0_a_11_Template, 2, 0, "a", 9)(12, AppComponent_ng_container_0_a_12_Template, 2, 0, "a", 10)(13, AppComponent_ng_container_0_a_13_Template, 2, 0, "a", 11)(14, AppComponent_ng_container_0_a_14_Template, 2, 0, "a", 12)(15, AppComponent_ng_container_0_a_15_Template, 2, 0, "a", 13)(16, AppComponent_ng_container_0_a_16_Template, 2, 0, "a", 14)(17, AppComponent_ng_container_0_a_17_Template, 2, 0, "a", 15)(18, AppComponent_ng_container_0_a_18_Template, 2, 0, "a", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 17)(20, "div", 18)(21, "h3");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div")(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 19);
    \u0275\u0275listener("click", function AppComponent_ng_container_0_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(27, "Cerrar Sesion");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(28, "router-outlet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.rol === "ADMINISTRADOR");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.rol === "ADMINISTRADOR" || ctx_r1.rol === "MESERO");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.rol === "ADMINISTRADOR" || ctx_r1.rol === "MESERO");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.rol === "ADMINISTRADOR" || ctx_r1.rol === "MESERO");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.rol === "ADMINISTRADOR" || ctx_r1.rol === "MESERO" || ctx_r1.rol === "CAJERO");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.rol === "ADMINISTRADOR" || ctx_r1.rol === "COCINERO");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.rol === "ADMINISTRADOR" || ctx_r1.rol === "CAJERO");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.rol === "ADMINISTRADOR");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.rol === "ADMINISTRADOR");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.rol === "ADMINISTRADOR" || ctx_r1.rol === "CAJERO");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.rol === "ADMINISTRADOR");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getTitle());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("", ctx_r1.authService.getUser()?.nombre, " ", ctx_r1.authService.getUser()?.apellido, " (", ctx_r1.rol, ")");
  }
}
function AppComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}
var AppComponent = class _AppComponent {
  get rol() {
    return this.authService.getUser()?.rol || "";
  }
  constructor(authService) {
    this.authService = authService;
  }
  getTitle() {
    return "Sistema de Gestion de Restaurante";
  }
  logout() {
    this.authService.logout();
  }
  static {
    this.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppComponent)(\u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 3, vars: 2, consts: [["loginPage", ""], [4, "ngIf", "ngIfElse"], [1, "sidebar"], [1, "sidebar-header"], [1, "sidebar-nav"], ["routerLink", "/dashboard", "routerLinkActive", "active"], ["routerLink", "/usuarios", "routerLinkActive", "active", 4, "ngIf"], ["routerLink", "/menu", "routerLinkActive", "active", 4, "ngIf"], ["routerLink", "/mesas", "routerLinkActive", "active", 4, "ngIf"], ["routerLink", "/clientes", "routerLinkActive", "active", 4, "ngIf"], ["routerLink", "/pedidos", "routerLinkActive", "active", 4, "ngIf"], ["routerLink", "/cocina", "routerLinkActive", "active", 4, "ngIf"], ["routerLink", "/facturacion", "routerLinkActive", "active", 4, "ngIf"], ["routerLink", "/inventario", "routerLinkActive", "active", 4, "ngIf"], ["routerLink", "/proveedores", "routerLinkActive", "active", 4, "ngIf"], ["routerLink", "/reportes", "routerLinkActive", "active", 4, "ngIf"], ["routerLink", "/configuracion", "routerLinkActive", "active", 4, "ngIf"], [1, "main-content"], [1, "header"], [1, "btn", "btn-danger", 2, "margin-left", "10px", 3, "click"], ["routerLink", "/usuarios", "routerLinkActive", "active"], ["routerLink", "/menu", "routerLinkActive", "active"], ["routerLink", "/mesas", "routerLinkActive", "active"], ["routerLink", "/clientes", "routerLinkActive", "active"], ["routerLink", "/pedidos", "routerLinkActive", "active"], ["routerLink", "/cocina", "routerLinkActive", "active"], ["routerLink", "/facturacion", "routerLinkActive", "active"], ["routerLink", "/inventario", "routerLinkActive", "active"], ["routerLink", "/proveedores", "routerLinkActive", "active"], ["routerLink", "/reportes", "routerLinkActive", "active"], ["routerLink", "/configuracion", "routerLinkActive", "active"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AppComponent_ng_container_0_Template, 29, 15, "ng-container", 1)(1, AppComponent_ng_template_1_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const loginPage_r3 = \u0275\u0275reference(2);
        \u0275\u0275property("ngIf", ctx.authService.isAuthenticated())("ngIfElse", loginPage_r3);
      }
    }, dependencies: [CommonModule, NgIf, RouterOutlet, RouterLink, RouterLinkActive], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{
      selector: "app-root",
      standalone: true,
      imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
      template: `
    <ng-container *ngIf="authService.isAuthenticated(); else loginPage">
      <div class="sidebar">
        <div class="sidebar-header">
          <h2>Sistema Restaurante</h2>
        </div>
        <nav class="sidebar-nav">
          <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
          <a routerLink="/usuarios" routerLinkActive="active" *ngIf="rol === 'ADMINISTRADOR'">Usuarios</a>
          <a routerLink="/menu" routerLinkActive="active" *ngIf="rol === 'ADMINISTRADOR' || rol === 'MESERO'">Menu</a>
          <a routerLink="/mesas" routerLinkActive="active" *ngIf="rol === 'ADMINISTRADOR' || rol === 'MESERO'">Mesas</a>
          <a routerLink="/clientes" routerLinkActive="active" *ngIf="rol === 'ADMINISTRADOR' || rol === 'MESERO'">Clientes</a>
          <a routerLink="/pedidos" routerLinkActive="active" *ngIf="rol === 'ADMINISTRADOR' || rol === 'MESERO' || rol === 'CAJERO'">Pedidos</a>
          <a routerLink="/cocina" routerLinkActive="active" *ngIf="rol === 'ADMINISTRADOR' || rol === 'COCINERO'">Cocina</a>
          <a routerLink="/facturacion" routerLinkActive="active" *ngIf="rol === 'ADMINISTRADOR' || rol === 'CAJERO'">Facturacion</a>
          <a routerLink="/inventario" routerLinkActive="active" *ngIf="rol === 'ADMINISTRADOR'">Inventario</a>
          <a routerLink="/proveedores" routerLinkActive="active" *ngIf="rol === 'ADMINISTRADOR'">Proveedores</a>
          <a routerLink="/reportes" routerLinkActive="active" *ngIf="rol === 'ADMINISTRADOR' || rol === 'CAJERO'">Reportes</a>
          <a routerLink="/configuracion" routerLinkActive="active" *ngIf="rol === 'ADMINISTRADOR'">Configuracion</a>
        </nav>
      </div>
      <div class="main-content">
        <div class="header">
          <h3>{{ getTitle() }}</h3>
          <div>
            <span>{{ authService.getUser()?.nombre }} {{ authService.getUser()?.apellido }} ({{ rol }})</span>
            <button class="btn btn-danger" style="margin-left:10px" (click)="logout()">Cerrar Sesion</button>
          </div>
        </div>
        <router-outlet></router-outlet>
      </div>
    </ng-container>
    <ng-template #loginPage>
      <router-outlet></router-outlet>
    </ng-template>
  `
    }]
  }], () => [{ type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 47 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
