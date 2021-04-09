const fs = require('fs');
const path = require('path');

let dir = process.argv[2]; //let dir = third string of command line input
let ext = process.argv[3];

function callback(err, list){

    for (i = 0; i < list.length; i++){     //reads array "list" and cycles through elements
        if (list[i].includes('.' + ext)){  //only printing the file names with extension you specify
            console.log(list[i]);
        }
        else;
    }

}

fs.readdir(dir, callback);