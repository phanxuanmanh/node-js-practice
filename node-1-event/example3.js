
setImmediate(() => {
  console.log('Run by setImmediate');
})

const interval = setInterval(() =>{
	console.log('Run by Interval');
	clearInterval(interval);
}
, 0);

setTimeout(() =>{
	console.log('Run by Timeout');
}
, 0);

process.nextTick(() => {
	console.log('Run by process.nextTick');
});


console.log('end of program');