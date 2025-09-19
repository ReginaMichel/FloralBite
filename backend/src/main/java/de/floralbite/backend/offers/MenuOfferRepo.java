package de.floralbite.backend.offers;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MenuOfferRepo extends MongoRepository<MenuOffer, String> {
}
