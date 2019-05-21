'option strict';

const config = {};

config.networkNodeListJSONurl = 'https://github.com/Tarmgas/dyngecoin-nodes-json/blob/master/dyngecoin-nodes.json';

config.serverHost = '127.0.0.1';

config.serverPort = 7774;

config.networkNodeTimeout = 10;

config.statsUpdateInterval = 15;

config.nodeTTL = 3600;

config.rpcPort = 7771;

config.queueReseedDelay = 60;

config.dnsServers = ['1.1.1.1', '1.0.0.1'];

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
