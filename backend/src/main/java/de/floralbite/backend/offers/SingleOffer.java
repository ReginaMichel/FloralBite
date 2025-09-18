package de.floralbite.backend.offers;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "singleOffers")
public record SingleOffer(String id, String name, OfferCategory category, String description) {
}
