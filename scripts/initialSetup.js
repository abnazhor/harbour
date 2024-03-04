import { existsSync, mkdirSync, writeFileSync } from "fs";
import {
  DEFAULT_FOLDERS,
  OPS_CONFIG_EXAMPLE,
  MODS_CONFIG_EXAMPLE,
  RUNTIME_CONFIG_EXAMPLE,
  DEFAULT_SERVER_PROPERTIES,
} from "../constants.js";

const createFolder = (pathname) => {
  if (!existsSync(pathname)) mkdirSync(pathname);
};

const createJsonFile = (pathname, content) => {
  if (!existsSync(pathname))
    writeFileSync(pathname, JSON.stringify(content, null, 4));
};

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
