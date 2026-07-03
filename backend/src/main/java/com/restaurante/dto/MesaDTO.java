package com.restaurante.dto;

import jakarta.validation.constraints.NotNull;

public class MesaDTO {
    private Long id;
    @NotNull private Integer numeroMesa;
    @NotNull private Integer capacidad;
    private String estado;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public Integer getNumeroMesa() { return numeroMesa; }
    public void setNumeroMesa(Integer numeroMesa) { this.numeroMesa = numeroMesa; }
    public Integer getCapacidad() { return capacidad; }
    public void setCapacidad(Integer capacidad) { this.capacidad = capacidad; }
    public String getEstado() { return estado; }
    public void setEstado(String estado) { this.estado = estado; }
}
