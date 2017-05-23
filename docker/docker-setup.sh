#!/bin/bash

# setup directory for data
mkdir -p /data
chown -R tomcat:0 /data
chmod g+w -R /data
chown -R tomcat:0 /opt/apache-tomcat-8.0.41
chown -R tomcat:0 /opt/tomcat

chgrp -R 0 /opt/apache-tomcat-8.0.41
chmod -R g+rw /opt/apache-tomcat-8.0.41
find /opt/apache-tomcat-8.0.41 -type d -exec chmod g+x {} +

chgrp -R 0 /opt/tomcat
chmod -R g+rw /opt/tomcat
find /opt/tomcat -type d -exec chmod g+x {} +