package com.mercedesbenz.starwars.starwarsback.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mercedesbenz.starwars.starwarsback.domain.Planets;
import com.mercedesbenz.starwars.starwarsback.service.PlanetsService;

@RestController
@RequestMapping("/api/planets")
public class PlanetsController {
    private final Logger logger = LoggerFactory.getLogger(Controller.class);

    @Autowired
    private PlanetsService planetsService;

    @GetMapping(value = "", produces = "application/json")
    ResponseEntity<List<Planets>> getAll() {

        return new ResponseEntity<>(this.planetsService.getAll(), HttpStatus.OK);
    }

}
