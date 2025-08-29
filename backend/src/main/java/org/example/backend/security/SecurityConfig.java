package org.example.backend.security;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@SuppressWarnings("java:S4502")
public class SecurityConfig {
    @Value("${app.url}")
    String appUrl;

    private final CustomOAuth2UserService customOAuth2UserService;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http.csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(a -> a
                        .requestMatchers("/api/admin").hasAuthority("ADMIN")
                        .requestMatchers("/api/auth").authenticated()
                        .anyRequest().permitAll())
                .logout(l -> l.logoutSuccessUrl(appUrl))
                .oauth2Login(o -> o
                        .userInfoEndpoint(ui -> ui.userService(customOAuth2UserService))
                        .defaultSuccessUrl(appUrl+"login"));

        return http.build();
    }
}
