package com.mercedesbenz.starwars.starwarsback.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

@Configuration
public class SwaggerConfig {
	
	@Bean
	public Docket apiDocket() {
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.apis(RequestHandlerSelectors.basePackage("com.mercedesbez.starwars.StarWarsBack.controller"))
				.paths(PathSelectors.any())
				.build()
				;
	}
	
	@Bean
	  public InternalResourceViewResolver defaultViewResolver() {
	    return new InternalResourceViewResolver();
	  }
}
