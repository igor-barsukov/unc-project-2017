# Journey Joys project

# Overview

This directory contains Openshift templates application deploy.

It uses docker images from registry: https://hub.docker.com/r/necronir/unc-registry/

application-template.json - template for deployment of main application;

postgresql-template - template for deployment of postgresql + postgis.
Original docker image which is used for poastgres: https://hub.docker.com/r/crunchydata/crunchy-postgres-gis/

imagestream-template.json - template for trigger update of inner openshift registry for sync with dockerhub.

# Prerequisites

There is no any specific requirements.

# How to deploy sollution step-by-step

# Postgresql deployment

1) Create project with name "jj" in Openshift console;

2) Choose option "Add to project" -> Import yaml/json;

3) Drag&Drop postgresql-template.json;

4) Leave default params;

5) Wait for blue status of pod;

6) Postgesql was successfully deployed!

# Application deployment

1) Choose option "Add to project" -> Import yaml/json;

2) Drag&Drop application-template.json;

3) Click on the pod and go to Terminal

4) cd /tmp

5) Create structure of database:

psql -h postgresql -U postgres -d traveldb -a -f TravelDB.sql

psql -h postgresql -U postgres -d traveldb -a -f countries.sql

psql -h postgresql -U postgres -d traveldb -a -f states.sql

psql -h postgresql -U postgres -d traveldb -a -f cities.sql

psql -h postgresql -U postgres -d traveldb -a -f data.sql

6) Restart aplication's pod (e.g. use scale out/ scale in)

7) Application was successfully deployed!


# Conclusion

As a result you will get two pods with application and database.
