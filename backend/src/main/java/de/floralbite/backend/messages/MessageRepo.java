package de.floralbite.backend.messages;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageRepo extends MongoRepository<MessageDTO, String> {
}
