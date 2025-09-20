package de.floralbite.backend.offers.models;

import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "menuOffers")
public record MenuOffer(String id, String name, List<String> starters, List<String> mainDishes, List<String> desserts, String price) {
}
