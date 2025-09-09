package de.floralbite.backend.messages;

import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class MailService {

    private final MessageRepo messageRepo;
    private final IdService idService;

    public MailService(MessageRepo messageRepo, IdService idService) {
        this.messageRepo = messageRepo;
        this.idService = idService;
    }

    public void handleContactMessage(MessageDTO messageDTO) {
        String requestId = idService.newId();
        Message message = new Message(requestId,
                messageDTO.name(), messageDTO.subject(), messageDTO.email(), messageDTO.phoneNumber(), messageDTO.message());
        this.sendMailToOwner(message);
        this.sendMailToUser(message);
        this.addMessage(message);
    }

    public void sendMailToOwner(Message message) {

    }

    public void sendMailToUser(Message message) {

    }

    public void addMessage(Message message) {
        messageRepo.save(message);
    }
}
