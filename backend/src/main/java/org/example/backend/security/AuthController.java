package org.example.backend.security;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.Objects;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AdminUserRepo userRepo;

    @GetMapping
    public AdminUser getUser(@AuthenticationPrincipal OAuth2User user) {
        return userRepo.findById(user.getName())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));
    }

    @GetMapping("/me")
    public String getUserName(@AuthenticationPrincipal OAuth2User user) {
        return Objects.requireNonNull(user.getAttribute("sub")).toString()
                +Objects.requireNonNull(user.getAttribute("given_name"));
    }
}
