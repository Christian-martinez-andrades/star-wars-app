package com.mercedesbenz.starwars.starwarsback;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import com.mercedesbenz.starwars.starwarsback.service.StarWarsBackService;

@SpringBootApplication
@EnableWebMvc
@EnableJpaRepositories(basePackages = { "com.mercedesbenz.starwars.starwarsback.repository" })
@ComponentScan(basePackages = { "com.mercedesbenz.starwars.starwarsback.controller",
		"com.mercedesbenz.starwars.starwarsback.service",
		"com.mercedesbenz.starwars.starwarsback.config" })
@EntityScan("com.mercedesbenz.starwars.starwarsback.domain")
public class StarWarsBackApplication implements CommandLineRunner {

    private static final Logger logger = LoggerFactory.getLogger(StarWarsBackApplication.class);
	@Autowired
	private StarWarsBackService starWarsBackService;

	public static void main(String[] args) {
		SpringApplication.run(StarWarsBackApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		starWarsBackService.getAndSaveData();
		logger.info("TODOS LOS DATOS HAN SIDO INSERTADOS CON ÉXITO");

	}


}
