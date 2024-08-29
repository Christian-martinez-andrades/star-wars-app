package com.mercedesbenz.starwars.starwarsback.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mercedesbenz.starwars.starwarsback.domain.People;


@Repository
public interface PeopleRepository extends JpaRepository<People, String> {

    Optional<People> findByName(String name);
}

