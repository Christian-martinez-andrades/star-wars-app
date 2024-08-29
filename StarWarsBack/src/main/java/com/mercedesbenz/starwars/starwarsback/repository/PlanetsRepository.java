package com.mercedesbenz.starwars.starwarsback.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mercedesbenz.starwars.starwarsback.domain.Planets;

@Repository
public interface PlanetsRepository extends JpaRepository<Planets, String> {

    Optional<Planets> findByName(String name);
}
