let stack = require("./stack");
let f = require("./format");
let colors = require("./color");
let file = require("./file")

function debug() {
  let args = Array.from(arguments);
  let s = stack.stack()
  printLog("debug", s, args)
}

function info () {
  let args = Array.from(arguments);
  let s = stack.stack()
  printLog("info", s, args)
}

function warn () {
  let args = Array.from(arguments);
  let s = stack.stack()
  printLog("warn", s, args)
   
}

function error () {
  let args = Array.from(arguments);
  let s = stack.stack()
  printLog("error", s, args)
}

function fatal () {
  let args = Array.from(arguments);
  let s = stack.stack()
  printLog("fatal", s, args)
}

function printLog(logType, stack, args) {
  let head = f.logHead(logType, stack);
  file.writeLog(logType, stack, args);
  console.log(colors.color(logType), head, ...args, "\033[0m");
}  

module.exports = {
  debug,
  info,
  warn,
  error,
  fatal,
}
