const fs = require('fs');

let file = process.argv[2]

const x = fs.readFileSync(file);
const str = x.toString();

var arr = str.split('\n');


console.log(arr.length - 1);
