package com.mercedesbenz.starwars.starwarsback;

import com.mercedesbenz.starwars.starwarsback.controller.PeopleController;
import com.mercedesbenz.starwars.starwarsback.domain.People;
import com.mercedesbenz.starwars.starwarsback.service.PeopleService;
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

public class PeopleControllerTest {
    private static final Logger logger = LoggerFactory.getLogger(PeopleControllerTest.class);

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private PeopleService peopleService;

    @Test
    public void testGetAllPeople() throws Exception {
        People person1 = new People();
        person1.setName("Luke Skywalker");
        People person2 = new People();
        person2.setName("Darth Vader");
        List<People> peopleList = Arrays.asList(person1, person2);

        logger.info("Preparing to mock service response with people list: {}", peopleList);

        Mockito.when(peopleService.getAll("", "")).thenReturn(peopleList);

        mockMvc.perform(MockMvcRequestBuilders.get("/api/people/")
                .param("sort", "")
                .param("order", ""))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].name").value("Luke Skywalker"))
                .andExpect(MockMvcResultMatchers.jsonPath("$[1].name").value("Darth Vader"));

        logger.info("PeopleControllerTest executed successfully.");

    }
}
