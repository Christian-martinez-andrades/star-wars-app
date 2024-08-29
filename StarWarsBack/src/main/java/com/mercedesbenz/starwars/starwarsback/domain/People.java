package com.mercedesbenz.starwars.starwarsback.domain;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "`people`")
@Getter
@Setter
public class People {
    @Id
    private String name;

    private String height;

    private String mass;

    @JsonProperty("hair_color")
    private String hairColor;

    @JsonProperty("skin_color")
    private String skinColor;

    @JsonProperty("eye_color")
    private String eyeColor;

    @JsonProperty("birth_year")
    private String birthYear;

    private String gender;

    private String homeworld;

    private String created;

    private String edited;

    private String url;

    private List<String> films;
    private List<String> species;
    private List<String> vehicles;
    private List<String> starships;
}
