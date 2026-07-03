package com.restaurante.controller;

import com.restaurante.dto.MensajeResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/configuracion")
public class ConfiguracionController {

    private String nombreRestaurante = "Mi Restaurante";
    private String moneda = "PEN";
    private double igv = 0.18;
    private String logoUrl = "";

    @GetMapping
    public ResponseEntity<Map<String, Object>> obtenerConfiguracion() {
        Map<String, Object> config = new HashMap<>();
        config.put("nombreRestaurante", nombreRestaurante);
        config.put("moneda", moneda);
        config.put("igv", igv);
        config.put("logoUrl", logoUrl);
        return ResponseEntity.ok(config);
    }

    @PutMapping
    public ResponseEntity<MensajeResponse> actualizarConfiguracion(@RequestBody Map<String, Object> config) {
        if (config.containsKey("nombreRestaurante"))
            this.nombreRestaurante = (String) config.get("nombreRestaurante");
        if (config.containsKey("moneda"))
            this.moneda = (String) config.get("moneda");
        if (config.containsKey("igv"))
            this.igv = ((Number) config.get("igv")).doubleValue();
        if (config.containsKey("logoUrl"))
            this.logoUrl = (String) config.get("logoUrl");
        return ResponseEntity.ok(MensajeResponse.ok("Configuracion actualizada"));
    }
}
