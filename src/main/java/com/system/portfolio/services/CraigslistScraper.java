package com.system.portfolio.services;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.util.*;

public class CraigslistScraper {

    public static List<Map<String, String>> scrapeCity(String city) throws Exception {
        List<String> allowedCities = Arrays.asList(
                "Saint Petersburg", "Tampa", "Trinity", "Wesley Chapel", "Zephyrhills",
                "Ybor", "New Port Richey", "Holiday", "Brandon", "Clearwater", "Odessa"
        );// allowed cities

        if (!allowedCities.contains(city)) {
            throw new IllegalArgumentException("Invalid city: " + city);
        }// prevents illegal cities
        // set of found items mapped with location and link
        Set<String> foundItems = new HashSet<>();
        List<Map<String, String>> results = new ArrayList<>();

        for (int page = 1; page <= 2; page++) {
            String url = "https://tampa.craigslist.org/search/zip?language=5&query=free&srchType=T#search=1~list~" + page;

            Document doc = Jsoup.connect(url).get();
            Elements postings = doc.select("li.cl-static-search-result");

            for (Element post : postings) {
                Element titleEl = post.selectFirst("div.title");
                Element linkEl = post.selectFirst("a");
                Element locationEl = post.selectFirst("div.location");
                // checking if matching and that is not null
                if (titleEl != null && linkEl != null && locationEl != null) {
                    String title = titleEl.text();
                    String link = linkEl.attr("href");
                    String location = locationEl.text();

                    if (location.toLowerCase().contains(city.toLowerCase()) && !foundItems.contains(link)) {
                        foundItems.add(link);
                        Map<String, String> item = new HashMap<>();
                        item.put("title", title);
                        item.put("link", link);
                        item.put("location", location);
                        results.add(item);
                    }
                }
            }
        }

        return results;
    }
}