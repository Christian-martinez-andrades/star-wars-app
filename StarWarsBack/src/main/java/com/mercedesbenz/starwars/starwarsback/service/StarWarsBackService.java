package com.mercedesbenz.starwars.starwarsback.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class StarWarsBackService {
    private static final Logger logger = LoggerFactory.getLogger(StarWarsBackService.class);

    @Autowired
    PeopleService peopleService;

    @Autowired
    PlanetsService planetsService;

    public void getAndSaveData() {
       this.peopleService.getAndSavePeople();
       this.planetsService.getAndSavePlanets();
    }
 
}

