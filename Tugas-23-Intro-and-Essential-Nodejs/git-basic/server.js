const http = require ('http')

http.createServer((request, response)=> {
    if(request.url === '/about') {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('Welcome to about us page')
        response.end()
    } else if(request.url === '/contact') {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('Welcome to contact us page')
        response.end()
    } else {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('Hello World!')
        response.end()
    }
    
}).listen(8000)