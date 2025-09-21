package de.floralbite.backend.offers.repos;

import de.floralbite.backend.offers.models.SavoryOffer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SavoryOfferRepo extends MongoRepository<SavoryOffer, String> {
}
