package com.restaurante.repository;

import com.restaurante.entity.Mesa;
import com.restaurante.entity.EstadoMesa;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface MesaRepository extends JpaRepository<Mesa, Long> {
    List<Mesa> findByEstado(EstadoMesa estado);
    Optional<Mesa> findByNumeroMesa(Integer numeroMesa);
    boolean existsByNumeroMesa(Integer numeroMesa);
}
