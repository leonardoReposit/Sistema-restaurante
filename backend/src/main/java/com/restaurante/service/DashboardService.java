package com.restaurante.service;

import com.restaurante.dto.DashboardDTO;
import com.restaurante.entity.EstadoMesa;
import com.restaurante.entity.EstadoPedido;
import com.restaurante.repository.*;
import org.springframework.stereotype.Service;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.temporal.TemporalAdjusters;
import java.util.*;

@Service
public class DashboardService {

    private final PedidoRepository pedidoRepository;
    private final FacturaRepository facturaRepository;
    private final DetallePedidoRepository detallePedidoRepository;
    private final MesaRepository mesaRepository;

    public DashboardService(PedidoRepository pedidoRepository,
                            FacturaRepository facturaRepository,
                            DetallePedidoRepository detallePedidoRepository,
                            MesaRepository mesaRepository) {
        this.pedidoRepository = pedidoRepository;
        this.facturaRepository = facturaRepository;
        this.detallePedidoRepository = detallePedidoRepository;
        this.mesaRepository = mesaRepository;
    }

    public DashboardDTO obtenerDashboard() {
        DashboardDTO dto = new DashboardDTO();
        LocalDate hoy = LocalDate.now();

        LocalDateTime inicioHoy = hoy.atStartOfDay();
        LocalDateTime finHoy = hoy.atTime(LocalTime.MAX);

        LocalDateTime inicioSemana = hoy.with(TemporalAdjusters.previousOrSame(DayOfWeek.MONDAY)).atStartOfDay();
        LocalDateTime inicioMes = hoy.withDayOfMonth(1).atStartOfDay();

        dto.setVentasHoy(facturaRepository.sumTotalByFechaBetween(inicioHoy, finHoy));
        dto.setVentasSemana(facturaRepository.sumTotalByFechaBetween(inicioSemana, finHoy));
        dto.setVentasMes(facturaRepository.sumTotalByFechaBetween(inicioMes, finHoy));

        dto.setMesasOcupadas(mesaRepository.findByEstado(EstadoMesa.OCUPADA).size());
        dto.setTotalMesas(mesaRepository.count());
        dto.setPedidosPendientes(pedidoRepository.countByEstado(EstadoPedido.PENDIENTE));

        List<Object[]> topProducts = detallePedidoRepository.findTopSellingProducts();
        List<Map<String, Object>> productosList = new ArrayList<>();
        for (Object[] product : topProducts) {
            Map<String, Object> map = new HashMap<>();
            map.put("nombre", product[0]);
            map.put("total", product[1]);
            productosList.add(map);
        }
        dto.setProductosMasVendidos(productosList);

        List<Object[]> leastProducts = detallePedidoRepository.findLeastSellingProducts();
        List<Map<String, Object>> productosLeastList = new ArrayList<>();
        for (Object[] product : leastProducts) {
            Map<String, Object> map = new HashMap<>();
            map.put("nombre", product[0]);
            map.put("total", product[1]);
            productosLeastList.add(map);
        }
        dto.setProductosMenosVendidos(productosLeastList);

        List<Double> ventasPorDia = new ArrayList<>();
        for (int i = 6; i >= 0; i--) {
            LocalDate dia = hoy.minusDays(i);
            LocalDateTime inicio = dia.atStartOfDay();
            LocalDateTime fin = dia.atTime(LocalTime.MAX);
            ventasPorDia.add(facturaRepository.sumTotalByFechaBetween(inicio, fin));
        }
        dto.setVentasPorDia(ventasPorDia);

        return dto;
    }
}
