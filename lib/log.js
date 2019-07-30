function debug() {
    let args = Array.from(arguments);
    console.log(...args)
}

function info (params) {
    let args = Array.from(arguments);
    console.log(...args)
}

function warn (params) {
    let args = Array.from(arguments);
    console.log(...args)
}

function error (params) {
    let args = Array.from(arguments);
    console.log(...args)
}

function fatal (params) {
    let args = Array.from(arguments);
    console.log(...args)
}

exports.debug = debug;
exports.info = info;
exports.warn = warn;
exports.error = error;
exports.fatal = fatal;