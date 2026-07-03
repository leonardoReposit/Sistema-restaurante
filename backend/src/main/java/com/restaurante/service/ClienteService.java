package com.restaurante.service;

import com.restaurante.dto.ClienteDTO;
import com.restaurante.dto.MensajeResponse;
import com.restaurante.entity.Cliente;
import com.restaurante.repository.ClienteRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ClienteService {

    private final ClienteRepository clienteRepository;

    public ClienteService(ClienteRepository clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    public List<ClienteDTO> listarTodos() {
        return clienteRepository.findAll().stream().map(this::toDTO).collect(Collectors.toList());
    }

    public List<ClienteDTO> buscar(String nombre) {
        return clienteRepository.findByNombreContainingIgnoreCase(nombre).stream().map(this::toDTO).collect(Collectors.toList());
    }

    public ClienteDTO obtenerPorId(Long id) {
        Cliente cliente = clienteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Cliente no encontrado"));
        return toDTO(cliente);
    }

    public MensajeResponse crear(ClienteDTO dto) {
        Cliente cliente = new Cliente();
        cliente.setNombre(dto.getNombre());
        cliente.setTelefono(dto.getTelefono());
        cliente.setEmail(dto.getEmail());
        cliente.setDireccion(dto.getDireccion());
        clienteRepository.save(cliente);
        return MensajeResponse.ok("Cliente creado exitosamente");
    }

    public MensajeResponse actualizar(Long id, ClienteDTO dto) {
        Cliente cliente = clienteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Cliente no encontrado"));
        cliente.setNombre(dto.getNombre());
        cliente.setTelefono(dto.getTelefono());
        cliente.setEmail(dto.getEmail());
        cliente.setDireccion(dto.getDireccion());
        clienteRepository.save(cliente);
        return MensajeResponse.ok("Cliente actualizado exitosamente");
    }

    public MensajeResponse eliminar(Long id) {
        clienteRepository.deleteById(id);
        return MensajeResponse.ok("Cliente eliminado exitosamente");
    }

    private ClienteDTO toDTO(Cliente cliente) {
        ClienteDTO dto = new ClienteDTO();
        dto.setId(cliente.getId());
        dto.setNombre(cliente.getNombre());
        dto.setTelefono(cliente.getTelefono());
        dto.setEmail(cliente.getEmail());
        dto.setDireccion(cliente.getDireccion());
        return dto;
    }
}
