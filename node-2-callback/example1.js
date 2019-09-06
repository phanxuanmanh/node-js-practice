var fs = require("fs");

var printFile = function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
}

fs.readFile('myfile.txt', printFile );

console.log("Program Ended");