package com.restaurante.dto;

import jakarta.validation.constraints.NotNull;
import java.math.BigDecimal;

public class DetallePedidoDTO {
    private Long id;
    private Long platilloId;
    private String platilloNombre;
    @NotNull private Integer cantidad;
    private BigDecimal precioUnitario;
    private String observaciones;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public Long getPlatilloId() { return platilloId; }
    public void setPlatilloId(Long platilloId) { this.platilloId = platilloId; }
    public String getPlatilloNombre() { return platilloNombre; }
    public void setPlatilloNombre(String platilloNombre) { this.platilloNombre = platilloNombre; }
    public Integer getCantidad() { return cantidad; }
    public void setCantidad(Integer cantidad) { this.cantidad = cantidad; }
    public BigDecimal getPrecioUnitario() { return precioUnitario; }
    public void setPrecioUnitario(BigDecimal precioUnitario) { this.precioUnitario = precioUnitario; }
    public String getObservaciones() { return observaciones; }
    public void setObservaciones(String observaciones) { this.observaciones = observaciones; }
}
