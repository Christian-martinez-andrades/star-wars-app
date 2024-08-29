package com.mercedesbenz.starwars.starwarsback.service;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.mercedesbenz.starwars.starwarsback.domain.Planets;
import com.mercedesbenz.starwars.starwarsback.repository.PlanetsRepository;
import com.mercedesbenz.starwars.starwarsback.sort.planets.PlanetsSortStrategyInterface;

@Service
public class PlanetsService {

    @Autowired
    private PlanetsRepository planetsRepository;

    private static final String SWAPI_PLANETS_URL = "https://swapi.dev/api/planets/";

    @Autowired
    private RestTemplate restTemplate;

    public List<Planets> getAll() {
        return this.planetsRepository.findAll();
    }

    private PlanetsSortStrategyInterface sortStrategy;

    public void setSortStrategy(PlanetsSortStrategyInterface sortStrategy) {
        this.sortStrategy = sortStrategy;
    }

    public List<Planets> getSortedPlanets(List<Planets> planets, boolean ascending) {
        return sortStrategy.sort(planets, ascending);
    }

    // MÉTODO PARA INSERTAR DATOS
    public void getAndSavePlanets() {
        String nextUrl = SWAPI_PLANETS_URL;

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
