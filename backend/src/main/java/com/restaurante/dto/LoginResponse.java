package com.restaurante.dto;

public class LoginResponse {
    private String token;
    private String tipo = "Bearer";
    private Long id;
    private String username;
    private String nombre;
    private String apellido;
    private String rol;

    public LoginResponse(String token, Long id, String username, String nombre, String apellido, String rol) {
        this.token = token;
        this.id = id;
        this.username = username;
        this.nombre = nombre;
        this.apellido = apellido;
        this.rol = rol;
    }

    public String getToken() { return token; }
    public void setToken(String token) { this.token = token; }
    public String getTipo() { return tipo; }
    public Long getId() { return id; }
    public String getUsername() { return username; }
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public String getApellido() { return apellido; }
    public void setApellido(String apellido) { this.apellido = apellido; }
    public String getRol() { return rol; }
}
