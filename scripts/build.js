import { readFileSync } from "fs";

import util from "util";
import fs from "fs";
import stream from "stream";

const streamPipeline = util.promisify(stream.pipeline);

async function download({ url, destination }) {
  const response = await fetch(url);
  if (!response.ok)
    throw new Error(`unexpected response ${response.statusText}`);
  await streamPipeline(response.body, fs.createWriteStream(destination));
}

const main = async () => {
  console.log("Downloading mods...");

  const mods = JSON.parse(await readFileSync("mods.json"));
  const jar = JSON.parse(await readFileSync("runtime.json"));

  await Promise.all(
    mods.map(async ({ url, name, version, gameVersion }, index) => {
      console.log(
        `(${index}/${mods.length}) Downloading ${name} ${version} for Minecraft ${gameVersion}...`
      );
      await download({
        url,
        destination: `mods/${name.toLowerCase()}_${version}.jar`,
      });
      console.log(`(${index + 1}/${mods.length}) Done.`);
    })
  );

  console.log("\n[RUNTIME] Downloading minecraft runtime...");
  await download({ url: jar.url, destination: "server.jar" });
  console.log("[RUNTIME] Done.");
};

main();
