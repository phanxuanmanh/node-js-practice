const interval = setInterval(() =>{
	console.log('Run by Interval');
	clearInterval(interval);
}
, 1);

setTimeout(() =>{
	console.log('Run by Timeout');
}
, 0);

console.log('end of program');