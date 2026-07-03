package com.restaurante.service;

import com.restaurante.dto.MensajeResponse;
import com.restaurante.dto.ProveedorDTO;
import com.restaurante.entity.Proveedor;
import com.restaurante.repository.ProveedorRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProveedorService {

    private final ProveedorRepository proveedorRepository;

    public ProveedorService(ProveedorRepository proveedorRepository) {
        this.proveedorRepository = proveedorRepository;
    }

    public List<ProveedorDTO> listarTodos() {
        return proveedorRepository.findAll().stream().map(this::toDTO).collect(Collectors.toList());
    }

    public ProveedorDTO obtenerPorId(Long id) {
        Proveedor proveedor = proveedorRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Proveedor no encontrado"));
        return toDTO(proveedor);
    }

    public MensajeResponse crear(ProveedorDTO dto) {
        if (proveedorRepository.existsByNombre(dto.getNombre())) {
            return MensajeResponse.error("El proveedor ya existe");
        }
        Proveedor proveedor = new Proveedor();
        proveedor.setNombre(dto.getNombre());
        proveedor.setContacto(dto.getContacto());
        proveedor.setTelefono(dto.getTelefono());
        proveedor.setDireccion(dto.getDireccion());
        proveedor.setEmail(dto.getEmail());
        proveedorRepository.save(proveedor);
        return MensajeResponse.ok("Proveedor creado exitosamente");
    }

    public MensajeResponse actualizar(Long id, ProveedorDTO dto) {
        Proveedor proveedor = proveedorRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Proveedor no encontrado"));
        proveedor.setNombre(dto.getNombre());
        proveedor.setContacto(dto.getContacto());
        proveedor.setTelefono(dto.getTelefono());
        proveedor.setDireccion(dto.getDireccion());
        proveedor.setEmail(dto.getEmail());
        proveedorRepository.save(proveedor);
        return MensajeResponse.ok("Proveedor actualizado exitosamente");
    }

    public MensajeResponse eliminar(Long id) {
        proveedorRepository.deleteById(id);
        return MensajeResponse.ok("Proveedor eliminado exitosamente");
    }

    private ProveedorDTO toDTO(Proveedor proveedor) {
        ProveedorDTO dto = new ProveedorDTO();
        dto.setId(proveedor.getId());
        dto.setNombre(proveedor.getNombre());
        dto.setContacto(proveedor.getContacto());
        dto.setTelefono(proveedor.getTelefono());
        dto.setDireccion(proveedor.getDireccion());
        dto.setEmail(proveedor.getEmail());
        return dto;
    }
}
