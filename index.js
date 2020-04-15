

const dircompare = require('dir-compare');

//const options = { compareSize: true, compareContent: true};
var options = {
  compareSize: true,
  compareContent: true,
  ignoreLineEnding: true,
  ignoreWhiteSpaces: true,
  skipSubdirs: false
};
//const oldFile = (__dirname, 'resources');
//const newFile = (__dirname, 'resources2');
const leftdir = ('M:\\User\\justin.miller\\temp');
const rightdir = ('C:\\justin.miller\\temp');

// Multiple compare strategy can be used simultaneously - compareSize, compareContent, compareDate, compareSymlink.
// If one comparison fails for a pair of files, they are considered distinct.


// Synchronous
//const res = dircompare.compareSync(oldFile, newFile, options)
//print(res)
var Spinner = require('cli-spinner').Spinner;
var spinner = new Spinner('processing.. %s');
spinner.setSpinnerString('|/-\\');
spinner.start();
// Asynchronous
dircompare.compare(leftdir, rightdir, options)
    .then(res => print(res))
    .catch(error => console.error(error));


function print(result) {
    //console.log(result)

    console.log('Directories are %s', result.same ? 'identical' : 'different')

    //console.log('Statistics - equal entries: %s, distinct entries: %s, left only entries: %s, right only entries: %s, differences: %s',
    //  result.equal, result.distinct, result.left, result.right, result.differences)


    var counter = 0;
    console.log('Left Dir: ' + leftdir)
    console.log('Right Dir: ' + rightdir)

    result.diffSet.forEach(dif => {

        counter++

        if (dif.state !== 'equal') {
            leftfile = dif.name1
            rightfile = dif.name2

            if (typeof leftfile === 'undefined' || leftfile === null) {
                console.log('Right File ' + dif.path2 + rightfile)
            } else if (typeof rightfile === 'undefined' || rightfile === null) {
                console.log('Left File ' + dif.path1 + leftfile)
            }

        }

    })
spinner.stop();

}


