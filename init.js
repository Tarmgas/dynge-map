'option strict';

const cluster = require("cluster");
global.config = require("./config");

require("./lib/consts.js");
require("./lib/logger.js");

const logSystem = "master";
require("./lib/exceptionWriter.js")(logSystem);

if (cluster.isWorker) {
  switch (process.env.workerType) {
    case "shell-map":
      require("./lib/shell-map.js");
      break;
  }
  return;
}

(function init() {
  spawnWorker();
})();

function spawnWorker() {
  var worker = cluster.fork({
    workerType: "dynge-map"
  });
  worker.on("exit", function(code, signal) {
    log("error", logSystem, "dynge-map died, spawning replacement...");
    setTimeout(function() {
      spawnWorker();
    }, 5000);
  });
}
