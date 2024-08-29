
FROM maven:3.8.6-eclipse-temurin-17-alpine AS build

ARG SPRING_PROFILES_ACTIVE
ENV SPRING_PROFILES_ACTIVE=$SPRING_PROFILES_ACTIVE



COPY src /home/app/src
COPY pom.xml /home/app
RUN mvn -f /home/app/pom.xml clean package

# Package stage
#
FROM openjdk:17-jdk-slim-buster

COPY --from=build /home/app/target/StarWarsBack-0.0.1.jar /usr/local/lib/StarWarsBack-0.0.1.jar

ENTRYPOINT ["java","-jar","/usr/local/lib/StarWarsBack-0.0.1.jar"]
