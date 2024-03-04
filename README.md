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

