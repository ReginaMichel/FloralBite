package org.example.backend.security;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.core.oidc.user.DefaultOidcUser;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserRequest;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomOidcUserService extends OidcUserService {

    private final AdminUserRepo userRepo;

    private AdminUser createAdminUser(OidcUser oidcUser) {
        AdminUser newUser = AdminUser.builder()
                .id(oidcUser.getSubject())
                .email(oidcUser.getEmail())
                .firstName((String) oidcUser.getAttributes().get("given_name"))
                .role("ADMIN")
                .build();
        userRepo.save(newUser);
        return newUser;
    }

    @Override
    public OidcUser loadUser(OidcUserRequest userRequest) throws OAuth2AuthenticationException {
        OidcUser oidcUser = super.loadUser(userRequest);

        System.out.println("🔐 OIDC User Info: " + oidcUser.getAttributes());

        String id = oidcUser.getSubject();
        AdminUser adminUser = userRepo.findById(id).orElseGet(() -> createAdminUser(oidcUser));

        return new DefaultOidcUser(
                List.of(new SimpleGrantedAuthority(adminUser.role())),
                oidcUser.getIdToken(),
                oidcUser.getUserInfo(),
                "sub"
        );
    }
}