package com.system.portfolio.entities;

import jakarta.persistence.*;
import lombok.Data;


@Data
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; //primary

    @Column(nullable = false, unique = true)
    private String username; //unique

    @Column(nullable = false, unique = true)
    private String email; //unique - prevents multiple accounts on one email

    @Column(nullable = false)
    private String password;

}