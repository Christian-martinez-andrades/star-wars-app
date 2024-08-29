package com.mercedesbenz.starwars.starwarsback.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mercedesbenz.starwars.starwarsback.domain.People;
import com.mercedesbenz.starwars.starwarsback.service.PeopleService;

@RestController
@RequestMapping("/api/people")
public class PeopleController {
    private final Logger logger = LoggerFactory.getLogger(Controller.class);

    @Autowired
    private PeopleService peopleService;

    @GetMapping(value = "/", produces = "application/json")
    public ResponseEntity<List<People>> getAll(
        @RequestParam(value = "sort", defaultValue = "") String sort,
        @RequestParam(value = "order", defaultValue = "") String order) {
    
        List<People> people = this.peopleService.getAll(sort, order);
        return new ResponseEntity<>(people, HttpStatus.OK);
    }

}
