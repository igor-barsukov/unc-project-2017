FROM gencatcloud/java:8

MAINTAINER suport.gencat@gencat.cat

# add our user and group first to make sure their IDs get assigned consistently, regardless of whatever dependencies get added
RUN adduser -D tomcat tomcat

# Tomcat Version
ENV TOMCAT_VERSION_MAJOR 8
ENV    TOMCAT_VERSION_FULL  8.0.41

# Download and install
RUN apk add --update curl &&\
    apk add zip &&\
    apk add postgresql-client &&\
    curl -LO https://archive.apache.org/dist/tomcat/tomcat-${TOMCAT_VERSION_MAJOR}/v${TOMCAT_VERSION_FULL}/bin/apache-tomcat-${TOMCAT_VERSION_FULL}.tar.gz &&\
    curl -LO https://archive.apache.org/dist/tomcat/tomcat-${TOMCAT_VERSION_MAJOR}/v${TOMCAT_VERSION_FULL}/bin/apache-tomcat-${TOMCAT_VERSION_FULL}.tar.gz.md5 &&\
    md5sum -c apache-tomcat-${TOMCAT_VERSION_FULL}.tar.gz.md5 &&\
    gunzip -c apache-tomcat-${TOMCAT_VERSION_FULL}.tar.gz | tar -xf - -C /opt &&\
    rm -f apache-tomcat-${TOMCAT_VERSION_FULL}.tar.gz apache-tomcat-${TOMCAT_VERSION_FULL}.tar.gz.md5 &&\
    ln -s /opt/apache-tomcat-${TOMCAT_VERSION_FULL} /opt/tomcat &&\
    rm -rf /opt/tomcat/webapps/examples /opt/tomcat/webapps/docs &&\
    apk del curl &&\
    rm -rf /var/cache/apk/*

COPY ./unc/unc-project.war /opt/tomcat/webapps/unc.zip
COPY ./WEB-INF /WEB-INF
COPY ./unc /tmp
COPY ./unc/server.xml /opt/tomcat/conf/server.xml

RUN zip /opt/tomcat/webapps/unc.zip /WEB-INF/util.properties &&\
    mv /opt/tomcat/webapps/unc.zip //opt/tomcat/webapps/unc.war &&\
    rm -rf /opt/tomcat/webapps/ROOT &&\
	rm -rf /tmp/unc-project.war

RUN chown -R tomcat:tomcat /opt/apache-tomcat-${TOMCAT_VERSION_FULL} && mkdir -p /data && chown -R tomcat:tomcat /data \
    && test "$(id tomcat)" = "uid=1000(tomcat) gid=1000(tomcat) groups=1000(tomcat)"

COPY docker-setup.sh /
RUN chmod 0755 /docker-setup.sh &&\
   /docker-setup.sh

# Define working directory.
WORKDIR /data
VOLUME /data

# Expose the default tomcat ports
EXPOSE 8181
EXPOSE 8000

#Fitxer d'entrada
COPY run.sh /entrypoint.sh
RUN chmod 0755 /entrypoint.sh

#Copiem el fitxer wait-for-it
COPY wait-for-it.sh /
RUN chmod 0755 /wait-for-it.sh

USER 1000

CMD ["/entrypoint.sh"]
