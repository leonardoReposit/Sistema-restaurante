package com.restaurante.service;

import com.restaurante.dto.IngredienteDTO;
import com.restaurante.dto.MensajeResponse;
import com.restaurante.entity.Ingrediente;
import com.restaurante.repository.IngredienteRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class IngredienteService {

    private final IngredienteRepository ingredienteRepository;

    public IngredienteService(IngredienteRepository ingredienteRepository) {
        this.ingredienteRepository = ingredienteRepository;
    }

    public List<IngredienteDTO> listarTodos() {
        return ingredienteRepository.findAll().stream().map(this::toDTO).collect(Collectors.toList());
    }

    public IngredienteDTO obtenerPorId(Long id) {
        Ingrediente ingrediente = ingredienteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Ingrediente no encontrado"));
        return toDTO(ingrediente);
    }

    public List<IngredienteDTO> listarStockBajo() {
        return ingredienteRepository.findByStockLessThanEqual(0.0).stream()
                .filter(i -> i.getStock() <= i.getStockMinimo())
                .map(this::toDTO).collect(Collectors.toList());
    }

    public MensajeResponse crear(IngredienteDTO dto) {
        Ingrediente ingrediente = new Ingrediente();
        ingrediente.setNombre(dto.getNombre());
        ingrediente.setStock(dto.getStock() != null ? dto.getStock() : 0.0);
        ingrediente.setStockMinimo(dto.getStockMinimo() != null ? dto.getStockMinimo() : 0.0);
        ingrediente.setUnidad(dto.getUnidad() != null ? dto.getUnidad() : "UNIDAD");
        ingredienteRepository.save(ingrediente);
        return MensajeResponse.ok("Ingrediente creado exitosamente");
    }

    public MensajeResponse actualizar(Long id, IngredienteDTO dto) {
        Ingrediente ingrediente = ingredienteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Ingrediente no encontrado"));
        ingrediente.setNombre(dto.getNombre());
        ingrediente.setStock(dto.getStock() != null ? dto.getStock() : ingrediente.getStock());
        ingrediente.setStockMinimo(dto.getStockMinimo() != null ? dto.getStockMinimo() : ingrediente.getStockMinimo());
        ingrediente.setUnidad(dto.getUnidad() != null ? dto.getUnidad() : ingrediente.getUnidad());
        ingredienteRepository.save(ingrediente);
        return MensajeResponse.ok("Ingrediente actualizado exitosamente");
    }

    public MensajeResponse eliminar(Long id) {
        ingredienteRepository.deleteById(id);
        return MensajeResponse.ok("Ingrediente eliminado exitosamente");
    }

    private IngredienteDTO toDTO(Ingrediente ingrediente) {
        IngredienteDTO dto = new IngredienteDTO();
        dto.setId(ingrediente.getId());
        dto.setNombre(ingrediente.getNombre());
        dto.setStock(ingrediente.getStock());
        dto.setStockMinimo(ingrediente.getStockMinimo());
        dto.setUnidad(ingrediente.getUnidad());
        return dto;
    }
}
