let stack = require("./stack");
let f = require("./format");

function debug() {
    let args = Array.from(arguments);
    let s = stack.stack()
    printLog("debug")
}

function info () {
    let args = Array.from(arguments);
    let s = stack.stack()
    printLog("info")
}

function warn () {
    let args = Array.from(arguments);
    let s = stack.stack()
    printLog("warn")
   
}

function error () {
    let args = Array.from(arguments);
    let s = stack.stack()
    printLog("error")
}

function fatal () {
    let args = Array.from(arguments);
    let s = stack.stack()
    printLog("fatal")
}

function printLog(logType, stack) {
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
