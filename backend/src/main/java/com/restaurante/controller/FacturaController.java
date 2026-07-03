package com.restaurante.controller;

import com.restaurante.dto.FacturaDTO;
import com.restaurante.dto.MensajeResponse;
import com.restaurante.service.FacturaService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/facturas")
public class FacturaController {

    private final FacturaService facturaService;

    public FacturaController(FacturaService facturaService) {
        this.facturaService = facturaService;
    }

    @GetMapping
    public ResponseEntity<List<FacturaDTO>> listarTodas() {
        return ResponseEntity.ok(facturaService.listarTodas());
    }

    @GetMapping("/{id}")
    public ResponseEntity<FacturaDTO> obtenerPorId(@PathVariable Long id) {
        return ResponseEntity.ok(facturaService.obtenerPorId(id));
    }

    @PostMapping
    public ResponseEntity<MensajeResponse> generar(@Valid @RequestBody FacturaDTO dto) {
        return ResponseEntity.ok(facturaService.generar(dto));
    }

    @GetMapping("/reporte")
    public ResponseEntity<List<FacturaDTO>> listarPorFecha(
            @RequestParam LocalDateTime inicio, @RequestParam LocalDateTime fin) {
        return ResponseEntity.ok(facturaService.listarPorFecha(inicio, fin));
    }
}
