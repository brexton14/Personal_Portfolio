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

    @PostMapping
    public ResponseEntity<?> scrape(@RequestBody Map<String, String> payload) {
        String city = payload.get("city");

        if (city == null || city.isBlank()) {
            return ResponseEntity.badRequest().body(Map.of("error", "City is required"));
        }

        try {
            List<Map<String, String>> results = CraigslistScraper.scrapeCity(city);
            System.out.println("City requested: " + city);
            System.out.println("Scraped results count: " + results.size());
            return ResponseEntity.ok(results);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("error", e.getMessage()));
        }
    }
}
