package com.restaurante.service;

import com.restaurante.dto.MensajeResponse;
import com.restaurante.dto.MovimientoInventarioDTO;
import com.restaurante.entity.Ingrediente;
import com.restaurante.entity.MovimientoInventario;
import com.restaurante.entity.TipoMovimiento;
import com.restaurante.repository.IngredienteRepository;
import com.restaurante.repository.MovimientoInventarioRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MovimientoInventarioService {

    private final MovimientoInventarioRepository movimientoRepository;
    private final IngredienteRepository ingredienteRepository;

    public MovimientoInventarioService(MovimientoInventarioRepository movimientoRepository,
                                       IngredienteRepository ingredienteRepository) {
        this.movimientoRepository = movimientoRepository;
        this.ingredienteRepository = ingredienteRepository;
    }

    public List<MovimientoInventarioDTO> listarPorIngrediente(Long ingredienteId) {
        return movimientoRepository.findByIngredienteId(ingredienteId).stream()
                .map(this::toDTO).collect(Collectors.toList());
    }

    @Transactional
    public MensajeResponse registrarMovimiento(MovimientoInventarioDTO dto) {
        Ingrediente ingrediente = ingredienteRepository.findById(dto.getIngredienteId())
                .orElseThrow(() -> new RuntimeException("Ingrediente no encontrado"));

        MovimientoInventario movimiento = new MovimientoInventario();
        movimiento.setIngrediente(ingrediente);
        movimiento.setTipo(TipoMovimiento.valueOf(dto.getTipo().toUpperCase()));
        movimiento.setCantidad(dto.getCantidad());
        movimiento.setObservaciones(dto.getObservaciones());

        if (movimiento.getTipo() == TipoMovimiento.ENTRADA) {
            ingrediente.setStock(ingrediente.getStock() + dto.getCantidad());
        } else {
            ingrediente.setStock(ingrediente.getStock() - dto.getCantidad());
        }

        ingredienteRepository.save(ingrediente);
        movimientoRepository.save(movimiento);
        return MensajeResponse.ok("Movimiento registrado exitosamente");
    }

    private MovimientoInventarioDTO toDTO(MovimientoInventario movimiento) {
        MovimientoInventarioDTO dto = new MovimientoInventarioDTO();
        dto.setId(movimiento.getId());
        dto.setIngredienteId(movimiento.getIngrediente().getId());
        dto.setIngredienteNombre(movimiento.getIngrediente().getNombre());
        dto.setTipo(movimiento.getTipo().name());
        dto.setCantidad(movimiento.getCantidad());
        dto.setFecha(movimiento.getFecha());
        dto.setObservaciones(movimiento.getObservaciones());
        return dto;
    }
}
