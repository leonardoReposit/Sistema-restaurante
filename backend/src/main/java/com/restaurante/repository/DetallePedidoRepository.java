package com.restaurante.repository;

import com.restaurante.entity.DetallePedido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface DetallePedidoRepository extends JpaRepository<DetallePedido, Long> {
    List<DetallePedido> findByPedidoId(Long pedidoId);
    
    @Query("SELECT dp.platillo.nombre, SUM(dp.cantidad) as total FROM DetallePedido dp GROUP BY dp.platillo.nombre ORDER BY total DESC")
    List<Object[]> findTopSellingProducts();

    @Query("SELECT dp.platillo.nombre, SUM(dp.cantidad) as total FROM DetallePedido dp GROUP BY dp.platillo.nombre ORDER BY total ASC")
    List<Object[]> findLeastSellingProducts();
}
