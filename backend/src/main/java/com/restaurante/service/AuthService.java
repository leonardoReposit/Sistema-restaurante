package com.restaurante.service;

import com.restaurante.dto.LoginRequest;
import com.restaurante.dto.LoginResponse;
import com.restaurante.dto.UsuarioDTO;
import com.restaurante.entity.Rol;
import com.restaurante.entity.Usuario;
import com.restaurante.repository.UsuarioRepository;
import com.restaurante.security.JwtTokenProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;

    public AuthService(UsuarioRepository usuarioRepository,
                       PasswordEncoder passwordEncoder,
                       JwtTokenProvider jwtTokenProvider) {
        this.usuarioRepository = usuarioRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    public LoginResponse login(LoginRequest request) {
        Usuario usuario = usuarioRepository.findByUsername(request.getUsername())
                .orElseThrow(() -> new BadCredentialsException("Credenciales invalidas"));

        if (!passwordEncoder.matches(request.getPassword(), usuario.getPassword())) {
            throw new BadCredentialsException("Credenciales invalidas");
        }

        if (!usuario.getEnabled()) {
            throw new BadCredentialsException("Usuario deshabilitado");
        }

        String token = jwtTokenProvider.generateToken(usuario.getUsername(), usuario.getRol().name());

        return new LoginResponse(token, usuario.getId(), usuario.getUsername(),
                usuario.getNombre(), usuario.getApellido(), usuario.getRol().name());
    }
}
