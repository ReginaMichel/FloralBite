package de.floralbite.backend.security;

import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserRequest;
import org.springframework.security.oauth2.core.oidc.OidcIdToken;
import org.springframework.security.oauth2.core.oidc.user.DefaultOidcUser;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;

import java.time.Instant;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class CustomOidcUserServiceTest {

    public static OidcUser fakeUser(String id, String email, String firstName) {
        OidcIdToken idToken = new OidcIdToken(
                "token-value",
                Instant.now(),
                Instant.now().plusSeconds(3600),
                Map.of(
                        "sub", id,
                        "email", email,
                        "given_name", firstName
                )
        );

        return new DefaultOidcUser(
                List.of(new SimpleGrantedAuthority("ROLE_USER")),
                idToken,
                "sub"
        );
    }

    @Test
    void loadUser_newUser_createsAndSaves() {
        AdminUserRepo repo = mock(AdminUserRepo.class);
        CustomOidcUserService service = spy(new CustomOidcUserService(repo));

        OidcUser fakeOidcUser = fakeUser("1234", "test1234@gmail.com", "Anton");
        doReturn(fakeOidcUser).when(service).fetchOidcUser(any(OidcUserRequest.class));

        when(repo.findById("1234")).thenReturn(Optional.empty());

        OidcUserRequest request = mock(OidcUserRequest.class);
        OidcUser result = service.loadUser(request);

        assertThat(result).isNotNull();
        assertThat(result.getAuthorities())
                .extracting("authority")
                .containsExactly("NEW_USER");

        ArgumentCaptor<AdminUser> userCaptor = ArgumentCaptor.forClass(AdminUser.class);
        verify(repo).save(userCaptor.capture());

        AdminUser savedUser = userCaptor.getValue();
        assertThat(savedUser.id()).isEqualTo("1234");
        assertThat(savedUser.email()).isEqualTo("test1234@gmail.com");
        assertThat(savedUser.firstName()).isEqualTo("Anton");
    }

    @Test
    void loadUser_userAlreadyExists() {
        AdminUserRepo repo = mock(AdminUserRepo.class);
        CustomOidcUserService service = spy(new CustomOidcUserService(repo));

        OidcUser fakeOidcUser = fakeUser("1234", "test1234@gmail.com", "Anton");
        AdminUser adminUser = new AdminUser("1234", "test1234@gmail.com", "Anton", "ADMIN");
        doReturn(fakeOidcUser).when(service).fetchOidcUser(any(OidcUserRequest.class));

        when(repo.findById("1234")).thenReturn(Optional.of(adminUser));

        OidcUserRequest request = mock(OidcUserRequest.class);
        OidcUser result = service.loadUser(request);

        assertThat(result).isNotNull();

        assertThat(result.getAuthorities())
                .extracting("authority")
                .containsExactly("ADMIN");

        // Überprüft, dass kein neuer User hinzugefügt wurde!
        verify(repo, never()).save(any());

        assertThat((String) result.getAttribute("sub")).isEqualTo("1234");
        assertThat((String) result.getAttribute("email")).isEqualTo("test1234@gmail.com");
        assertThat((String) result.getAttribute("given_name")).isEqualTo("Anton");
    }
}