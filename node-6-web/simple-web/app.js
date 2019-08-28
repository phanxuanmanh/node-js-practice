var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer( function (request, response) {  
   var pathname = url.parse(request.url).pathname;
   
   // Print the name of the file for which request is made.
   console.log("Request for " + pathname + " received.");
   
   
   response.writeHead(200, {'Content-Type': 'text/html'});	
    response.write(`
	<html>
		<head>
			<title>Sample Page</title>
		</head>
   
		<body>
			Hello World!
		</body>
	</html>	`);		
    
   response.end()
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');