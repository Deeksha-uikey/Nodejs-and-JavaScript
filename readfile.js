var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) //creating a server using http
{
    fs.readFile('index.html', function(err, data )
{
    res.writeHead(250, {'Content-Type': 'text/html'});
    res.write(data);
    console.log(" server is running at localhost 8080 port number") //this will lead you to the localhost 8080 port number
    return res.end(); // ending of a server response 
});
}).listen(8080);