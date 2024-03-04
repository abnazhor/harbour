import { mkdirSync, writeFileSync } from "fs";
import {
  OPS_CONFIG_EXAMPLE,
  DEFAULT_FOLDERS,
  MODS_CONFIG_EXAMPLE,
  RUNTIME_CONFIG_EXAMPLE,
  DEFAULT_SERVER_PROPERTIES,
} from "../constants.js";

const createFolder = (pathname) => {
  try {
    mkdirSync(pathname);
  } catch (err) {
    console.log(`Folder with pathname ${pathname} already exists`);
  }
};

const createJsonFile = (pathname, content) =>
  writeFileSync(pathname, JSON.stringify(content, null, 4));

const main = () => {
  for (const folderName of DEFAULT_FOLDERS) {
    createFolder(folderName);
  }

  createJsonFile("mods.json", MODS_CONFIG_EXAMPLE);
  createJsonFile("ops.json", OPS_CONFIG_EXAMPLE);
  createJsonFile("runtime.json", RUNTIME_CONFIG_EXAMPLE);

  writeFileSync("server.properties", DEFAULT_SERVER_PROPERTIES);
};

main();
