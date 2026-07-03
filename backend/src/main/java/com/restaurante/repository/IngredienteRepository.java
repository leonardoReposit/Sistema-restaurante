package com.restaurante.repository;

import com.restaurante.entity.Ingrediente;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface IngredienteRepository extends JpaRepository<Ingrediente, Long> {
    List<Ingrediente> findByStockLessThanEqual(Double stockMinimo);
    List<Ingrediente> findByNombreContainingIgnoreCase(String nombre);
}
