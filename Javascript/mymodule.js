const fs = require('fs');  //imports the filesystem module
const path = require('path')  //imports the

module.exports = function myModule(dir, ext, callback){  //allows function to be called in other module
  fs.readdir(dir, function (err, list) {                 //asynchronously reads direc
    if (err) return callback(err);
    else {
      list = list.filter(function (file) {
        if (path.extname(file) === '.' + ext) return true;
      })
      return callback(null, list);
    }
  })
}

