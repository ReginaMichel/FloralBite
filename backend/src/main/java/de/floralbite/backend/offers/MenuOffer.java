package de.floralbite.backend.offers;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "menuOffers")
public record MenuOffer(String id, String name, OfferCategory category, String content, String price) {
}
