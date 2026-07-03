package com.restaurante.service;

import com.restaurante.dto.FacturaDTO;
import com.restaurante.dto.MensajeResponse;
import com.restaurante.entity.*;
import com.restaurante.repository.FacturaRepository;
import com.restaurante.repository.PedidoRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class FacturaService {

    private final FacturaRepository facturaRepository;
    private final PedidoRepository pedidoRepository;

    public FacturaService(FacturaRepository facturaRepository, PedidoRepository pedidoRepository) {
        this.facturaRepository = facturaRepository;
        this.pedidoRepository = pedidoRepository;
    }

    public List<FacturaDTO> listarTodas() {
        return facturaRepository.findAll().stream().map(this::toDTO).collect(Collectors.toList());
    }

    public FacturaDTO obtenerPorId(Long id) {
        Factura factura = facturaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Factura no encontrada"));
        return toDTO(factura);
    }

    public MensajeResponse generar(FacturaDTO dto) {
        Pedido pedido = pedidoRepository.findById(dto.getPedidoId())
                .orElseThrow(() -> new RuntimeException("Pedido no encontrado"));

        if (facturaRepository.existsByPedidoId(dto.getPedidoId())) {
            return MensajeResponse.error("El pedido ya tiene una factura generada");
        }

        Factura factura = new Factura();
        factura.setPedido(pedido);
        factura.setSerie(generarSerie());
        factura.setTipo(dto.getTipo() != null ? TipoFactura.valueOf(dto.getTipo().toUpperCase()) : TipoFactura.BOLETA);
        factura.setMetodoPago(MetodoPago.valueOf(dto.getMetodoPago().toUpperCase()));

        BigDecimal subtotal = pedido.getTotal() != null ? pedido.getTotal() : BigDecimal.ZERO;
        BigDecimal igv = subtotal.multiply(BigDecimal.valueOf(0.18)).setScale(2, RoundingMode.HALF_UP);
        BigDecimal descuento = dto.getDescuento() != null ? dto.getDescuento() : BigDecimal.ZERO;
        BigDecimal total = subtotal.add(igv).subtract(descuento);

        factura.setSubtotal(subtotal);
        factura.setIgv(igv);
        factura.setDescuento(descuento);
        factura.setTotal(total);

        facturaRepository.save(factura);

        pedido.setEstado(EstadoPedido.ENTREGADO);
        pedidoRepository.save(pedido);

        return MensajeResponse.ok("Factura generada exitosamente");
    }

    public List<FacturaDTO> listarPorFecha(LocalDateTime inicio, LocalDateTime fin) {
        return facturaRepository.findByFechaBetween(inicio, fin).stream()
                .map(this::toDTO).collect(Collectors.toList());
    }

    private String generarSerie() {
        String fecha = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMdd"));
        long count = facturaRepository.count() + 1;
        return String.format("F%s-%04d", fecha, count);
    }

    private FacturaDTO toDTO(Factura factura) {
        FacturaDTO dto = new FacturaDTO();
        dto.setId(factura.getId());
        dto.setSerie(factura.getSerie());
        dto.setFecha(factura.getFecha());
        dto.setTipo(factura.getTipo().name());
        dto.setMetodoPago(factura.getMetodoPago().name());
        dto.setSubtotal(factura.getSubtotal());
        dto.setIgv(factura.getIgv());
        dto.setDescuento(factura.getDescuento());
        dto.setTotal(factura.getTotal());
        dto.setPedidoId(factura.getPedido().getId());
        return dto;
    }
}
