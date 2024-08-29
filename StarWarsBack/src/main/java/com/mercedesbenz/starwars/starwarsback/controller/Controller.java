package com.mercedesbenz.starwars.starwarsback.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
public class Controller {
    private final Logger logger = LoggerFactory.getLogger(Controller.class);


    @GetMapping("")
    ResponseEntity<String> healthCheck() {
        return new ResponseEntity<String>("Health Check", HttpStatus.OK);
    }

 

}
