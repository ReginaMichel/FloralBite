package de.floralbite.backend.messages;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import static org.mockito.Mockito.*;

class MailServiceTest {

    private MessageRepo repo;
    private IdService idService;
    private MailService mailService;
    private Message message;
    private MessageDTO messageDTO;
    private JavaMailSender mailSender;

    @BeforeEach
    void setUp() {
        this.repo = mock(MessageRepo.class);
        this.idService = mock(IdService.class);
        this.mailSender = mock(JavaMailSender.class);
        this.mailService = new MailService(repo, idService, mailSender);
        this.message = new Message("1","Karen","feedback","karen@mail.de","0123","Hi");
        this.messageDTO = new MessageDTO("Karen","feedback","karen@mail.de","0123","Hi");
    }

    @Test
    void addMessage() {
        // GIVEN
        when(repo.save(message)).thenReturn(message);
        // WHEN
        mailService.addMessage(message);
        // THEN
        verify(repo, times(1)).save(any(Message.class));
        verify(repo, never()).findById("1");
    }

    @Test
    void handleContactMessage() {
        // GIVEN
        when(idService.newId()).thenReturn("1");
        when(repo.save(any(Message.class))).thenReturn(message);
        // WHEN
        mailService.handleContactMessage(messageDTO);
        // THEN
        verify(idService, times(1)).newId();
        verify(mailSender, times(2)).send(any(SimpleMailMessage.class));
        verify(repo, times(1)).save(any(Message.class));
    }
}