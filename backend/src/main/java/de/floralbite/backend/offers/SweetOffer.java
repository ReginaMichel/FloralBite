package de.floralbite.backend.offers;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "sweetOffers")
public record SweetOffer(String id, String name, SweetOfferCategory category, String description) {
}
