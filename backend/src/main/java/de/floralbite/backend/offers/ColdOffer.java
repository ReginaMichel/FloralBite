package de.floralbite.backend.offers;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "coldOffers")
public record ColdOffer(String id, String name, ColdOfferCategory category, String description) {
}
