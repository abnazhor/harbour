FROM alpine:latest

COPY server.properties /server.properties
COPY world /world
COPY backup /backup
COPY config /config
COPY scripts /scripts

COPY package.json /package.json
COPY ops.json /ops.json
COPY runtime.json /runtime.json
COPY mods.json /mods.json

RUN apk add openjdk17 nodejs npm
RUN npm i -g pnpm
RUN pnpm i
RUN mkdir mods

RUN pnpm run build
RUN echo "eula=true" > eula.txt

RUN ls scripts
RUN ls mods

EXPOSE 25565/tcp

CMD ["java", "-Xmx2G", "-jar", "server.jar", "nogui"]
