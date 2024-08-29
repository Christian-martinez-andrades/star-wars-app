package com.mercedesbenz.starwars.starwarsback.sort.people;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import com.mercedesbenz.starwars.starwarsback.domain.People;

public class PeopleNameSortStrategy implements PeopleSortStrategyInterface {
    @Override
    public List<People> sort(List<People> people, boolean ascending) {
        Comparator<People> comparator = Comparator.comparing(People::getName);
        if (!ascending) {
            comparator = comparator.reversed();
        }
        return people.stream().sorted(comparator).collect(Collectors.toList());
    }
}
