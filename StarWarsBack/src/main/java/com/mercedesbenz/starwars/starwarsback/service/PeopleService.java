package com.mercedesbenz.starwars.starwarsback.service;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.mercedesbenz.starwars.starwarsback.domain.People;
import com.mercedesbenz.starwars.starwarsback.repository.PeopleRepository;
import com.mercedesbenz.starwars.starwarsback.sort.people.PeopleCreatedSortStrategy;
import com.mercedesbenz.starwars.starwarsback.sort.people.PeopleNameSortStrategy;
import com.mercedesbenz.starwars.starwarsback.sort.people.PeopleSortStrategyInterface;

@Service
public class PeopleService {

    @Value("${app.apidatasource.url}")
    private String apidatasource;

    private static final String SWAPI_PEOPLE_URL = "/people/";

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private PeopleRepository peopleRepository;

    private PeopleSortStrategyInterface sortStrategy;

    public List<People> getAll(String sort, String order) {
        List<People> people = this.peopleRepository.findAll();
        boolean direction = "asc".equalsIgnoreCase(order);
        
        return getSortedPeopleSelector(people, sort, direction);
    }

    private List<People> getSortedPeopleSelector(List<People> people, String sortBy, boolean direction) {
        switch (sortBy.toLowerCase()) {
            case "name":
                sortStrategy = new PeopleNameSortStrategy();
                break;
            case "created":
                sortStrategy = new PeopleCreatedSortStrategy();
                break;
            default:
                return people;
        }

        return getSortedPeople(people, direction);
    }

    private List<People> getSortedPeople(List<People> people, boolean ascending) {
        return sortStrategy.sort(people, ascending);
    }

    // MÉTODO PARA INSERTAR DATOS
    public void getAndSavePeople() {
        String nextUrl = this.apidatasource + SWAPI_PEOPLE_URL;

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
