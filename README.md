# Harbour

### A simple docker setup for Minecraft servers

> Harbour has been written to support mods and other runtimes apart from the official one. This means it should be compatible with runtimes such as Forge or Fabric.

## Installing

To start from scratch, please run the following command:

```bash
npm run initial-setup
```

In case your setup uses pnpm, it should work with `pnpm run initial-setup`

This will create the required folders for your base installation. It will also recreate some configuration files such as `mods.json` and `runtime.json`.

## Running Harbour

To run Harbour on a docker environment, please run the following command:

```bash
docker-compose up --build -d
```

## Configuration files

### runtime.json

This folder contains the specific URL from which the server should pull the executable `.jar` file. It must be an URL and needs to return a valid `.jar` file.

This information can be obtained directly from [the game's website](https://piston-data.mojang.com/v1/objects/8dd1a28015f51b1803213892b50b7b4fc76e594d/server.jar) in case of using the vanilla version and from [Fabric's server website](https://fabricmc.net/use/server/) in case of using Fabric.

### mods.json

This is where all the mods are listed. Harbour downloads them directly from the specified source and moves them into the mods folder so you don't have to do anything to set up your mods. A mod entry should contain the following properties to work:

```jsonc

    {
        "name": "Lithium", // Name of the mod
        "version": "0.11.2", // Version of the mod
        "gameVersion": "1.20.1", // Version of the game
        "url": "https://cdn.modrinth.com/data/gvQqBUqZ/versions/ZSNsJrPI/lithium-fabric-mc1.20.1-0.11.2.jar" // URL containing the .jar file
    }
```

Most of those properties are just for additional information, as long as you have a valid URL you can leave the rest as empty fields. However, when it comes to maintenance having those three additional fields improves a lot upgrading those mods.

In case of not requiring any mods, just leave an empty array and you are good to go.
