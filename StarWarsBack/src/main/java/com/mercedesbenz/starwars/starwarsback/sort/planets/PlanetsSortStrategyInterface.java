package com.mercedesbenz.starwars.starwarsback.sort.planets;

import java.util.List;

import com.mercedesbenz.starwars.starwarsback.domain.Planets;

public interface PlanetsSortStrategyInterface {
    List<Planets> sort(List<Planets> Planets, boolean ascending);
}
