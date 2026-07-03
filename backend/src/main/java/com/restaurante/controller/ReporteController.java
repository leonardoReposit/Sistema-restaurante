package com.restaurante.controller;

import com.restaurante.dto.FacturaDTO;
import com.restaurante.dto.PedidoDTO;
import com.restaurante.service.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/reportes")
public class ReporteController {

    private final PedidoService pedidoService;
    private final FacturaService facturaService;
    private final DashboardService dashboardService;
    private final IngredienteService ingredienteService;

    public ReporteController(PedidoService pedidoService,
                             FacturaService facturaService,
                             DashboardService dashboardService,
                             IngredienteService ingredienteService) {
        this.pedidoService = pedidoService;
        this.facturaService = facturaService;
        this.dashboardService = dashboardService;
        this.ingredienteService = ingredienteService;
    }

    @GetMapping("/ventas")
    public ResponseEntity<Map<String, Object>> reporteVentas(
            @RequestParam(required = false) LocalDate inicio,
            @RequestParam(required = false) LocalDate fin) {
        if (inicio == null) inicio = LocalDate.now().withDayOfMonth(1);
        if (fin == null) fin = LocalDate.now();

        LocalDateTime inicioDT = inicio.atStartOfDay();
        LocalDateTime finDT = fin.atTime(LocalTime.MAX);

        List<FacturaDTO> facturas = facturaService.listarPorFecha(inicioDT, finDT);
        double total = facturas.stream().mapToDouble(f -> f.getTotal().doubleValue()).sum();

        Map<String, Object> reporte = new HashMap<>();
        reporte.put("fechaInicio", inicio);
        reporte.put("fechaFin", fin);
        reporte.put("totalVentas", total);
        reporte.put("facturas", facturas);
        return ResponseEntity.ok(reporte);
    }

    @GetMapping("/productos-vendidos")
    public ResponseEntity<Map<String, Object>> reporteProductosVendidos() {
        Map<String, Object> reporte = new HashMap<>();
        reporte.put("productos", dashboardService.obtenerDashboard().getProductosMasVendidos());
        return ResponseEntity.ok(reporte);
    }

    @GetMapping("/pedidos")
    public ResponseEntity<List<PedidoDTO>> reportePedidos() {
        return ResponseEntity.ok(pedidoService.listarTodos());
    }

    @GetMapping("/inventario")
    public ResponseEntity<?> reporteInventario() {
        return ResponseEntity.ok(ingredienteService.listarTodos());
    }
}
