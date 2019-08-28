var buffer1 = Buffer.from('TutorialsPoint ');
var buffer2 = Buffer.from('Simply Easy Learning');
var buffer3 = Buffer.concat([buffer1,buffer2]);

console.log("buffer3 content: " + buffer3.toString());
console.log("buffer2 compare to buffer2: " + buffer3.compare(buffer2));