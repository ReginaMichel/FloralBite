package de.floralbite.backend.offers.models;

import java.util.List;

public record SavoryOfferDTO(String name, List<String> savoryDishes, List<String> sweetDishes, String price) {
}
