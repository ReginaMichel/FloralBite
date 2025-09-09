package de.floralbite.backend.messages;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailService {

    private final MessageRepo messageRepo;
    private final IdService idService;
    private final JavaMailSender mailSender;
    @Value("${HETZNER_USER}")
    private String fromAddress;

    public MailService(MessageRepo messageRepo, IdService idService, JavaMailSender mailSender) {
        this.messageRepo = messageRepo;
        this.idService = idService;
        this.mailSender = mailSender;
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
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(message.email());
        mailMessage.setSubject("Vielen Dank für deine Nachricht!");
        mailMessage.setText("Hallo " + message.name() + ",\n\n" +
                "vielen Dank für deine Nachricht. Ich werde mich so bald wie möglich bei dir melden." + "\n\n" +
                "Viele Grüße" + "\n" + "Julia von FloralBite" + "\n\n" +
                "Deine Nachricht:" + "\n\"" + message.message() + "\"");
        mailMessage.setFrom(fromAddress);
        mailSender.send(mailMessage);
    }

    public void addMessage(Message message) {
        messageRepo.save(message);
    }
}
