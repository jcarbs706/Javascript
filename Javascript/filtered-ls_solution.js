const fs = require('fs')
const path = require('path')

const dir = process.argv[2]
const ext = '.' + process.argv[3]


function callback(err, files){
    if(err){
        console.log('There was an error')
    }

    files.forEach(function (file){
        if (path.extname(file) === ext){
            console.log(file)
        }
    })
}

fs.readdir(dir, callback)