package com.restaurante.service;

import com.restaurante.dto.MensajeResponse;
import com.restaurante.dto.PlatilloDTO;
import com.restaurante.entity.Categoria;
import com.restaurante.entity.Platillo;
import com.restaurante.repository.CategoriaRepository;
import com.restaurante.repository.PlatilloRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PlatilloService {

    private final PlatilloRepository platilloRepository;
    private final CategoriaRepository categoriaRepository;

    public PlatilloService(PlatilloRepository platilloRepository, CategoriaRepository categoriaRepository) {
        this.platilloRepository = platilloRepository;
        this.categoriaRepository = categoriaRepository;
    }

    public List<PlatilloDTO> listarTodos() {
        return platilloRepository.findAll().stream().map(this::toDTO).collect(Collectors.toList());
    }

    public List<PlatilloDTO> listarDisponibles() {
        return platilloRepository.findByDisponibleTrue().stream().map(this::toDTO).collect(Collectors.toList());
    }

    public List<PlatilloDTO> listarPorCategoria(Long categoriaId) {
        return platilloRepository.findByCategoriaId(categoriaId).stream().map(this::toDTO).collect(Collectors.toList());
    }

    public List<PlatilloDTO> buscar(String nombre) {
        return platilloRepository.findByNombreContainingIgnoreCase(nombre).stream().map(this::toDTO).collect(Collectors.toList());
    }

    public PlatilloDTO obtenerPorId(Long id) {
        Platillo platillo = platilloRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Platillo no encontrado"));
        return toDTO(platillo);
    }

    public MensajeResponse crear(PlatilloDTO dto) {
        Categoria categoria = categoriaRepository.findById(dto.getCategoriaId())
                .orElseThrow(() -> new RuntimeException("Categoria no encontrada"));

        Platillo platillo = new Platillo();
        platillo.setNombre(dto.getNombre());
        platillo.setDescripcion(dto.getDescripcion());
        platillo.setPrecio(dto.getPrecio());
        platillo.setImagenUrl(dto.getImagenUrl());
        platillo.setDisponible(dto.getDisponible());
        platillo.setCategoria(categoria);

        platilloRepository.save(platillo);
        return MensajeResponse.ok("Platillo creado exitosamente");
    }

    public MensajeResponse actualizar(Long id, PlatilloDTO dto) {
        Platillo platillo = platilloRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Platillo no encontrado"));

        Categoria categoria = categoriaRepository.findById(dto.getCategoriaId())
                .orElseThrow(() -> new RuntimeException("Categoria no encontrada"));

        platillo.setNombre(dto.getNombre());
        platillo.setDescripcion(dto.getDescripcion());
        platillo.setPrecio(dto.getPrecio());
        platillo.setImagenUrl(dto.getImagenUrl());
        platillo.setDisponible(dto.getDisponible());
        platillo.setCategoria(categoria);

        platilloRepository.save(platillo);
        return MensajeResponse.ok("Platillo actualizado exitosamente");
    }

    public MensajeResponse eliminar(Long id) {
        platilloRepository.deleteById(id);
        return MensajeResponse.ok("Platillo eliminado exitosamente");
    }

    public MensajeResponse toggleDisponible(Long id) {
        Platillo platillo = platilloRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Platillo no encontrado"));
        platillo.setDisponible(!platillo.getDisponible());
        platilloRepository.save(platillo);
        return MensajeResponse.ok("Estado actualizado exitosamente");
    }

    private PlatilloDTO toDTO(Platillo platillo) {
        PlatilloDTO dto = new PlatilloDTO();
        dto.setId(platillo.getId());
        dto.setNombre(platillo.getNombre());
        dto.setDescripcion(platillo.getDescripcion());
        dto.setPrecio(platillo.getPrecio());
        dto.setImagenUrl(platillo.getImagenUrl());
        dto.setDisponible(platillo.getDisponible());
        dto.setCategoriaId(platillo.getCategoria().getId());
        dto.setCategoriaNombre(platillo.getCategoria().getNombre());
        return dto;
    }
}
