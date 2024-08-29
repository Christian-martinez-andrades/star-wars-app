package com.mercedesbenz.starwars.starwarsback;

import com.mercedesbenz.starwars.starwarsback.controller.PlanetsController;
import com.mercedesbenz.starwars.starwarsback.domain.Planets;
import com.mercedesbenz.starwars.starwarsback.service.PlanetsService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.Arrays;
import java.util.List;

@SpringBootTest
@AutoConfigureMockMvc
public class PlanetsControllerTest {

    private static final Logger logger = LoggerFactory.getLogger(PlanetsControllerTest.class);

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private PlanetsService planetsService;

    @Test
    public void testGetAllPlanets() throws Exception {
        Planets planet1 = new Planets();
        planet1.setName("Tatooine");
        planet1.setClimate("Arid");
        planet1.setTerrain("Desert");
        
        Planets planet2 = new Planets();
        planet2.setName("Hoth");
        planet2.setClimate("Frozen");
        planet2.setTerrain("Ice");

        List<Planets> planetsList = Arrays.asList(planet1, planet2);

        logger.info("Preparing to mock service response with planets list: {}", planetsList);

        Mockito.when(planetsService.getAll("", "")).thenReturn(planetsList);

        mockMvc.perform(MockMvcRequestBuilders.get("/api/planets/")
                .param("sort", "")
                .param("order", ""))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].name").value("Tatooine"))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].climate").value("Arid"))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].terrain").value("Desert"))
                .andExpect(MockMvcResultMatchers.jsonPath("$[1].name").value("Hoth"))
                .andExpect(MockMvcResultMatchers.jsonPath("$[1].climate").value("Frozen"))
                .andExpect(MockMvcResultMatchers.jsonPath("$[1].terrain").value("Ice"));

        logger.info("PlanetsControllerTest executed successfully.");
    }
}
