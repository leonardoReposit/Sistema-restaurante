package com.restaurante.controller;

import com.restaurante.dto.MensajeResponse;
import com.restaurante.dto.PlatilloDTO;
import com.restaurante.service.PlatilloService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/platillos")
public class PlatilloController {

    private final PlatilloService platilloService;

    public PlatilloController(PlatilloService platilloService) {
        this.platilloService = platilloService;
    }

    @GetMapping
    public ResponseEntity<List<PlatilloDTO>> listarTodos() {
        return ResponseEntity.ok(platilloService.listarTodos());
    }

    @GetMapping("/disponibles")
    public ResponseEntity<List<PlatilloDTO>> listarDisponibles() {
        return ResponseEntity.ok(platilloService.listarDisponibles());
    }

    @GetMapping("/categoria/{categoriaId}")
    public ResponseEntity<List<PlatilloDTO>> listarPorCategoria(@PathVariable Long categoriaId) {
        return ResponseEntity.ok(platilloService.listarPorCategoria(categoriaId));
    }

    @GetMapping("/buscar")
    public ResponseEntity<List<PlatilloDTO>> buscar(@RequestParam String nombre) {
        return ResponseEntity.ok(platilloService.buscar(nombre));
    }

    @GetMapping("/{id}")
    public ResponseEntity<PlatilloDTO> obtenerPorId(@PathVariable Long id) {
        return ResponseEntity.ok(platilloService.obtenerPorId(id));
    }

    @PostMapping
    public ResponseEntity<MensajeResponse> crear(@Valid @RequestBody PlatilloDTO dto) {
        return ResponseEntity.ok(platilloService.crear(dto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<MensajeResponse> actualizar(@PathVariable Long id, @Valid @RequestBody PlatilloDTO dto) {
        return ResponseEntity.ok(platilloService.actualizar(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<MensajeResponse> eliminar(@PathVariable Long id) {
        return ResponseEntity.ok(platilloService.eliminar(id));
    }

    @PatchMapping("/{id}/toggle-disponible")
    public ResponseEntity<MensajeResponse> toggleDisponible(@PathVariable Long id) {
        return ResponseEntity.ok(platilloService.toggleDisponible(id));
    }
}
