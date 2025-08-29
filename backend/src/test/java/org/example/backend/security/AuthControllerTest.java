package org.example.backend.security;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.oauth2.core.oidc.StandardClaimNames;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.oidcLogin;

@SpringBootTest
@AutoConfigureMockMvc
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
class AuthControllerTest {


    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private AdminUserRepo userRepo;

    @BeforeEach
    void setUp(){
        AdminUser user = new AdminUser("123", "test@gmail.com", "Marie", "ADMIN");
        userRepo.save(user);
    }

    @Test
    void getMe_returnsUserFromDb() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/auth/me")
                        .with(oidcLogin()
                                .idToken(t -> t.claim(StandardClaimNames.SUB, "123"))
                        ))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().contentType("application/json"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").value("123"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.email").value("test@gmail.com"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.firstName").value("Marie"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.role").value("ADMIN"));

    }

    @Test
    void getMe_returns404_whenUserNotFound() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/auth/me")
                        .with(oidcLogin()
                                .idToken(t -> t.claim(StandardClaimNames.SUB, "999"))
                        ))
                .andExpect(MockMvcResultMatchers.status().isNotFound());

    }
}