package de.floralbite.backend.messages;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import static org.mockito.Mockito.*;

import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@SpringBootTest
@AutoConfigureMockMvc
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
class MailControllerTest {

    @Autowired
    private MockMvc mockMvc;

    // MailService muss gemockt werden, da der Test sonst versucht, den realen Mail Server aufzurufen.
    @MockitoBean
    private MailService mailService;

    @Test
    void handleContactMessage() throws Exception {
        doNothing().when(mailService).handleContactMessage(any(MessageDTO.class));

        mockMvc.perform(MockMvcRequestBuilders.post("/api/contact")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                  {
                      "name": "Andrea Seufert",
                      "subject": "other",
                      "email": "as@test.de",
                      "phoneNumber": "0123456789",
                      "message": "Hallo, ich würde gerne Catering buchen."
                  }
                """
                        ))
                .andExpect(MockMvcResultMatchers.status().isOk());

        verify(mailService, times(1)).handleContactMessage(any(MessageDTO.class));
    }
}