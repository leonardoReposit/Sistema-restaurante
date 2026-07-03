package com.restaurante.service;

import com.lowagie.text.Chunk;
import com.lowagie.text.Document;
import com.lowagie.text.Element;
import com.lowagie.text.PageSize;
import com.lowagie.text.Paragraph;
import com.lowagie.text.Phrase;
import com.lowagie.text.pdf.PdfPCell;
import com.lowagie.text.pdf.PdfPTable;
import com.lowagie.text.pdf.PdfWriter;
import com.restaurante.dto.FacturaDTO;
import com.restaurante.repository.FacturaRepository;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReporteExportService {

    private final FacturaRepository facturaRepository;

    public ReporteExportService(FacturaRepository facturaRepository) {
        this.facturaRepository = facturaRepository;
    }

    public ByteArrayInputStream generarReporteVentasPDF(LocalDate inicio, LocalDate fin) {
        LocalDateTime inicioDT = inicio.atStartOfDay();
        LocalDateTime finDT = fin.atTime(LocalTime.MAX);

        List<FacturaDTO> facturas = facturaRepository.findByFechaBetween(inicioDT, finDT)
                .stream().map(this::toFacturaDTO).collect(Collectors.toList());

        Document document = new Document(PageSize.A4);
        ByteArrayOutputStream out = new ByteArrayOutputStream();

        try {
            PdfWriter.getInstance(document, out);
            document.open();

            com.lowagie.text.Font titleFont = com.lowagie.text.FontFactory.getFont(com.lowagie.text.FontFactory.HELVETICA_BOLD, 18);
            Paragraph title = new Paragraph("Reporte de Ventas", titleFont);
            title.setAlignment(Element.ALIGN_CENTER);
            document.add(title);

            Paragraph periodo = new Paragraph("Periodo: " + inicio + " al " + fin);
            periodo.setAlignment(Element.ALIGN_CENTER);
            document.add(periodo);
            document.add(Chunk.NEWLINE);

            PdfPTable table = new PdfPTable(5);
            table.setWidthPercentage(100);

            String[] headers = {"Serie", "Fecha", "Metodo Pago", "Subtotal", "Total"};
            for (String header : headers) {
                PdfPCell cell = new PdfPCell(new Phrase(header, com.lowagie.text.FontFactory.getFont(com.lowagie.text.FontFactory.HELVETICA_BOLD)));
                cell.setHorizontalAlignment(Element.ALIGN_CENTER);
                table.addCell(cell);
            }

            double totalGeneral = 0;
            for (FacturaDTO factura : facturas) {
                table.addCell(factura.getSerie());
                table.addCell(factura.getFecha().toLocalDate().toString());
                table.addCell(factura.getMetodoPago());
                table.addCell(factura.getSubtotal().toString());
                table.addCell(factura.getTotal().toString());
                totalGeneral += factura.getTotal().doubleValue();
            }

            document.add(table);
            document.add(Chunk.NEWLINE);
            document.add(new Paragraph("Total General: S/ " + String.format("%.2f", totalGeneral),
                    com.lowagie.text.FontFactory.getFont(com.lowagie.text.FontFactory.HELVETICA_BOLD)));

            document.close();
        } catch (Exception e) {
            throw new RuntimeException("Error al generar PDF: " + e.getMessage());
        }

        return new ByteArrayInputStream(out.toByteArray());
    }

    public ByteArrayInputStream generarReporteVentasExcel(LocalDate inicio, LocalDate fin) {
        LocalDateTime inicioDT = inicio.atStartOfDay();
        LocalDateTime finDT = fin.atTime(LocalTime.MAX);

        List<FacturaDTO> facturas = facturaRepository.findByFechaBetween(inicioDT, finDT)
                .stream().map(this::toFacturaDTO).collect(Collectors.toList());

        try (Workbook workbook = new XSSFWorkbook()) {
            Sheet sheet = workbook.createSheet("Reporte de Ventas");

            Row headerRow = sheet.createRow(0);
            String[] headers = {"Serie", "Fecha", "Metodo Pago", "Subtotal", "IGV", "Descuento", "Total"};
            for (int i = 0; i < headers.length; i++) {
                Cell cell = headerRow.createCell(i);
                cell.setCellValue(headers[i]);
                CellStyle style = workbook.createCellStyle();
                org.apache.poi.ss.usermodel.Font font = workbook.createFont();
                font.setBold(true);
                style.setFont(font);
                cell.setCellStyle(style);
            }

            int rowNum = 1;
            double totalGeneral = 0;
            for (FacturaDTO factura : facturas) {
                Row row = sheet.createRow(rowNum++);
                row.createCell(0).setCellValue(factura.getSerie());
                row.createCell(1).setCellValue(factura.getFecha().toLocalDate().toString());
                row.createCell(2).setCellValue(factura.getMetodoPago());
                row.createCell(3).setCellValue(factura.getSubtotal().doubleValue());
                row.createCell(4).setCellValue(factura.getIgv().doubleValue());
                row.createCell(5).setCellValue(factura.getDescuento().doubleValue());
                row.createCell(6).setCellValue(factura.getTotal().doubleValue());
                totalGeneral += factura.getTotal().doubleValue();
            }

            Row totalRow = sheet.createRow(rowNum);
            CellStyle style = workbook.createCellStyle();
            org.apache.poi.ss.usermodel.Font font = workbook.createFont();
            font.setBold(true);
            style.setFont(font);
            Cell totalCell = totalRow.createCell(5);
            totalCell.setCellValue("Total General:");
            totalCell.setCellStyle(style);
            totalRow.createCell(6).setCellValue(totalGeneral);

            for (int i = 0; i < headers.length; i++) {
                sheet.autoSizeColumn(i);
            }

            ByteArrayOutputStream out = new ByteArrayOutputStream();
            workbook.write(out);
            return new ByteArrayInputStream(out.toByteArray());
        } catch (Exception e) {
            throw new RuntimeException("Error al generar Excel: " + e.getMessage());
        }
    }

    private FacturaDTO toFacturaDTO(com.restaurante.entity.Factura factura) {
        FacturaDTO dto = new FacturaDTO();
        dto.setId(factura.getId());
        dto.setSerie(factura.getSerie());
        dto.setFecha(factura.getFecha());
        dto.setTipo(factura.getTipo().name());
        dto.setMetodoPago(factura.getMetodoPago().name());
        dto.setSubtotal(factura.getSubtotal());
        dto.setIgv(factura.getIgv());
        dto.setDescuento(factura.getDescuento());
        dto.setTotal(factura.getTotal());
        dto.setPedidoId(factura.getPedido().getId());
        return dto;
    }
}
