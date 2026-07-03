package com.restaurante.controller;

import com.restaurante.dto.MensajeResponse;
import com.restaurante.dto.MesaDTO;
import com.restaurante.entity.EstadoMesa;
import com.restaurante.service.MesaService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/mesas")
public class MesaController {

    private final MesaService mesaService;

    public MesaController(MesaService mesaService) {
        this.mesaService = mesaService;
    }

    @GetMapping
    public ResponseEntity<List<MesaDTO>> listarTodas() {
        return ResponseEntity.ok(mesaService.listarTodas());
    }

    @GetMapping("/estado/{estado}")
    public ResponseEntity<List<MesaDTO>> listarPorEstado(@PathVariable String estado) {
        return ResponseEntity.ok(mesaService.listarPorEstado(EstadoMesa.valueOf(estado.toUpperCase())));
    }

    @GetMapping("/{id}")
    public ResponseEntity<MesaDTO> obtenerPorId(@PathVariable Long id) {
        return ResponseEntity.ok(mesaService.obtenerPorId(id));
    }

    @PostMapping
    public ResponseEntity<MensajeResponse> crear(@Valid @RequestBody MesaDTO dto) {
        return ResponseEntity.ok(mesaService.crear(dto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<MensajeResponse> actualizar(@PathVariable Long id, @Valid @RequestBody MesaDTO dto) {
        return ResponseEntity.ok(mesaService.actualizar(id, dto));
    }

    @PatchMapping("/{id}/estado")
    public ResponseEntity<MensajeResponse> cambiarEstado(@PathVariable Long id, @RequestBody String estado) {
        return ResponseEntity.ok(mesaService.cambiarEstado(id, estado));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<MensajeResponse> eliminar(@PathVariable Long id) {
        return ResponseEntity.ok(mesaService.eliminar(id));
    }
}
