package de.floralbite.backend.offers.models;

import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "savoryOffers")
public record SavoryOffer(String id, String name, List<String> savoryDishes, List<String> sweetDishes, String price) {
}
