package com.restaurante.dto;

public class MensajeResponse {
    private String mensaje;
    private boolean success;

    public MensajeResponse(String mensaje, boolean success) {
        this.mensaje = mensaje;
        this.success = success;
    }

    public String getMensaje() { return mensaje; }
    public void setMensaje(String mensaje) { this.mensaje = mensaje; }
    public boolean isSuccess() { return success; }
    public void setSuccess(boolean success) { this.success = success; }

    public static MensajeResponse ok(String mensaje) {
        return new MensajeResponse(mensaje, true);
    }

    public static MensajeResponse error(String mensaje) {
        return new MensajeResponse(mensaje, false);
    }
}
