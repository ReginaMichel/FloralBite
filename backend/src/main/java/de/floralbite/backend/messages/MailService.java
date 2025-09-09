package de.floralbite.backend.messages;

import org.springframework.stereotype.Service;

@Service
public class MailService {

    private final MessageRepo messageRepo;

    public MailService(MessageRepo messageRepo) {
        this.messageRepo = messageRepo;
    }
}
