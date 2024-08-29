package com.mercedesbenz.starwars.starwarsback.domain;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "`planets`")
public class Planets {

    @Id
    private String name;

    @JsonProperty("rotation_period")
    private String rotationPeriod;

    @JsonProperty("orbital_period")
    private String orbitalPeriod;

    private String diameter;

    private String climate;

    private String gravity;

    private String terrain;

    @JsonProperty("surface_water")
    private String surfaceWater;

    private String population;

    private List<String> residents;

    private List<String> films;

    private String created;

    private String edited;

    private String url;
}
