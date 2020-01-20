'option strict';

const config = {};

config.networkNodeListJSONurl = 'https://raw.githubusercontent.com/evolutioncoin/evolution-nodes/master/evolution-nodes.json';

config.serverHost = '0.0.0.0';

config.serverPort = 8081;

config.networkNodeTimeout = 45;

config.statsUpdateInterval = 35;

config.nodeTTL = 29600;

config.rpcPort = 22100;

config.queueReseedDelay = 60;

config.dnsServers = ['1.1.1.1', '8.8.8.8'];

config.logging = {
  files: {
    level: 'info',
    directory: 'logs',
    flushInterval: 5
  },
  console: {
    level: 'info',
    colors: true
  }
};

module.exports = config;
