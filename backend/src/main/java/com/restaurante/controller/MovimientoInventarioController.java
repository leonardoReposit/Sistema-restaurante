package com.restaurante.controller;

import com.restaurante.dto.MensajeResponse;
import com.restaurante.dto.MovimientoInventarioDTO;
import com.restaurante.service.MovimientoInventarioService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movimientos-inventario")
public class MovimientoInventarioController {

    private final MovimientoInventarioService movimientoService;

    public MovimientoInventarioController(MovimientoInventarioService movimientoService) {
        this.movimientoService = movimientoService;
    }

    @GetMapping("/ingrediente/{ingredienteId}")
    public ResponseEntity<List<MovimientoInventarioDTO>> listarPorIngrediente(@PathVariable Long ingredienteId) {
        return ResponseEntity.ok(movimientoService.listarPorIngrediente(ingredienteId));
    }

    @PostMapping
    public ResponseEntity<MensajeResponse> registrar(@Valid @RequestBody MovimientoInventarioDTO dto) {
        return ResponseEntity.ok(movimientoService.registrarMovimiento(dto));
    }
}
