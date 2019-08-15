let stack = require("./stack");
let f = require("./format");

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
    let head = f.logHead(logType, stack)
    console.log(head, ...args)
  }

module.exports = {
    debug,
    info,
    warn,
    error,
    fatal,
}
