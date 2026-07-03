package com.restaurante.dto;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

public class DashboardDTO {
    private double ventasHoy;
    private double ventasSemana;
    private double ventasMes;
    private long mesasOcupadas;
    private long pedidosPendientes;
    private long totalMesas;
    private List<Map<String, Object>> productosMasVendidos;
    private List<Map<String, Object>> productosMenosVendidos;
    private List<Double> ventasPorDia;

    public double getVentasHoy() { return ventasHoy; }
    public void setVentasHoy(double ventasHoy) { this.ventasHoy = ventasHoy; }
    public double getVentasSemana() { return ventasSemana; }
    public void setVentasSemana(double ventasSemana) { this.ventasSemana = ventasSemana; }
    public double getVentasMes() { return ventasMes; }
    public void setVentasMes(double ventasMes) { this.ventasMes = ventasMes; }
    public long getMesasOcupadas() { return mesasOcupadas; }
    public void setMesasOcupadas(long mesasOcupadas) { this.mesasOcupadas = mesasOcupadas; }
    public long getPedidosPendientes() { return pedidosPendientes; }
    public void setPedidosPendientes(long pedidosPendientes) { this.pedidosPendientes = pedidosPendientes; }
    public long getTotalMesas() { return totalMesas; }
    public void setTotalMesas(long totalMesas) { this.totalMesas = totalMesas; }
    public List<Map<String, Object>> getProductosMasVendidos() { return productosMasVendidos; }
    public void setProductosMasVendidos(List<Map<String, Object>> productosMasVendidos) { this.productosMasVendidos = productosMasVendidos; }
    public List<Map<String, Object>> getProductosMenosVendidos() { return productosMenosVendidos; }
    public void setProductosMenosVendidos(List<Map<String, Object>> productosMenosVendidos) { this.productosMenosVendidos = productosMenosVendidos; }
    public List<Double> getVentasPorDia() { return ventasPorDia; }
    public void setVentasPorDia(List<Double> ventasPorDia) { this.ventasPorDia = ventasPorDia; }
}
