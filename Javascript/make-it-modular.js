const myModule = require('./mymodule.js') //imports function "myModule" that was exported

let path = require('path');
let dir = process.argv[2]; // = 3rd string of command line input
let ext = process.argv[3];  // = 4th string of commmand line input

const callback = function (err, list) {
    if (err) throw err;
    list.forEach(function (file) {
        console.log(file);
    })
}



myModule(dir, ext, callback) //calls myModule function from mymodule.js


