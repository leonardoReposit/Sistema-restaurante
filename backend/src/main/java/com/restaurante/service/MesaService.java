package com.restaurante.service;

import com.restaurante.dto.MensajeResponse;
import com.restaurante.dto.MesaDTO;
import com.restaurante.entity.EstadoMesa;
import com.restaurante.entity.Mesa;
import com.restaurante.repository.MesaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MesaService {

    private final MesaRepository mesaRepository;

    public MesaService(MesaRepository mesaRepository) {
        this.mesaRepository = mesaRepository;
    }

    public List<MesaDTO> listarTodas() {
        return mesaRepository.findAll().stream().map(this::toDTO).collect(Collectors.toList());
    }

    public List<MesaDTO> listarPorEstado(EstadoMesa estado) {
        return mesaRepository.findByEstado(estado).stream().map(this::toDTO).collect(Collectors.toList());
    }

    public MesaDTO obtenerPorId(Long id) {
        Mesa mesa = mesaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Mesa no encontrada"));
        return toDTO(mesa);
    }

    public MensajeResponse crear(MesaDTO dto) {
        if (mesaRepository.existsByNumeroMesa(dto.getNumeroMesa())) {
            return MensajeResponse.error("El numero de mesa ya existe");
        }
        Mesa mesa = new Mesa();
        mesa.setNumeroMesa(dto.getNumeroMesa());
        mesa.setCapacidad(dto.getCapacidad());
        mesaRepository.save(mesa);
        return MensajeResponse.ok("Mesa creada exitosamente");
    }

    public MensajeResponse actualizar(Long id, MesaDTO dto) {
        Mesa mesa = mesaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Mesa no encontrada"));
        mesa.setNumeroMesa(dto.getNumeroMesa());
        mesa.setCapacidad(dto.getCapacidad());
        mesaRepository.save(mesa);
        return MensajeResponse.ok("Mesa actualizada exitosamente");
    }

    public MensajeResponse cambiarEstado(Long id, String estado) {
        Mesa mesa = mesaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Mesa no encontrada"));
        mesa.setEstado(EstadoMesa.valueOf(estado.toUpperCase()));
        mesaRepository.save(mesa);
        return MensajeResponse.ok("Estado de mesa actualizado exitosamente");
    }

    public MensajeResponse eliminar(Long id) {
        mesaRepository.deleteById(id);
        return MensajeResponse.ok("Mesa eliminada exitosamente");
    }

    private MesaDTO toDTO(Mesa mesa) {
        MesaDTO dto = new MesaDTO();
        dto.setId(mesa.getId());
        dto.setNumeroMesa(mesa.getNumeroMesa());
        dto.setCapacidad(mesa.getCapacidad());
        dto.setEstado(mesa.getEstado().name());
        return dto;
    }
}
