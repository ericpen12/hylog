let time = require("./time");

/**
 * It provite a head of log, like this: 
 * [debug][2019-08-19 10:23:40][method:a][test.js:13]
 * @param {String} type The log type
 * @param {Object} stack It contains the informations: method, file, line, etc
 */
function logHead(type, stack) {
  let method = stack.method;
  let file = stack.file;
  let line = stack.line;
  let timeFormat = time.defaultFormat();

  let head = `[${type}][${timeFormat}][method:${method}][${file}:${line}]`
  return head;
}

module.exports = {
  logHead
}
