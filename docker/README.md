# Journey Joys project

# Overview

This directory contains dockerfile and set of scripts for docker image creation.

# Prerequisites

Docker CE: https://docs.docker.com/engine/installation/

Additional files are required for successful dockerization:

- unc-project.var in directory unc;

- sql scripts for creation of database in folder unc;

- js scripts for chat server in folder chat;

# How to create docker image of application step-by-step

1) git clone https://github.com/igor-barsukov/unc-project-2017.git

2) cd unc-project-2017

3) mvn clean install

4) cp target/unc-project.war docker/application/unc

5) docker build -t unc-project:latest .

As a result you will get docker image with application.

# How to create docker image of chat server step-by-step

1) cp src/server/* docker/chat

2) docker build -t unc-project:chat docker/chat/

# How to run docker container with chat step-by-step

docker run -d -p 5000:5000 unc-project:chat

# How to run docker container with application step-by-step

It runs docker container with tomcat 8 and application.

docker run -d \
-p 80:8181 \
-e unc_jdbc_host=localhost \
-e unc_jdbc_port=5432 \
-e unc_database=traveldb \
-e unc_jdbc_username=postgres \
-e unc_jdbc_password=postgres \
-e unc_mail_username=JourneyJoins@gmail.com \
-e unc_mail_password=JourneyJoins2017 \
-e unc_mail_host=smtp.gmail.com \
unc-project:latest
