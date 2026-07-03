-- ============================================
-- SCRIPT DE DATOS INICIALES PARA EL RESTAURANTE
-- MySQL 9.7
-- Compatible con DataInitializer.java (INSERT IGNORE)
-- ============================================

-- Usuarios adicionales (DataInitializer crea 4: admin, mesero, cocinero, cajero)
INSERT IGNORE INTO usuarios (username, password, nombre, apellido, email, rol, enabled, fecha_creacion)
VALUES
('recepcion', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'Laura', 'Mendoza', 'laura@restaurante.com', 'MESERO', true, NOW()),
('gerente', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'Pedro', 'Ramirez', 'pedro@restaurante.com', 'ADMINISTRADOR', true, NOW());

-- Categorías adicionales (DataInitializer crea 4: Entradas, PP, Bebidas, Postres)
INSERT IGNORE INTO categorias (nombre)
VALUES ('Guarniciones'),
       ('Sopas');

-- Clientes
INSERT INTO clientes (nombre, telefono, email, direccion, fecha_registro) VALUES
('Carlos Mendoza', '999111001', 'carlos@email.com', 'Av. Principal 123', NOW()),
('Maria Lopez', '999111002', 'maria@email.com', 'Jr. Las Flores 456', NOW()),
('Jose Garcia', '999111003', 'jose@email.com', 'Calle Real 789', NOW()),
('Ana Torres', '999111004', 'ana@email.com', 'Av. Central 321', NOW()),
('Luis Fernandez', '999111005', 'luis@email.com', 'Pasaje Sol 654', NOW()),
('Rosa Martinez', '999111006', 'rosa@email.com', 'Jr. Union 987', NOW());

-- Mesas
INSERT INTO mesas (numero_mesa, capacidad, estado) VALUES
(1, 2, 'LIBRE'),
(2, 2, 'LIBRE'),
(3, 4, 'LIBRE'),
(4, 4, 'LIBRE'),
(5, 6, 'LIBRE'),
(6, 6, 'LIBRE'),
(7, 8, 'LIBRE'),
(8, 10, 'LIBRE');

-- Ingredientes
INSERT INTO ingredientes (nombre, stock, stock_minimo, unidad) VALUES
('Arroz', 50.0, 10.0, 'KG'),
('Pollo', 30.0, 8.0, 'KG'),
('Carne de Res', 25.0, 5.0, 'KG'),
('Cebolla', 20.0, 5.0, 'KG'),
('Tomate', 15.0, 3.0, 'KG'),
('Lechuga', 10.0, 2.0, 'KG'),
('Papas', 40.0, 10.0, 'KG'),
('Aceite', 20.0, 5.0, 'L'),
('Harina', 25.0, 5.0, 'KG'),
('Huevos', 60.0, 12.0, 'UNIDAD'),
('Leche', 15.0, 5.0, 'L'),
('Queso', 10.0, 3.0, 'KG'),
('Fideos', 30.0, 8.0, 'KG'),
('Pescado', 12.0, 3.0, 'KG'),
('Mariscos', 8.0, 2.0, 'KG');

-- Proveedores
INSERT INTO proveedores (nombre, contacto, telefono, direccion, email) VALUES
('Distribuidora San Miguel', 'Pedro Sanchez', '987654001', 'Av. Industrial 500', 'ventas@sanmiguel.com'),
('Carnes del Norte', 'Juan Castillo', '987654002', 'Jr. Ganadero 200', 'pedidos@carnesnorte.com'),
('Verduras Frescas SAC', 'Lucia Ramos', '987654003', 'Av. Agricola 300', 'info@verdurastrescas.com'),
('Lacteos La Granja', 'Miguel Torres', '987654004', 'Carretera Central Km 15', 'ventas@lagranja.com'),
('Mar del Peru', 'Carmen Diaz', '987654005', 'Puerto Pesquero Mz A', 'carmen@mardelperu.com'),
('Bebidas del Sur', 'Roberto Silva', '987654006', 'Av. Comercial 800', 'roberto@bebidassur.com');

-- Platillos (FK -> categorias: 1=Entradas, 2=PP, 3=Bebidas, 4=Postres, 5=Guarniciones, 6=Sopas)
INSERT INTO platillos (nombre, descripcion, precio, disponible, categoria_id, fecha_creacion) VALUES
('Causa Limeña', 'Causa de pollo con palta y mayonesa', 18.50, true, 1, NOW()),
('Papas a la Huancaina', 'Papas con salsa de queso y huevo', 15.00, true, 1, NOW()),
('Tequeños', 'Tequeños de queso con salsa de tamarindo', 22.00, true, 1, NOW()),
('Ceviche Mixto', 'Ceviche de pescado y mariscos', 35.00, true, 1, NOW()),
('Tamal de Pollo', 'Tamal de pollo con salsa criolla', 12.00, true, 1, NOW()),
('Lomo Saltado', 'Lomo de res saltado con verduras y papas', 32.00, true, 2, NOW()),
('Ají de Gallina', 'Pollo desmenuzado en salsa de ají amarillo', 28.00, true, 2, NOW()),
('Seco de Res', 'Seco de res con frijoles y arroz', 30.00, true, 2, NOW()),
('Arroz con Pollo', 'Arroz con pollo y ensalada fresca', 26.00, true, 2, NOW()),
('Tallarines Verdes', 'Tallarines con salsa de albahaca y bisteck', 28.00, true, 2, NOW()),
('Chicha Morada', 'Refresco de maíz morado', 8.00, true, 3, NOW()),
('Maracuyá Sour', 'Jugo de maracuyá con pisco', 15.00, true, 3, NOW()),
('Inca Kola 500ml', 'Gaseosa Inca Kola personal', 5.00, true, 3, NOW()),
('Cerveza Cusqueña', 'Cerveza Cusqueña negra 620ml', 12.00, true, 3, NOW()),
('Limonada Frozen', 'Limonada con hierbabuena y jengibre', 10.00, true, 3, NOW()),
('Picarones', 'Picarones con miel de chancaca', 14.00, true, 4, NOW()),
('Suspiro a la Limeña', 'Suspiro limeño con merengue', 16.00, true, 4, NOW()),
('Mazamorra Morada', 'Mazamorra morada con canela', 10.00, true, 4, NOW()),
('Arroz con Leche', 'Arroz con leche tradicional', 10.00, true, 4, NOW()),
('Tres Leches', 'Pastel de tres leches con crema', 18.00, true, 4, NOW()),
('Papas Fritas', 'Papas fritas crocantes', 8.00, true, 5, NOW()),
('Arroz Blanco', 'Arroz blanco cocido al vapor', 6.00, true, 5, NOW()),
('Sopa del Dia', 'Sopa de verduras de la temporada', 10.00, true, 6, NOW()),
('Crema de Zapallo', 'Crema de zapallo con croutons', 12.00, true, 6, NOW());

-- Pedidos (FK -> mesa, cliente, usuario: mesa 1-8, cliente 1-6, usuario 2=mesero)
INSERT INTO pedidos (fecha, estado, total, observaciones, mesa_id, cliente_id, usuario_id, prioridad) VALUES
(NOW(), 'ENTREGADO', 55.50, 'Sin cebolla', 3, 1, 2, 'NORMAL'),
(NOW(), 'ENTREGADO', 42.00, NULL, 1, 3, 2, 'NORMAL'),
(DATE_SUB(NOW(), INTERVAL 1 DAY), 'ENTREGADO', 70.00, 'Bien cocido', 5, 2, 2, 'ALTA'),
(DATE_SUB(NOW(), INTERVAL 1 DAY), 'ENTREGADO', 28.00, NULL, 2, 4, 2, 'NORMAL'),
(NOW(), 'PENDIENTE', 46.00, 'Sin sal', 4, 5, 2, 'NORMAL'),
(NOW(), 'EN_PREPARACION', 63.00, 'Poco picante', 6, 6, 2, 'ALTA'),
(NOW(), 'PENDIENTE', 30.00, NULL, 7, 2, 5, 'NORMAL');

-- Detalle Pedidos
INSERT INTO detalle_pedidos (pedido_id, platillo_id, cantidad, precio_unitario, observaciones) VALUES
(1, 1, 2, 18.50, NULL),
(1, 3, 1, 22.00, NULL),
(1, 12, 1, 15.00, 'Con hielo'),
(2, 7, 1, 28.00, NULL),
(2, 11, 1, 8.00, NULL),
(2, 16, 1, 14.00, NULL),
(3, 6, 2, 32.00, NULL),
(3, 11, 1, 8.00, NULL),
(4, 8, 1, 30.00, NULL),
(5, 3, 1, 22.00, NULL),
(5, 7, 1, 28.00, NULL),
(6, 6, 1, 32.00, NULL),
(6, 13, 2, 5.00, NULL),
(6, 2, 1, 15.00, NULL),
(6, 11, 1, 8.00, NULL),
(7, 9, 1, 26.00, NULL),
(7, 11, 1, 8.00, NULL);

-- Facturas (solo para pedidos entregados)
INSERT INTO facturas (serie, fecha, tipo, metodo_pago, subtotal, igv, descuento, total, pedido_id) VALUES
('F001-0001', NOW(), 'BOLETA', 'EFECTIVO', 55.50, 9.99, 0.00, 65.49, 1),
('F001-0002', NOW(), 'BOLETA', 'YAPE', 42.00, 7.56, 2.00, 47.56, 2),
('F001-0003', DATE_SUB(NOW(), INTERVAL 1 DAY), 'FACTURA', 'TARJETA', 70.00, 12.60, 0.00, 82.60, 3),
('F001-0004', DATE_SUB(NOW(), INTERVAL 1 DAY), 'BOLETA', 'EFECTIVO', 28.00, 5.04, 0.00, 33.04, 4),
('F001-0005', NOW(), 'BOLETA', 'PLIN', 35.00, 6.30, 0.00, 41.30, 7);

-- Movimientos de Inventario
INSERT INTO movimientos_inventario (ingrediente_id, tipo, cantidad, fecha, observaciones) VALUES
(1, 'ENTRADA', 20.0, NOW(), 'Compra semanal - Arroz'),
(2, 'ENTRADA', 15.0, NOW(), 'Compra semanal - Pollo'),
(3, 'ENTRADA', 10.0, DATE_SUB(NOW(), INTERVAL 1 DAY), 'Compra semanal - Carne'),
(4, 'ENTRADA', 10.0, DATE_SUB(NOW(), INTERVAL 1 DAY), 'Compra semanal - Cebolla'),
(2, 'SALIDA', 3.0, NOW(), 'Consumo diario cocina - Pollo'),
(1, 'SALIDA', 5.0, NOW(), 'Consumo diario cocina - Arroz');
