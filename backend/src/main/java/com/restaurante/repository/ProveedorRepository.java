package com.restaurante.repository;

import com.restaurante.entity.Proveedor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProveedorRepository extends JpaRepository<Proveedor, Long> {
    boolean existsByNombre(String nombre);
}
