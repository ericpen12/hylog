let fs = require("fs")
let util = require('util');
let exec = util.promisify(require('child_process').exec);

function fileController() {

}

function logFormat() {

}

function writeLog(type, stack, args) {
  // fs.appendFile("./test.log", ...args, (err) => {
  //   if(err){}
  // });
  // console.log(type,)
  let arr = {}

  for (let i = 0; i < args.length; i++) {
    arr[i] = args[i]
    console.log(arr)
  }
  exec(`echo ${arr} >> ./a.log`)

}

module.exports   = {
  writeLog
};