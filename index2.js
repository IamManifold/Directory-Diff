const _ = require('lodash');
const fs = require('fs');

const aFiles = fs.readdirSync('M:\\User\\justin.miller\\temp');
const bFiles = fs.readdirSync('C:\\justin.miller\\temp');
//const leftdir = ('M:\\User\\justin.miller\\temp');
//const rightdir = ('C:\\justin.miller\\temp');

_.difference(aFiles, bFiles).forEach(v => {
    // Files missing from B that are found in A should be copied to directory D
    // Move file v to directory D
    console.log (aFiles.v + ' ' + bfiles)
});


_.difference(bFiles, aFiles).forEach(v => {
    // Files missing from A that are found in B should be copied to directory C
    // Move file v to directory C
    console.log (aFiles + ' ' + bfiles)
});