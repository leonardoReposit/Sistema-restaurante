
# Sistema de Gestión de Restaurante

Sistema completo para la administración de restaurantes con módulos de menú, pedidos, mesas, clientes, facturación, inventario, proveedores, cocina y reportes.

## Tecnologías

- **Backend:** Java 21 + Spring Boot 3.4.1 + Spring Security + JWT + JPA/Hibernate
- **Frontend:** Angular 22 (standalone components, lazy loading)
- **Base de Datos:** MySQL 9.7
- **Otros:** OpenAPI/Swagger, PDF export, Excel export, QR codes

## Funcionalidades

- Autenticación con JWT y 4 roles (ADMINISTRADOR, MESERO, COCINERO, CAJERO)
- Gestión de menú con categorías y platillos
- Gestión de mesas con control de estado (libre/ocupada/reservada)
- Pedidos con detalle de platillos y cálculo automático
- Cocina: visualización de pedidos pendientes y en preparación
- Facturación con generación de facturas y múltiples métodos de pago
- Inventario con control de stock mínimo y movimientos
- Dashboard con ventas del día/semana/mes y productos más/menos vendidos
- Reportes exportables a PDF y Excel

## Credenciales por defecto

| Usuario | Password | Rol |
|---------|----------|-----|
| admin | admin123 | ADMINISTRADOR |
| mesero | mesero123 | MESERO |
| cocinero | cocina123 | COCINERO |
| cajero | cajero123 | CAJERO |

## Requisitos

- Java 21+
- Node.js 20+
- MySQL 9.7+
- Angular CLI 22+

## Configuración rápida

### 1. Base de datos

```sql
CREATE DATABASE restaurante;
```

### 2. Backend

```bash
cd backend
mvn spring-boot:run
```

El servidor inicia en `http://localhost:8080/api`.

### 3. Frontend

```bash
cd frontend
npm install
ng serve
```

La aplicación inicia en `http://localhost:4200`.

### 4. Datos iniciales (opcional)

```bash
mysql -u root -p restaurante < backend/src/main/resources/datos-iniciales.sql
```

Esto inserta clientes, mesas, ingredientes, proveedores, platillos, pedidos y facturas de ejemplo.
