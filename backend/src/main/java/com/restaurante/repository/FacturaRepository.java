package com.restaurante.repository;

import com.restaurante.entity.Factura;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.time.LocalDateTime;
import java.util.List;

public interface FacturaRepository extends JpaRepository<Factura, Long> {
    @Query("SELECT COALESCE(SUM(f.total), 0) FROM Factura f WHERE f.fecha BETWEEN :inicio AND :fin")
    Double sumTotalByFechaBetween(LocalDateTime inicio, LocalDateTime fin);
    
    List<Factura> findByFechaBetween(LocalDateTime inicio, LocalDateTime fin);
    
    boolean existsByPedidoId(Long pedidoId);
}
