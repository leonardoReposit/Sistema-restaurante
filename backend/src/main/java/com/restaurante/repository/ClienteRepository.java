package com.restaurante.repository;

import com.restaurante.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {
    List<Cliente> findByNombreContainingIgnoreCase(String nombre);
    List<Cliente> findByTelefonoContaining(String telefono);
}
