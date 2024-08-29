package com.mercedesbenz.starwars.starwarsback.sort.people;

import java.util.List;

import com.mercedesbenz.starwars.starwarsback.domain.People;

public interface PeopleSortStrategyInterface {
    List<People> sort(List<People> people, boolean ascending);
}
