package com.restaurante.config;

import com.restaurante.security.JwtAuthenticationFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    public SecurityConfig(JwtAuthenticationFilter jwtAuthenticationFilter) {
        this.jwtAuthenticationFilter = jwtAuthenticationFilter;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
            .csrf(csrf -> csrf.disable())
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/auth/**").permitAll()
                .requestMatchers("/docs/**", "/swagger-ui/**").permitAll()
                // ADMINISTRADOR only
                .requestMatchers("/usuarios/**", "/ingredientes/**", "/movimientos-inventario/**",
                                 "/proveedores/**", "/configuracion/**").hasRole("ADMINISTRADOR")
                // ADMIN + CAJERO
                .requestMatchers("/facturas/**", "/reportes/**").hasAnyRole("ADMINISTRADOR", "CAJERO")
                // ADMIN + MESERO
                .requestMatchers("/mesas/**", "/clientes/**", "/platillos/**", "/categorias/**")
                        .hasAnyRole("ADMINISTRADOR", "MESERO")
                // ADMIN + MESERO can create/update pedidos; COCINERO can change estado
                .requestMatchers(HttpMethod.POST, "/pedidos/**").hasAnyRole("ADMINISTRADOR", "MESERO")
                .requestMatchers(HttpMethod.PATCH, "/pedidos/**").hasAnyRole("ADMINISTRADOR", "MESERO", "COCINERO")
                .requestMatchers(HttpMethod.DELETE, "/pedidos/**").hasAnyRole("ADMINISTRADOR", "MESERO")
                .requestMatchers("/pedidos/cocina/**").hasAnyRole("ADMINISTRADOR", "COCINERO")
                .requestMatchers(HttpMethod.GET, "/pedidos/**").hasAnyRole("ADMINISTRADOR", "MESERO", "COCINERO", "CAJERO")
                .requestMatchers("/pedidos/**").hasAnyRole("ADMINISTRADOR", "MESERO")
                // Dashboard - all authenticated
                .requestMatchers("/dashboard/**").authenticated()
                .anyRequest().authenticated()
            )
            .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(List.of("http://localhost:4200"));
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"));
        config.setAllowedHeaders(List.of("*"));
        config.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return source;
    }
}
