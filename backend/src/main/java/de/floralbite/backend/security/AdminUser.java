package de.floralbite.backend.security;

import lombok.Builder;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Builder
@Document(collection = "adminUser")
public record AdminUser(
        @Id String id,
        String email,
        String firstName,
        String role) {
}