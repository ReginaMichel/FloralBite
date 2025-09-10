package de.floralbite.backend.messages;

import org.springframework.stereotype.Service;
import java.util.UUID;

@Service
public class IdService {

    public String newId() {
        return UUID.randomUUID().toString();
    }
}
