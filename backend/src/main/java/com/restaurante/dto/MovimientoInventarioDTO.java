package com.restaurante.dto;

import jakarta.validation.constraints.NotNull;
import java.time.LocalDateTime;

public class MovimientoInventarioDTO {
    private Long id;
    @NotNull private Long ingredienteId;
    private String ingredienteNombre;
    @NotNull private String tipo;
    @NotNull private Double cantidad;
    private LocalDateTime fecha;
    private String observaciones;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public Long getIngredienteId() { return ingredienteId; }
    public void setIngredienteId(Long ingredienteId) { this.ingredienteId = ingredienteId; }
    public String getIngredienteNombre() { return ingredienteNombre; }
    public void setIngredienteNombre(String ingredienteNombre) { this.ingredienteNombre = ingredienteNombre; }
    public String getTipo() { return tipo; }
    public void setTipo(String tipo) { this.tipo = tipo; }
    public Double getCantidad() { return cantidad; }
    public void setCantidad(Double cantidad) { this.cantidad = cantidad; }
    public LocalDateTime getFecha() { return fecha; }
    public void setFecha(LocalDateTime fecha) { this.fecha = fecha; }
    public String getObservaciones() { return observaciones; }
    public void setObservaciones(String observaciones) { this.observaciones = observaciones; }
}
