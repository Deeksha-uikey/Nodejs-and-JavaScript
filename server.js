var http = require('http');
// we are creating a server object using http 
http.createServer((req, res)=> 
{
    res.write("Hello, this is an example of web server responding to client"); // it is a request to the client
    res.end(); // it will end the response 
    console.log('web server is running at the 8080 port number')
    
}).listen(8080); // the server object listens on the port 8080