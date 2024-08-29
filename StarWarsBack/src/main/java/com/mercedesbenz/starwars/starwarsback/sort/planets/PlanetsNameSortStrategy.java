package com.mercedesbenz.starwars.starwarsback.sort.planets;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import com.mercedesbenz.starwars.starwarsback.domain.Planets;

public class PlanetsNameSortStrategy implements PlanetsSortStrategyInterface {
    @Override
    public List<Planets> sort(List<Planets> planets, boolean ascending) {
        Comparator<Planets> comparator = Comparator.comparing(Planets::getName);
        if (!ascending) {
            comparator = comparator.reversed();
        }
        return planets.stream().sorted(comparator).collect(Collectors.toList());
    }
}
