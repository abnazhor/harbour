FROM alpine:latest

COPY mods /mods
COPY server.properties /server.properties
COPY ops.json /ops.json
COPY world /world
COPY backup /backup
COPY config /config

RUN apk add openjdk17
RUN wget https://meta.fabricmc.net/v2/versions/loader/1.19.3/0.14.14/0.11.1/server/jar -O server.jar
RUN echo "eula=true" > eula.txt

EXPOSE 25565/tcp

CMD ["java", "-Xmx2G", "-jar", "server.jar", "nogui"]
