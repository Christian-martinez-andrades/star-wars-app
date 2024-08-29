package com.mercedesbenz.starwars.starwarsback.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class StarWarsConfig {

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}

