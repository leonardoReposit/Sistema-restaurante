export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  tipo: string;
  id: number;
  username: string;
  nombre: string;
  apellido: string;
  rol: string;
}

export interface MensajeResponse {
  mensaje: string;
  success: boolean;
}

export interface Usuario {
  id?: number;
  username: string;
  password?: string;
  nombre: string;
  apellido: string;
  email?: string;
  telefono?: string;
  rol: string;
  enabled?: boolean;
}

export interface Categoria {
  id?: number;
  nombre: string;
  descripcion?: string;
}

export interface Platillo {
  id?: number;
  nombre: string;
  descripcion?: string;
  precio: number;
  imagenUrl?: string;
  disponible?: boolean;
  categoriaId: number;
  categoriaNombre?: string;
}

export interface Mesa {
  id?: number;
  numeroMesa: number;
  capacidad: number;
  estado?: string;
}

export interface Cliente {
  id?: number;
  nombre: string;
  telefono?: string;
  email?: string;
  direccion?: string;
}

export interface DetallePedido {
  id?: number;
  platilloId: number;
  platilloNombre?: string;
  cantidad: number;
  precioUnitario?: number;
  observaciones?: string;
}

export interface Pedido {
  id?: number;
  fecha?: string;
  estado?: string;
  total?: number;
  observaciones?: string;
  tiempoEstimado?: number;
  prioridad?: string;
  mesaId?: number;
  numeroMesa?: number;
  clienteId?: number;
  clienteNombre?: string;
  usuarioId: number;
  usuarioNombre?: string;
  detalles: DetallePedido[];
}

export interface Factura {
  id?: number;
  serie?: string;
  fecha?: string;
  tipo?: string;
  metodoPago: string;
  subtotal?: number;
  igv?: number;
  descuento?: number;
  total?: number;
  pedidoId: number;
}

export interface Ingrediente {
  id?: number;
  nombre: string;
  stock?: number;
  stockMinimo?: number;
  unidad?: string;
}

export interface MovimientoInventario {
  id?: number;
  ingredienteId: number;
  ingredienteNombre?: string;
  tipo: string;
  cantidad: number;
  fecha?: string;
  observaciones?: string;
}

export interface Proveedor {
  id?: number;
  nombre: string;
  contacto?: string;
  telefono?: string;
  direccion?: string;
  email?: string;
}

export interface Dashboard {
  ventasHoy: number;
  ventasSemana: number;
  ventasMes: number;
  mesasOcupadas: number;
  pedidosPendientes: number;
  totalMesas: number;
  productosMasVendidos: any[];
  productosMenosVendidos: any[];
  ventasPorDia: number[];
}
