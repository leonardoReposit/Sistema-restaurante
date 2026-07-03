import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  Usuario, Categoria, Platillo, Mesa, Cliente, Pedido, Factura,
  Ingrediente, MovimientoInventario, Proveedor, Dashboard, MensajeResponse
} from '../models/models';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private api = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<Usuario[]> { return this.http.get<Usuario[]>(`${this.api}/usuarios`); }
  getUsuario(id: number): Observable<Usuario> { return this.http.get<Usuario>(`${this.api}/usuarios/${id}`); }
  createUsuario(data: Usuario): Observable<MensajeResponse> { return this.http.post<MensajeResponse>(`${this.api}/usuarios`, data); }
  updateUsuario(id: number, data: Usuario): Observable<MensajeResponse> { return this.http.put<MensajeResponse>(`${this.api}/usuarios/${id}`, data); }
  deleteUsuario(id: number): Observable<MensajeResponse> { return this.http.delete<MensajeResponse>(`${this.api}/usuarios/${id}`); }

  getCategorias(): Observable<Categoria[]> { return this.http.get<Categoria[]>(`${this.api}/categorias`); }
  getCategoria(id: number): Observable<Categoria> { return this.http.get<Categoria>(`${this.api}/categorias/${id}`); }
  createCategoria(data: Categoria): Observable<MensajeResponse> { return this.http.post<MensajeResponse>(`${this.api}/categorias`, data); }
  updateCategoria(id: number, data: Categoria): Observable<MensajeResponse> { return this.http.put<MensajeResponse>(`${this.api}/categorias/${id}`, data); }
  deleteCategoria(id: number): Observable<MensajeResponse> { return this.http.delete<MensajeResponse>(`${this.api}/categorias/${id}`); }

  getPlatillos(): Observable<Platillo[]> { return this.http.get<Platillo[]>(`${this.api}/platillos`); }
  getPlatillosDisponibles(): Observable<Platillo[]> { return this.http.get<Platillo[]>(`${this.api}/platillos/disponibles`); }
  getPlatillosPorCategoria(id: number): Observable<Platillo[]> { return this.http.get<Platillo[]>(`${this.api}/platillos/categoria/${id}`); }
  buscarPlatillo(nombre: string): Observable<Platillo[]> { return this.http.get<Platillo[]>(`${this.api}/platillos/buscar`, { params: new HttpParams().set('nombre', nombre) }); }
  getPlatillo(id: number): Observable<Platillo> { return this.http.get<Platillo>(`${this.api}/platillos/${id}`); }
  createPlatillo(data: Platillo): Observable<MensajeResponse> { return this.http.post<MensajeResponse>(`${this.api}/platillos`, data); }
  updatePlatillo(id: number, data: Platillo): Observable<MensajeResponse> { return this.http.put<MensajeResponse>(`${this.api}/platillos/${id}`, data); }
  deletePlatillo(id: number): Observable<MensajeResponse> { return this.http.delete<MensajeResponse>(`${this.api}/platillos/${id}`); }
  toggleDisponible(id: number): Observable<MensajeResponse> { return this.http.patch<MensajeResponse>(`${this.api}/platillos/${id}/toggle-disponible`, {}); }

  getMesas(): Observable<Mesa[]> { return this.http.get<Mesa[]>(`${this.api}/mesas`); }
  getMesasPorEstado(estado: string): Observable<Mesa[]> { return this.http.get<Mesa[]>(`${this.api}/mesas/estado/${estado}`); }
  getMesa(id: number): Observable<Mesa> { return this.http.get<Mesa>(`${this.api}/mesas/${id}`); }
  createMesa(data: Mesa): Observable<MensajeResponse> { return this.http.post<MensajeResponse>(`${this.api}/mesas`, data); }
  updateMesa(id: number, data: Mesa): Observable<MensajeResponse> { return this.http.put<MensajeResponse>(`${this.api}/mesas/${id}`, data); }
  changeMesaEstado(id: number, estado: string): Observable<MensajeResponse> { return this.http.patch<MensajeResponse>(`${this.api}/mesas/${id}/estado`, estado); }
  deleteMesa(id: number): Observable<MensajeResponse> { return this.http.delete<MensajeResponse>(`${this.api}/mesas/${id}`); }

  getClientes(): Observable<Cliente[]> { return this.http.get<Cliente[]>(`${this.api}/clientes`); }
  buscarCliente(nombre: string): Observable<Cliente[]> { return this.http.get<Cliente[]>(`${this.api}/clientes/buscar`, { params: new HttpParams().set('nombre', nombre) }); }
  getCliente(id: number): Observable<Cliente> { return this.http.get<Cliente>(`${this.api}/clientes/${id}`); }
  createCliente(data: Cliente): Observable<MensajeResponse> { return this.http.post<MensajeResponse>(`${this.api}/clientes`, data); }
  updateCliente(id: number, data: Cliente): Observable<MensajeResponse> { return this.http.put<MensajeResponse>(`${this.api}/clientes/${id}`, data); }
  deleteCliente(id: number): Observable<MensajeResponse> { return this.http.delete<MensajeResponse>(`${this.api}/clientes/${id}`); }

  getPedidos(): Observable<Pedido[]> { return this.http.get<Pedido[]>(`${this.api}/pedidos`); }
  getPedidosPorEstado(estado: string): Observable<Pedido[]> { return this.http.get<Pedido[]>(`${this.api}/pedidos/estado/${estado}`); }
  getPedidosCocina(): Observable<Pedido[]> { return this.http.get<Pedido[]>(`${this.api}/pedidos/cocina`); }
  getPedido(id: number): Observable<Pedido> { return this.http.get<Pedido>(`${this.api}/pedidos/${id}`); }
  createPedido(data: Pedido): Observable<MensajeResponse> { return this.http.post<MensajeResponse>(`${this.api}/pedidos`, data); }
  changePedidoEstado(id: number, estado: string): Observable<MensajeResponse> { return this.http.patch<MensajeResponse>(`${this.api}/pedidos/${id}/estado`, estado); }
  updateDetalle(detalleId: number, cantidad: number): Observable<MensajeResponse> { return this.http.put<MensajeResponse>(`${this.api}/pedidos/detalle/${detalleId}`, cantidad); }
  deleteDetalle(detalleId: number): Observable<MensajeResponse> { return this.http.delete<MensajeResponse>(`${this.api}/pedidos/detalle/${detalleId}`); }

  getFacturas(): Observable<Factura[]> { return this.http.get<Factura[]>(`${this.api}/facturas`); }
  getFactura(id: number): Observable<Factura> { return this.http.get<Factura>(`${this.api}/facturas/${id}`); }
  generarFactura(data: Factura): Observable<MensajeResponse> { return this.http.post<MensajeResponse>(`${this.api}/facturas`, data); }

  getIngredientes(): Observable<Ingrediente[]> { return this.http.get<Ingrediente[]>(`${this.api}/ingredientes`); }
  getIngrediente(id: number): Observable<Ingrediente> { return this.http.get<Ingrediente>(`${this.api}/ingredientes/${id}`); }
  createIngrediente(data: Ingrediente): Observable<MensajeResponse> { return this.http.post<MensajeResponse>(`${this.api}/ingredientes`, data); }
  updateIngrediente(id: number, data: Ingrediente): Observable<MensajeResponse> { return this.http.put<MensajeResponse>(`${this.api}/ingredientes/${id}`, data); }
  deleteIngrediente(id: number): Observable<MensajeResponse> { return this.http.delete<MensajeResponse>(`${this.api}/ingredientes/${id}`); }

  getMovimientos(ingredienteId: number): Observable<MovimientoInventario[]> { return this.http.get<MovimientoInventario[]>(`${this.api}/movimientos-inventario/ingrediente/${ingredienteId}`); }
  registrarMovimiento(data: MovimientoInventario): Observable<MensajeResponse> { return this.http.post<MensajeResponse>(`${this.api}/movimientos-inventario`, data); }

  getProveedores(): Observable<Proveedor[]> { return this.http.get<Proveedor[]>(`${this.api}/proveedores`); }
  getProveedor(id: number): Observable<Proveedor> { return this.http.get<Proveedor>(`${this.api}/proveedores/${id}`); }
  createProveedor(data: Proveedor): Observable<MensajeResponse> { return this.http.post<MensajeResponse>(`${this.api}/proveedores`, data); }
  updateProveedor(id: number, data: Proveedor): Observable<MensajeResponse> { return this.http.put<MensajeResponse>(`${this.api}/proveedores/${id}`, data); }
  deleteProveedor(id: number): Observable<MensajeResponse> { return this.http.delete<MensajeResponse>(`${this.api}/proveedores/${id}`); }

  getDashboard(): Observable<Dashboard> { return this.http.get<Dashboard>(`${this.api}/dashboard`); }

  getConfiguracion(): Observable<any> { return this.http.get(`${this.api}/configuracion`); }
  updateConfiguracion(data: any): Observable<MensajeResponse> { return this.http.put<MensajeResponse>(`${this.api}/configuracion`, data); }
}
