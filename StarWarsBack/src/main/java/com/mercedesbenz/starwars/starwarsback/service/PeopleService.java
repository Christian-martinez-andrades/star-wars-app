package com.mercedesbenz.starwars.starwarsback.service;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.mercedesbenz.starwars.starwarsback.domain.People;
import com.mercedesbenz.starwars.starwarsback.repository.PeopleRepository;
import com.mercedesbenz.starwars.starwarsback.sort.people.PeopleSortStrategyInterface;

@Service
public class PeopleService {

    private static final String SWAPI_PEOPLE_URL = "https://swapi.dev/api/people/";

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private PeopleRepository peopleRepository;

    public List<People> getAll() {
        return this.peopleRepository.findAll();
    }

    private PeopleSortStrategyInterface sortStrategy;

    public void setSortStrategy(PeopleSortStrategyInterface sortStrategy) {
        this.sortStrategy = sortStrategy;
    }

    public List<People> getSortedPeople(List<People> people, boolean ascending) {
        return sortStrategy.sort(people, ascending);
    }

    // MÉTODO PARA INSERTAR DATOS
    public void getAndSavePeople() {
        String nextUrl = SWAPI_PEOPLE_URL;

        while (nextUrl != null) {
            ApiResponse response = restTemplate.getForObject(nextUrl, ApiResponse.class);

            if (response != null && response.getResults() != null) {
                peopleRepository.saveAll(Arrays.asList(response.getResults()));
            }

            nextUrl = response != null ? response.getNext() : null;
        }
    }

    private static class ApiResponse {
        private String next;
        private People[] results;

        public String getNext() {
            return next;
        }

        public People[] getResults() {
            return results;
        }
    }
}
