package de.floralbite.backend.messages;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "contactMessages")
public record Message(String id, String name, String subject, String email, String phoneNumber, String message) {
}