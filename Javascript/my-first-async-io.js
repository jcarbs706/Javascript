const fs = require('fs');

let file = process.argv[2]; //

function callback(err, data){
    const str = data.toString(); //converts data to string
    var arr = str.split('\n');  //splits string and places it into an array

    console.log(arr.length - 1);
}

const x = fs.readFile(file,'utf8',callback);
