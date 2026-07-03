package com.restaurante.controller;

import com.restaurante.dto.IngredienteDTO;
import com.restaurante.dto.MensajeResponse;
import com.restaurante.service.IngredienteService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ingredientes")
public class IngredienteController {

    private final IngredienteService ingredienteService;

    public IngredienteController(IngredienteService ingredienteService) {
        this.ingredienteService = ingredienteService;
    }

    @GetMapping
    public ResponseEntity<List<IngredienteDTO>> listarTodos() {
        return ResponseEntity.ok(ingredienteService.listarTodos());
    }

    @GetMapping("/stock-bajo")
    public ResponseEntity<List<IngredienteDTO>> listarStockBajo() {
        return ResponseEntity.ok(ingredienteService.listarStockBajo());
    }

    @GetMapping("/{id}")
    public ResponseEntity<IngredienteDTO> obtenerPorId(@PathVariable Long id) {
        return ResponseEntity.ok(ingredienteService.obtenerPorId(id));
    }

    @PostMapping
    public ResponseEntity<MensajeResponse> crear(@Valid @RequestBody IngredienteDTO dto) {
        return ResponseEntity.ok(ingredienteService.crear(dto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<MensajeResponse> actualizar(@PathVariable Long id, @Valid @RequestBody IngredienteDTO dto) {
        return ResponseEntity.ok(ingredienteService.actualizar(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<MensajeResponse> eliminar(@PathVariable Long id) {
        return ResponseEntity.ok(ingredienteService.eliminar(id));
    }
}
