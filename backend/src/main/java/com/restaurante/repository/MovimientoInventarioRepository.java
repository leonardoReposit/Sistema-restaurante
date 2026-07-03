package com.restaurante.repository;

import com.restaurante.entity.MovimientoInventario;
import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDateTime;
import java.util.List;

public interface MovimientoInventarioRepository extends JpaRepository<MovimientoInventario, Long> {
    List<MovimientoInventario> findByIngredienteId(Long ingredienteId);
    List<MovimientoInventario> findByFechaBetween(LocalDateTime inicio, LocalDateTime fin);
}
