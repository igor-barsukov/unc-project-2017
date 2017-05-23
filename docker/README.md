# Journey Joys project

# Overview

This directory contains dockerfile and set of scripts for docker image creation.

# Prerequisites

Docker CE: https://docs.docker.com/engine/installation/

Additional files are required for successful dockerization:

- unc-project.var in directory unc;

- sql scripts for creation of database in folder unc;


# How to create docker image step-by-step

1) git clone https://github.com/igor-barsukov/unc-project-2017.git

2) cd unc-project-2017

3) mvn clean install

4) cp target/unc-project.war docker/unc

5) docker build -t unc-project:latest .

As a result you will get docker image with application.

# How to run docker container step-by-step

It runs docker container with tomcat 8 and application.

docker run -it \

-e unc_jdbc_host=localhost \

-e unc_jdbc_port=5432 \

-e unc_database=TravelDB \

-e unc_jdbc_username=postgres \

-e unc_jdbc_password=postgres \

-e unc_mail_username=JourneyJoins@gmail.com \

-e unc_mail_password=JourneyJoins2017 \

-e unc_mail_host=smtp.gmail.com \

unc-project:latest
