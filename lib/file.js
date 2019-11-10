let fs = require("fs")
let util = require('util');
let exec = util.promisify(require('child_process').exec);

// logs's dir
let logDir = "./logs";


function fileController() {

}

function logFormat() {

}

/**
 * writeLog put log message into file
 * @param {string} type log's type
 * @param {object} stack A error stack, it contains the log's line, function .etc
 * @param {array} args There are log message
 */
function writeLog(type, stack, args) {
  createLogDir(logDir);
  exec(`echo ${[...args]} >> ${logDir}/run.log`)
}

/**
 * createLogDir will Create logs' dir if it not exist, but createLogDir doesn't report error if 
 * something wrong when create the dir
 * @param {string} dir 
 */
function createLogDir(dir) {
  // Create logs' dir if it not exist
  if (!fs.existsSync(dir)) {
    fs.mkdir(dir, ()=> {});
  }
}

module.exports   = {
  writeLog
};