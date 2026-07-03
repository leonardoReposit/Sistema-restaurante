package com.restaurante.repository;

import com.restaurante.entity.Pedido;
import com.restaurante.entity.EstadoPedido;
import com.restaurante.entity.Mesa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.time.LocalDateTime;
import java.util.List;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {
    List<Pedido> findByEstado(EstadoPedido estado);
    List<Pedido> findByMesa(Mesa mesa);
    List<Pedido> findByEstadoOrderByFechaAsc(EstadoPedido estado);
    
    @Query("SELECT p FROM Pedido p WHERE p.estado IN :estados ORDER BY p.fecha ASC")
    List<Pedido> findByEstadosOrderByFechaAsc(List<EstadoPedido> estados);
    
    List<Pedido> findByFechaBetween(LocalDateTime inicio, LocalDateTime fin);
    
    @Query("SELECT COUNT(p) FROM Pedido p WHERE p.estado = :estado")
    long countByEstado(EstadoPedido estado);
    
    @Query("SELECT COALESCE(SUM(p.total), 0) FROM Pedido p WHERE p.fecha BETWEEN :inicio AND :fin AND p.estado = 'ENTREGADO'")
    Double sumTotalByFechaBetween(LocalDateTime inicio, LocalDateTime fin);
}
