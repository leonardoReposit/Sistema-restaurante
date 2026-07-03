package com.restaurante.dto;

import jakarta.validation.constraints.NotBlank;

public class IngredienteDTO {
    private Long id;
    @NotBlank private String nombre;
    private Double stock;
    private Double stockMinimo;
    private String unidad;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public Double getStock() { return stock; }
    public void setStock(Double stock) { this.stock = stock; }
    public Double getStockMinimo() { return stockMinimo; }
    public void setStockMinimo(Double stockMinimo) { this.stockMinimo = stockMinimo; }
    public String getUnidad() { return unidad; }
    public void setUnidad(String unidad) { this.unidad = unidad; }
}
