package com.mercedesbenz.starwars.starwarsback.service;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.mercedesbenz.starwars.starwarsback.domain.Planets;
import com.mercedesbenz.starwars.starwarsback.repository.PlanetsRepository;
import com.mercedesbenz.starwars.starwarsback.sort.planets.PlanetsCreatedSortStrategy;
import com.mercedesbenz.starwars.starwarsback.sort.planets.PlanetsNameSortStrategy;
import com.mercedesbenz.starwars.starwarsback.sort.planets.PlanetsSortStrategyInterface;

@Service
public class PlanetsService {

    @Autowired
    private PlanetsRepository planetsRepository;

    @Value("${app.apidatasource.url}")
    private String apidatasource;

    private static final String SWAPI_PLANETS_URL = "/planets/";

    @Autowired
    private RestTemplate restTemplate;

    private PlanetsSortStrategyInterface sortStrategy;

    public List<Planets> getAll(String sort, String order) {
        List<Planets> planets = this.planetsRepository.findAll();
        boolean direction = "asc".equalsIgnoreCase(order);
        
        return getSortedPlanetsSelector(planets, sort, direction);
    }

    private List<Planets> getSortedPlanetsSelector(List<Planets> people, String sortBy, boolean direction) {
        switch (sortBy.toLowerCase()) {
            case "name":
                sortStrategy = new PlanetsNameSortStrategy();
                break;
            case "created":
                sortStrategy = new PlanetsCreatedSortStrategy();
                break;
            default:
                return people;
        }

        return getSortedPlanets(people, direction);
    }

    private List<Planets> getSortedPlanets(List<Planets> planets, boolean ascending) {
        return sortStrategy.sort(planets, ascending);
    }

    // MÉTODO PARA INSERTAR DATOS
    public void getAndSavePlanets() {
        String nextUrl = this.apidatasource + SWAPI_PLANETS_URL;

        while (nextUrl != null) {
            ApiResponse response = restTemplate.getForObject(nextUrl, ApiResponse.class);

            if (response != null && response.getResults() != null) {
                planetsRepository.saveAll(Arrays.asList(response.getResults()));
            }

            nextUrl = response != null ? response.getNext() : null;
        }
    }

    private static class ApiResponse {
        private String next;
        private Planets[] results;

        public String getNext() {
            return next;
        }

        public Planets[] getResults() {
            return results;
        }
    }
}
