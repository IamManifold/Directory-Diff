var fc = require('filecompare');
var cb = function(isEqual) {
  console.log("equal? :" + isEqual);
}
const leftdir = ('M:\\User\\justin.miller\\temp');
const rightdir = ('C:\\justin.miller\\temp');
const readSize = 4096;
const bufferSize = 8192;
fc(leftdir,rightdir,cb,readSize, bufferSize);






const oldFile = ('M:\\User\\justin.miller\\Temp\\Newyork Trip Timelaps\\New Text Document.txt');
const newFile = ('C:\\justin.miller\\Temp\\Newyork Trip Timelaps\\New Text Document.txt');

var cb = function (isEqual) {
    console.log("equal? :" + isEqual);
}
fc(oldFile, newFile, cb);
