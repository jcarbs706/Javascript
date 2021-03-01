var o = 0;

for (var i = 2; i < process.argv.length; i++){
    o += Number(process.argv[i]);
}

console.log(o);