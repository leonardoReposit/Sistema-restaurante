package com.restaurante.service;

import com.restaurante.dto.*;
import com.restaurante.entity.*;
import com.restaurante.repository.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PedidoService {

    private final PedidoRepository pedidoRepository;
    private final DetallePedidoRepository detallePedidoRepository;
    private final PlatilloRepository platilloRepository;
    private final MesaRepository mesaRepository;
    private final ClienteRepository clienteRepository;
    private final UsuarioRepository usuarioRepository;

    public PedidoService(PedidoRepository pedidoRepository,
                         DetallePedidoRepository detallePedidoRepository,
                         PlatilloRepository platilloRepository,
                         MesaRepository mesaRepository,
                         ClienteRepository clienteRepository,
                         UsuarioRepository usuarioRepository) {
        this.pedidoRepository = pedidoRepository;
        this.detallePedidoRepository = detallePedidoRepository;
        this.platilloRepository = platilloRepository;
        this.mesaRepository = mesaRepository;
        this.clienteRepository = clienteRepository;
        this.usuarioRepository = usuarioRepository;
    }

    public List<PedidoDTO> listarTodos() {
        return pedidoRepository.findAll().stream().map(this::toDTO).collect(Collectors.toList());
    }

    public PedidoDTO obtenerPorId(Long id) {
        Pedido pedido = pedidoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Pedido no encontrado"));
        return toDTO(pedido);
    }

    public List<PedidoDTO> listarPorEstado(String estado) {
        return pedidoRepository.findByEstado(EstadoPedido.valueOf(estado.toUpperCase()))
                .stream().map(this::toDTO).collect(Collectors.toList());
    }

    @Transactional
    public MensajeResponse crear(PedidoDTO dto) {
        Pedido pedido = new Pedido();
        pedido.setObservaciones(dto.getObservaciones());
        pedido.setPrioridad(dto.getPrioridad() != null ? dto.getPrioridad() : "NORMAL");

        Usuario usuario = usuarioRepository.findById(dto.getUsuarioId())
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
        pedido.setUsuario(usuario);

        if (dto.getMesaId() != null) {
            Mesa mesa = mesaRepository.findById(dto.getMesaId())
                    .orElseThrow(() -> new RuntimeException("Mesa no encontrada"));
            pedido.setMesa(mesa);
            mesa.setEstado(EstadoMesa.OCUPADA);
            mesaRepository.save(mesa);
        }

        if (dto.getClienteId() != null) {
            Cliente cliente = clienteRepository.findById(dto.getClienteId())
                    .orElseThrow(() -> new RuntimeException("Cliente no encontrado"));
            pedido.setCliente(cliente);
        }

        BigDecimal total = BigDecimal.ZERO;
        List<DetallePedido> detalles = new ArrayList<>();

        if (dto.getDetalles() != null) {
            for (DetallePedidoDTO detDTO : dto.getDetalles()) {
                Platillo platillo = platilloRepository.findById(detDTO.getPlatilloId())
                        .orElseThrow(() -> new RuntimeException("Platillo no encontrado"));

                DetallePedido detalle = new DetallePedido();
                detalle.setPedido(pedido);
                detalle.setPlatillo(platillo);
                detalle.setCantidad(detDTO.getCantidad());
                detalle.setPrecioUnitario(platillo.getPrecio());
                detalle.setObservaciones(detDTO.getObservaciones());
                detalles.add(detalle);

                total = total.add(platillo.getPrecio().multiply(BigDecimal.valueOf(detDTO.getCantidad())));
            }
        }

        pedido.setDetalles(detalles);
        pedido.setTotal(total);
        pedidoRepository.save(pedido);
        return MensajeResponse.ok("Pedido creado exitosamente");
    }

    @Transactional
    public MensajeResponse cambiarEstado(Long id, String estado) {
        Pedido pedido = pedidoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Pedido no encontrado"));

        EstadoPedido nuevoEstado = EstadoPedido.valueOf(estado.toUpperCase());
        pedido.setEstado(nuevoEstado);

        if (nuevoEstado == EstadoPedido.ENTREGADO || nuevoEstado == EstadoPedido.CANCELADO) {
            if (pedido.getMesa() != null) {
                Mesa mesa = pedido.getMesa();
                mesa.setEstado(EstadoMesa.LIBRE);
                mesaRepository.save(mesa);
            }
        }

        pedidoRepository.save(pedido);
        return MensajeResponse.ok("Estado de pedido actualizado exitosamente");
    }

    public MensajeResponse actualizarDetalle(Long detalleId, Integer cantidad) {
        DetallePedido detalle = detallePedidoRepository.findById(detalleId)
                .orElseThrow(() -> new RuntimeException("Detalle no encontrado"));
        detalle.setCantidad(cantidad);
        detallePedidoRepository.save(detalle);

        Pedido pedido = detalle.getPedido();
        BigDecimal total = pedido.getDetalles().stream()
                .map(d -> d.getPrecioUnitario().multiply(BigDecimal.valueOf(d.getCantidad())))
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        pedido.setTotal(total);
        pedidoRepository.save(pedido);

        return MensajeResponse.ok("Detalle actualizado exitosamente");
    }

    public MensajeResponse eliminarDetalle(Long detalleId) {
        DetallePedido detalle = detallePedidoRepository.findById(detalleId)
                .orElseThrow(() -> new RuntimeException("Detalle no encontrado"));
        Pedido pedido = detalle.getPedido();
        detallePedidoRepository.delete(detalle);

        BigDecimal total = pedido.getDetalles().stream()
                .filter(d -> !d.getId().equals(detalleId))
                .map(d -> d.getPrecioUnitario().multiply(BigDecimal.valueOf(d.getCantidad())))
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        pedido.setTotal(total);
        pedidoRepository.save(pedido);

        return MensajeResponse.ok("Detalle eliminado exitosamente");
    }

    public List<PedidoDTO> listarPedidosCocina() {
        return pedidoRepository.findByEstadosOrderByFechaAsc(
                List.of(EstadoPedido.PENDIENTE, EstadoPedido.EN_PREPARACION)
        ).stream().map(this::toDTO).collect(Collectors.toList());
    }

    private PedidoDTO toDTO(Pedido pedido) {
        PedidoDTO dto = new PedidoDTO();
        dto.setId(pedido.getId());
        dto.setFecha(pedido.getFecha());
        dto.setEstado(pedido.getEstado().name());
        dto.setTotal(pedido.getTotal());
        dto.setObservaciones(pedido.getObservaciones());
        dto.setTiempoEstimado(pedido.getTiempoEstimado());
        dto.setPrioridad(pedido.getPrioridad());
        dto.setUsuarioId(pedido.getUsuario().getId());
        dto.setUsuarioNombre(pedido.getUsuario().getNombre() + " " + pedido.getUsuario().getApellido());

        if (pedido.getMesa() != null) {
            dto.setMesaId(pedido.getMesa().getId());
            dto.setNumeroMesa(pedido.getMesa().getNumeroMesa());
        }

        if (pedido.getCliente() != null) {
            dto.setClienteId(pedido.getCliente().getId());
            dto.setClienteNombre(pedido.getCliente().getNombre());
        }

        if (pedido.getDetalles() != null) {
            dto.setDetalles(pedido.getDetalles().stream().map(this::toDetalleDTO).collect(Collectors.toList()));
        }

        return dto;
    }

    private DetallePedidoDTO toDetalleDTO(DetallePedido detalle) {
        DetallePedidoDTO dto = new DetallePedidoDTO();
        dto.setId(detalle.getId());
        dto.setPlatilloId(detalle.getPlatillo().getId());
        dto.setPlatilloNombre(detalle.getPlatillo().getNombre());
        dto.setCantidad(detalle.getCantidad());
        dto.setPrecioUnitario(detalle.getPrecioUnitario());
        dto.setObservaciones(detalle.getObservaciones());
        return dto;
    }
}
