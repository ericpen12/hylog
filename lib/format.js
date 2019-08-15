let time = require("./time");

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
