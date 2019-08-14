let stack = require("./stack");
let f = require("./format");

function debug() {
    let args = Array.from(arguments);
    let s = stack.stack()
    let head = f.logHead("debug", s)
    console.log(head, ...args)
}

function info () {
    let args = Array.from(arguments);
    let s = stack.stack()
    let head = f.logHead("info", s)
    console.log(head, ...args)
}

function warn () {
    let args = Array.from(arguments);
    let s = stack.stack()
    let head = f.logHead("warn", s)
    console.log(head, ...args)
}

function error () {
    let args = Array.from(arguments);
    let s = stack.stack()
    let head = f.logHead("error", s)
    console.log(head, ...args)
}

function fatal () {
    let args = Array.from(arguments);
    let s = stack.stack()
    let head = f.logHead("fatal", s)
    console.log(head, ...args)
}

module.exports = {
    debug,
    info,
    warn,
    error,
    fatal,
}
