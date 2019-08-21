let log = require("./hylog");

function testLog() {
  log.debug("debug");
  log.info("info");
  log.warn("warn");
  log.error("error");
  log.fatal("fatal");
}

testLog();