package de.floralbite.backend.messages;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "contactMessages")
public record MessageDTO(String name, String subject, String email, String phoneNumber, String message) {
}
