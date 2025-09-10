package de.floralbite.backend.messages;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/contact")
public class MailController {

    private final MailService mailService;

    public MailController(MailService mailService) {
        this.mailService = mailService;
    }

    // Leitet die Message an den Service weiter, und returned ohne Rückgabe Inhalt, die HTTP-Message 200 Ok.
    @PostMapping
    public ResponseEntity<Void> handleContactMessage(@RequestBody MessageDTO message) {
        mailService.handleContactMessage(message);
        return ResponseEntity.ok().build();
    }
}
