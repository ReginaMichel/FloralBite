package de.floralbite.backend.offers.repos;

import de.floralbite.backend.offers.models.MenuOffer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MenuOfferRepo extends MongoRepository<MenuOffer, String> {
}
