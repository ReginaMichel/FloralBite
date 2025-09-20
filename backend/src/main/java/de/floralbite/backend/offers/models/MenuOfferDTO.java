package de.floralbite.backend.offers.models;

import java.util.List;

public record MenuOfferDTO(String name, List<String> starters, List<String> mainDishes, List<String> desserts, String price) {
}
