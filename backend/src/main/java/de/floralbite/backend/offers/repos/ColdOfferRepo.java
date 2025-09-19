package de.floralbite.backend.offers.repos;

import de.floralbite.backend.offers.models.ColdOffer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ColdOfferRepo extends MongoRepository<ColdOffer, String> {
}
