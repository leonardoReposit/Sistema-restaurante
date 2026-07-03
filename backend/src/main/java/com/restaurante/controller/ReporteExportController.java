package com.restaurante.controller;

import com.restaurante.service.ReporteExportService;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.ByteArrayInputStream;
import java.time.LocalDate;

@RestController
@RequestMapping("/exportar")
public class ReporteExportController {

    private final ReporteExportService reporteExportService;

    public ReporteExportController(ReporteExportService reporteExportService) {
        this.reporteExportService = reporteExportService;
    }

    @GetMapping("/pdf/ventas")
    public ResponseEntity<InputStreamResource> exportarVentasPDF(
            @RequestParam(required = false) LocalDate inicio,
            @RequestParam(required = false) LocalDate fin) {
        if (inicio == null) inicio = LocalDate.now().withDayOfMonth(1);
        if (fin == null) fin = LocalDate.now();

        ByteArrayInputStream pdf = reporteExportService.generarReporteVentasPDF(inicio, fin);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "attachment; filename=reporte_ventas.pdf");

        return ResponseEntity.ok()
                .headers(headers)
                .contentType(MediaType.APPLICATION_PDF)
                .body(new InputStreamResource(pdf));
    }

    @GetMapping("/excel/ventas")
    public ResponseEntity<InputStreamResource> exportarVentasExcel(
            @RequestParam(required = false) LocalDate inicio,
            @RequestParam(required = false) LocalDate fin) {
        if (inicio == null) inicio = LocalDate.now().withDayOfMonth(1);
        if (fin == null) fin = LocalDate.now();

        ByteArrayInputStream excel = reporteExportService.generarReporteVentasExcel(inicio, fin);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "attachment; filename=reporte_ventas.xlsx");

        return ResponseEntity.ok()
                .headers(headers)
                .contentType(MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                .body(new InputStreamResource(excel));
    }
}
