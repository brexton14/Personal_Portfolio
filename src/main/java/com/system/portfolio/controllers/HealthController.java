package com.system.portfolio.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {
    @GetMapping("/") // to check health of main backend page
    public String health() {
        return "OK";
    }
}

