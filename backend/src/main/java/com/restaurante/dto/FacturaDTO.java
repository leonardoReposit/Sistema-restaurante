package com.restaurante.dto;

import jakarta.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.time.LocalDateTime;

public class FacturaDTO {
    private Long id;
    private String serie;
    private LocalDateTime fecha;
    private String tipo;
    @NotNull private String metodoPago;
    private BigDecimal subtotal;
    private BigDecimal igv;
    private BigDecimal descuento;
    private BigDecimal total;
    @NotNull private Long pedidoId;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getSerie() { return serie; }
    public void setSerie(String serie) { this.serie = serie; }
    public LocalDateTime getFecha() { return fecha; }
    public void setFecha(LocalDateTime fecha) { this.fecha = fecha; }
    public String getTipo() { return tipo; }
    public void setTipo(String tipo) { this.tipo = tipo; }
    public String getMetodoPago() { return metodoPago; }
    public void setMetodoPago(String metodoPago) { this.metodoPago = metodoPago; }
    public BigDecimal getSubtotal() { return subtotal; }
    public void setSubtotal(BigDecimal subtotal) { this.subtotal = subtotal; }
    public BigDecimal getIgv() { return igv; }
    public void setIgv(BigDecimal igv) { this.igv = igv; }
    public BigDecimal getDescuento() { return descuento; }
    public void setDescuento(BigDecimal descuento) { this.descuento = descuento; }
    public BigDecimal getTotal() { return total; }
    public void setTotal(BigDecimal total) { this.total = total; }
    public Long getPedidoId() { return pedidoId; }
    public void setPedidoId(Long pedidoId) { this.pedidoId = pedidoId; }
}
