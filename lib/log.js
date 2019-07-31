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
    let head = f.logHead("debug", s)
    console.log(head, ...args)
}

function warn () {
    let args = Array.from(arguments);
    let s = stack.stack()
    let head = f.logHead("debug", s)
    console.log(head, ...args)
}

function error () {
    let args = Array.from(arguments);
    let s = stack.stack()
    let head = f.logHead("debug", s)
    console.log(head, ...args)
}

function fatal () {
    let args = Array.from(arguments);
    let s = stack.stack()
    let head = f.logHead("debug", s)
    console.log(head, ...args)
}

exports.debug = debug;
exports.info = info;
exports.warn = warn;
exports.error = error;
exports.fatal = fatal;