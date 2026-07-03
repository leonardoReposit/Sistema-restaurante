package com.restaurante.controller;

import com.restaurante.dto.MensajeResponse;
import com.restaurante.dto.PedidoDTO;
import com.restaurante.service.PedidoService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pedidos")
public class PedidoController {

    private final PedidoService pedidoService;

    public PedidoController(PedidoService pedidoService) {
        this.pedidoService = pedidoService;
    }

    @GetMapping
    public ResponseEntity<List<PedidoDTO>> listarTodos() {
        return ResponseEntity.ok(pedidoService.listarTodos());
    }

    @GetMapping("/estado/{estado}")
    public ResponseEntity<List<PedidoDTO>> listarPorEstado(@PathVariable String estado) {
        return ResponseEntity.ok(pedidoService.listarPorEstado(estado));
    }

    @GetMapping("/cocina")
    public ResponseEntity<List<PedidoDTO>> listarPedidosCocina() {
        return ResponseEntity.ok(pedidoService.listarPedidosCocina());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PedidoDTO> obtenerPorId(@PathVariable Long id) {
        return ResponseEntity.ok(pedidoService.obtenerPorId(id));
    }

    @PostMapping
    public ResponseEntity<MensajeResponse> crear(@Valid @RequestBody PedidoDTO dto) {
        return ResponseEntity.ok(pedidoService.crear(dto));
    }

    @PatchMapping("/{id}/estado")
    public ResponseEntity<MensajeResponse> cambiarEstado(@PathVariable Long id, @RequestBody String estado) {
        return ResponseEntity.ok(pedidoService.cambiarEstado(id, estado));
    }

    @PutMapping("/detalle/{detalleId}")
    public ResponseEntity<MensajeResponse> actualizarDetalle(@PathVariable Long detalleId, @RequestBody Integer cantidad) {
        return ResponseEntity.ok(pedidoService.actualizarDetalle(detalleId, cantidad));
    }

    @DeleteMapping("/detalle/{detalleId}")
    public ResponseEntity<MensajeResponse> eliminarDetalle(@PathVariable Long detalleId) {
        return ResponseEntity.ok(pedidoService.eliminarDetalle(detalleId));
    }
}
