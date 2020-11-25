let path = require('path');

function stackInfo() {
	let stackReg = /at\s+(.*)\s+\((.*):(\d*):(\d*)\)/i;
	let stackReg2 = /at\s+()(.*):(\d*):(\d*)/i;
	let stacklist = (new Error()).stack.split('\n').slice(3);
	let s = stacklist[0];
	let sp = stackReg.exec(s) || stackReg2.exec(s);
	let data = {};
	if (sp && sp.length === 5) {
		data.method = sp[1];
		data.path = sp[2];
		data.line = sp[3];
		data.pos = sp[4];
		data.file = path.basename(data.path);
	}
  return data;
}

exports.stack = stackInfo;
