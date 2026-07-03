package com.restaurante.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "ingredientes")
public class Ingrediente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 150)
    private String nombre;

    @Column(nullable = false)
    private Double stock = 0.0;

    @Column(name = "stock_minimo", nullable = false)
    private Double stockMinimo = 0.0;

    @Column(length = 20)
    private String unidad = "UNIDAD";

    public Ingrediente() {}

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
