let fs = require("fs")
let util = require('util');
let exec = util.promisify(require('child_process').exec);

function fileController() {

}

function logFormat() {

}

function writeLog(type, stack, args) {
  exec(`echo ${[...args]} >> ./logs_test.log`)
}

module.exports   = {
  writeLog
};