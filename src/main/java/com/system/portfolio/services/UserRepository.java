package com.system.portfolio.services;

import com.system.portfolio.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
// finding user by username, uses SQL search
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);

}
