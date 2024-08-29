package com.mercedesbenz.starwars.starwarsback.service;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

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

