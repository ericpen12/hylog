function logHead(type, stack) {
  let method = stack.method;
  let file = stack.file;
  let line = stack.line;

//   let head = `[${type}][time][method:${method}][${file}:${line}]`;
  let head = `[${type}][method:${method}][${file}:${line}]`
  return head;
}

exports.logHead = logHead;