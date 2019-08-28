var fs = require("fs");
var data = 'This is my input';

var writeStream = fs.createWriteStream('myfileOut.txt');

writeStream.write(data, 'UTF8');
writeStream.end();

writeStream.on('finish',function() {
  console.log("Write completed.");
});

writeStream.on('error', function(err) {
   console.log(err.stack);
});

console.log("Program Ended");