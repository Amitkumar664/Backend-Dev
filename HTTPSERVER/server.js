const http = require('http');
const server = http.createServer((req, res) => {
    console.log("url" + req.url);
    console.log("http method" + req.method);
    res.writeHead(200,{'Content-Type':'plain/html',userinfo:'myname'});
    res.end("hello");
});

server.listen(3000, () => {
    console.log("server is listening on port 3000");
});    