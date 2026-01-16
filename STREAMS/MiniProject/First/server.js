const http = require("http");

const server = http.createServer((req, res) => {
  try {    
    res.writeHead(200, { "Content-Type": "text/plain" });
    if (req.method === "GET" && req.url === "/") {
      res.end("Server is running");
    }
    else if (req.method === "GET" && req.url === "/about") {
      res.end("This is the About page");
    }
    else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Page Not Found");
    }

  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Internal Server Error");
    console.error("Error:", error.message);
  }
  
});
server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
