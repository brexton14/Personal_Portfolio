package com.system.portfolio.dto;

import lombok.Data;

@Data
public class RegisterRequest {
    private String username;
    private String password;
    private String email; // email is just used as a holder to prevent multiple accounts
}