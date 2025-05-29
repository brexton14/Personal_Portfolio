package com.system.portfolio.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.system.portfolio.services.CraigslistScraper;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/scraper")
@CrossOrigin(origins = "https://thebrextonexperience.com")
public class ScraperController {

    @GetMapping
    public ResponseEntity<?> scrape(@RequestBody Map<String, String> payload) {// title, location, link
        String city = payload.get("city");
        // checking if city matches list of cities
        if (city == null || city.isBlank()) {
            return ResponseEntity.badRequest().body(Map.of("error", "City is required"));
        }
        // returning response either results or error 500
        try {
            List<Map<String, String>> results = CraigslistScraper.scrapeCity(city);
            return ResponseEntity.ok(results);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("error", e.getMessage()));
        }
    }
}
