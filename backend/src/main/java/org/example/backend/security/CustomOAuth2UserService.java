package org.example.backend.security;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    private final AdminUserRepo userRepo;

    private AdminUser createAdminUser(OAuth2User oAuth2User) {
        AdminUser newUser = AdminUser.builder()
                .id(oAuth2User.getAttribute("sub"))
                .email(oAuth2User.getAttribute("email"))
                .firstName(oAuth2User.getAttribute("given_name"))
                .role("ADMIN")
                .build();
        return userRepo.save(newUser);
    }

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = fetchOAuth2User(userRequest);
        String id = "none";
        if (oAuth2User.getAttribute("sub") != null) {
            id = oAuth2User.getAttribute("sub");
        }
        AdminUser adminUser = userRepo.findById(id).orElseGet(
                () -> createAdminUser(oAuth2User)
        );
        return new DefaultOAuth2User(List.of(new SimpleGrantedAuthority(
                adminUser.role())),
                oAuth2User.getAttributes(),"sub");
    }

    protected OAuth2User fetchOAuth2User(OAuth2UserRequest req) {
        return super.loadUser(req);
    }
}
