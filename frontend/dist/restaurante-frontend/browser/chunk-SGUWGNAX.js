import {
  HttpClient,
  HttpParams,
  Injectable,
  environment,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-RANSCB4O.js";

// src/app/core/services/api.service.ts
var ApiService = class _ApiService {
  constructor(http) {
    this.http = http;
    this.api = environment.apiUrl;
  }
  getUsuarios() {
    return this.http.get(`${this.api}/usuarios`);
  }
  getUsuario(id) {
    return this.http.get(`${this.api}/usuarios/${id}`);
  }
  createUsuario(data) {
    return this.http.post(`${this.api}/usuarios`, data);
  }
  updateUsuario(id, data) {
    return this.http.put(`${this.api}/usuarios/${id}`, data);
  }
  deleteUsuario(id) {
    return this.http.delete(`${this.api}/usuarios/${id}`);
  }
  getCategorias() {
    return this.http.get(`${this.api}/categorias`);
  }
  getCategoria(id) {
    return this.http.get(`${this.api}/categorias/${id}`);
  }
  createCategoria(data) {
    return this.http.post(`${this.api}/categorias`, data);
  }
  updateCategoria(id, data) {
    return this.http.put(`${this.api}/categorias/${id}`, data);
  }
  deleteCategoria(id) {
    return this.http.delete(`${this.api}/categorias/${id}`);
  }
  getPlatillos() {
    return this.http.get(`${this.api}/platillos`);
  }
  getPlatillosDisponibles() {
    return this.http.get(`${this.api}/platillos/disponibles`);
  }
  getPlatillosPorCategoria(id) {
    return this.http.get(`${this.api}/platillos/categoria/${id}`);
  }
  buscarPlatillo(nombre) {
    return this.http.get(`${this.api}/platillos/buscar`, { params: new HttpParams().set("nombre", nombre) });
  }
  getPlatillo(id) {
    return this.http.get(`${this.api}/platillos/${id}`);
  }
  createPlatillo(data) {
    return this.http.post(`${this.api}/platillos`, data);
  }
  updatePlatillo(id, data) {
    return this.http.put(`${this.api}/platillos/${id}`, data);
  }
  deletePlatillo(id) {
    return this.http.delete(`${this.api}/platillos/${id}`);
  }
  toggleDisponible(id) {
    return this.http.patch(`${this.api}/platillos/${id}/toggle-disponible`, {});
  }
  getMesas() {
    return this.http.get(`${this.api}/mesas`);
  }
  getMesasPorEstado(estado) {
    return this.http.get(`${this.api}/mesas/estado/${estado}`);
  }
  getMesa(id) {
    return this.http.get(`${this.api}/mesas/${id}`);
  }
  createMesa(data) {
    return this.http.post(`${this.api}/mesas`, data);
  }
  updateMesa(id, data) {
    return this.http.put(`${this.api}/mesas/${id}`, data);
  }
  changeMesaEstado(id, estado) {
    return this.http.patch(`${this.api}/mesas/${id}/estado`, estado);
  }
  deleteMesa(id) {
    return this.http.delete(`${this.api}/mesas/${id}`);
  }
  getClientes() {
    return this.http.get(`${this.api}/clientes`);
  }
  buscarCliente(nombre) {
    return this.http.get(`${this.api}/clientes/buscar`, { params: new HttpParams().set("nombre", nombre) });
  }
  getCliente(id) {
    return this.http.get(`${this.api}/clientes/${id}`);
  }
  createCliente(data) {
    return this.http.post(`${this.api}/clientes`, data);
  }
  updateCliente(id, data) {
    return this.http.put(`${this.api}/clientes/${id}`, data);
  }
  deleteCliente(id) {
    return this.http.delete(`${this.api}/clientes/${id}`);
  }
  getPedidos() {
    return this.http.get(`${this.api}/pedidos`);
  }
  getPedidosPorEstado(estado) {
    return this.http.get(`${this.api}/pedidos/estado/${estado}`);
  }
  getPedidosCocina() {
    return this.http.get(`${this.api}/pedidos/cocina`);
  }
  getPedido(id) {
    return this.http.get(`${this.api}/pedidos/${id}`);
  }
  createPedido(data) {
    return this.http.post(`${this.api}/pedidos`, data);
  }
  changePedidoEstado(id, estado) {
    return this.http.patch(`${this.api}/pedidos/${id}/estado`, estado);
  }
  updateDetalle(detalleId, cantidad) {
    return this.http.put(`${this.api}/pedidos/detalle/${detalleId}`, cantidad);
  }
  deleteDetalle(detalleId) {
    return this.http.delete(`${this.api}/pedidos/detalle/${detalleId}`);
  }
  getFacturas() {
    return this.http.get(`${this.api}/facturas`);
  }
  getFactura(id) {
    return this.http.get(`${this.api}/facturas/${id}`);
  }
  generarFactura(data) {
    return this.http.post(`${this.api}/facturas`, data);
  }
  getIngredientes() {
    return this.http.get(`${this.api}/ingredientes`);
  }
  getIngrediente(id) {
    return this.http.get(`${this.api}/ingredientes/${id}`);
  }
  createIngrediente(data) {
    return this.http.post(`${this.api}/ingredientes`, data);
  }
  updateIngrediente(id, data) {
    return this.http.put(`${this.api}/ingredientes/${id}`, data);
  }
  deleteIngrediente(id) {
    return this.http.delete(`${this.api}/ingredientes/${id}`);
  }
  getMovimientos(ingredienteId) {
    return this.http.get(`${this.api}/movimientos-inventario/ingrediente/${ingredienteId}`);
  }
  registrarMovimiento(data) {
    return this.http.post(`${this.api}/movimientos-inventario`, data);
  }
  getProveedores() {
    return this.http.get(`${this.api}/proveedores`);
  }
  getProveedor(id) {
    return this.http.get(`${this.api}/proveedores/${id}`);
  }
  createProveedor(data) {
    return this.http.post(`${this.api}/proveedores`, data);
  }
  updateProveedor(id, data) {
    return this.http.put(`${this.api}/proveedores/${id}`, data);
  }
  deleteProveedor(id) {
    return this.http.delete(`${this.api}/proveedores/${id}`);
  }
  getDashboard() {
    return this.http.get(`${this.api}/dashboard`);
  }
  getConfiguracion() {
    return this.http.get(`${this.api}/configuracion`);
  }
  updateConfiguracion(data) {
    return this.http.put(`${this.api}/configuracion`, data);
  }
  static {
    this.\u0275fac = function ApiService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ApiService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ApiService
};
//# sourceMappingURL=chunk-SGUWGNAX.js.map
