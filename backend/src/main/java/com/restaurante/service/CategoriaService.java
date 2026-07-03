package com.restaurante.service;

import com.restaurante.dto.CategoriaDTO;
import com.restaurante.dto.MensajeResponse;
import com.restaurante.entity.Categoria;
import com.restaurante.repository.CategoriaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoriaService {

    private final CategoriaRepository categoriaRepository;

    public CategoriaService(CategoriaRepository categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }

    public List<CategoriaDTO> listarTodas() {
        return categoriaRepository.findAll().stream().map(this::toDTO).collect(Collectors.toList());
    }

    public CategoriaDTO obtenerPorId(Long id) {
        Categoria categoria = categoriaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Categoria no encontrada"));
        return toDTO(categoria);
    }

    public MensajeResponse crear(CategoriaDTO dto) {
        if (categoriaRepository.existsByNombre(dto.getNombre())) {
            return MensajeResponse.error("La categoria ya existe");
        }
        Categoria categoria = new Categoria();
        categoria.setNombre(dto.getNombre());
        categoria.setDescripcion(dto.getDescripcion());
        categoriaRepository.save(categoria);
        return MensajeResponse.ok("Categoria creada exitosamente");
    }

    public MensajeResponse actualizar(Long id, CategoriaDTO dto) {
        Categoria categoria = categoriaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Categoria no encontrada"));
        categoria.setNombre(dto.getNombre());
        categoria.setDescripcion(dto.getDescripcion());
        categoriaRepository.save(categoria);
        return MensajeResponse.ok("Categoria actualizada exitosamente");
    }

    public MensajeResponse eliminar(Long id) {
        categoriaRepository.deleteById(id);
        return MensajeResponse.ok("Categoria eliminada exitosamente");
    }

    private CategoriaDTO toDTO(Categoria categoria) {
        CategoriaDTO dto = new CategoriaDTO();
        dto.setId(categoria.getId());
        dto.setNombre(categoria.getNombre());
        dto.setDescripcion(categoria.getDescripcion());
        return dto;
    }
}
