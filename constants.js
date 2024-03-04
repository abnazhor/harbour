const DEFAULT_FOLDERS = ["mods", "backup", "config"];

const MODS_CONFIG_EXAMPLE = [
  {
    name: "Lithium",
    version: "0.11.2",
    gameVersion: "1.20.1",
    url: "https://cdn.modrinth.com/data/gvQqBUqZ/versions/ZSNsJrPI/lithium-fabric-mc1.20.1-0.11.2.jar",
  },
];

const OPS_CONFIG_EXAMPLE = [
  {
    uuid: "your-mc-uuid",
    name: "your-mc-name",
    level: 4,
    bypassesPlayerLimit: false,
  },
];

const RUNTIME_CONFIG_EXAMPLE = {
  url: "https://meta.fabricmc.net/v2/versions/loader/1.19.4/0.14.21/0.11.2/server/jar",
};

const DEFAULT_SERVER_PROPERTIES = `
#Minecraft server properties
#Thu Feb 16 21:14:19 CET 2023
enable-jmx-monitoring=false
rcon.port=25575
level-seed=
gamemode=survival
enable-command-block=false
enable-query=false
generator-settings={}
enforce-secure-profile=true
level-name=world
motd=Your server name
query.port=25565
pvp=true
generate-structures=true
max-chained-neighbor-updates=1000000
difficulty=easy
network-compression-threshold=256
max-tick-time=60000
require-resource-pack=false
use-native-transport=true
max-players=8
online-mode=true
enable-status=true
allow-flight=false
initial-disabled-packs=
broadcast-rcon-to-ops=true
view-distance=15
server-ip=
resource-pack-prompt=
allow-nether=true
server-port=25565
enable-rcon=false
sync-chunk-writes=true
op-permission-level=4
prevent-proxy-connections=false
hide-online-players=false
resource-pack=
entity-broadcast-range-percentage=100
simulation-distance=10
rcon.password=
player-idle-timeout=0
force-gamemode=false
rate-limit=0
hardcore=false
white-list=true
broadcast-console-to-ops=true
spawn-npcs=true
spawn-animals=true
function-permission-level=2
initial-enabled-packs=vanilla
level-type=minecraft\:normal
text-filtering-config=
spawn-monsters=true
enforce-whitelist=true
spawn-protection=0
resource-pack-sha1=
max-world-size=29999984
`;

export {
  DEFAULT_FOLDERS,
  OPS_CONFIG_EXAMPLE,
  MODS_CONFIG_EXAMPLE,
  RUNTIME_CONFIG_EXAMPLE,
  DEFAULT_SERVER_PROPERTIES,
};
