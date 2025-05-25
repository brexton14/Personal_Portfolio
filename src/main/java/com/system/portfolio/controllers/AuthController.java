package com.system.portfolio.controllers;

import com.system.portfolio.dto.LoginRequest;
import com.system.portfolio.entities.User;
import com.system.portfolio.services.UserRepository;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;
import com.system.portfolio.dto.RegisterRequest;
import org.springframework.security.crypto.password.PasswordEncoder;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "https://thebrextonexperience.com/") // Allow Angular to talk to backend
public class AuthController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthController(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest request) {
        boolean usernameExists = userRepository.findByUsername(request.getUsername()).isPresent();
        boolean emailExists = userRepository.findAll().stream().anyMatch(u -> u.getEmail().equals(request.getEmail()));

        if (usernameExists || emailExists) {
            return ResponseEntity.badRequest().body("Username or Email already exists");
        }

        User newUser = new User();
        newUser.setUsername(request.getUsername());
        newUser.setEmail(request.getEmail());
        newUser.setPassword(passwordEncoder.encode(request.getPassword()));

        userRepository.save(newUser);
        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest request) {
        Optional<User> user = userRepository.findByUsername(request.getUsername());

        if (user.isPresent() && passwordEncoder.matches(request.getPassword(), user.get().getPassword())) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }
}