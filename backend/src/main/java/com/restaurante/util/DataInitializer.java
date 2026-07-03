package com.restaurante.util;

import com.restaurante.entity.*;
import com.restaurante.repository.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    private final UsuarioRepository usuarioRepository;
    private final CategoriaRepository categoriaRepository;
    private final PasswordEncoder passwordEncoder;

    public DataInitializer(UsuarioRepository usuarioRepository,
                           CategoriaRepository categoriaRepository,
                           PasswordEncoder passwordEncoder) {
        this.usuarioRepository = usuarioRepository;
        this.categoriaRepository = categoriaRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) {
        if (usuarioRepository.count() == 0) {
            Usuario admin = new Usuario("admin", passwordEncoder.encode("admin123"),
                    "Administrador", "Principal", Rol.ADMINISTRADOR);
            admin.setEmail("admin@restaurante.com");
            usuarioRepository.save(admin);

            Usuario mesero = new Usuario("mesero", passwordEncoder.encode("mesero123"),
                    "Juan", "Perez", Rol.MESERO);
            usuarioRepository.save(mesero);

            Usuario cocinero = new Usuario("cocinero", passwordEncoder.encode("cocina123"),
                    "Carlos", "Lopez", Rol.COCINERO);
            usuarioRepository.save(cocinero);

            Usuario cajero = new Usuario("cajero", passwordEncoder.encode("cajero123"),
                    "Maria", "Garcia", Rol.CAJERO);
            usuarioRepository.save(cajero);
        }

        if (categoriaRepository.count() == 0) {
            categoriaRepository.save(new Categoria("Entradas"));
            categoriaRepository.save(new Categoria("Platos Principales"));
            categoriaRepository.save(new Categoria("Bebidas"));
            categoriaRepository.save(new Categoria("Postres"));
        }
    }
}
