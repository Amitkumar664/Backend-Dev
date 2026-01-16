const http = require('http');
const fs = require('fs');
const { Transform } = require('stream');


const logStream = fs.createWriteStream('access.log', { flags: 'a' });

function logRequest(req) {
  const log = `${new Date().toISOString()} | ${req.method} | ${req.url}\n`;
  logStream.write(log);
}


const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

const vowelReplaceTransform = new Transform({
  transform(chunk, encoding, callback) {
    const result = chunk.toString().replace(/[aeiou]/gi, '*');
    this.push(result);
    callback();
  }
});


const server = http.createServer((req, res) => {
  logRequest(req);

  if (req.method === 'GET' && req.url === '/') {
    res.end('Server is running');
  }

  else if (req.method === 'GET' && req.url === '/about') {
    res.end('This is a simple HTTP server');
  }


  else if (req.method === 'GET' && req.url === '/user') {
    const user = {
      name: 'Amit',
      course: 'Node.js',
      role: 'Student'
    };

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(user));
  }


  else if (req.method === 'POST' && req.url === '/uppercase') {
    res.setHeader('Content-Type', 'text/plain');
    req.pipe(upperCaseTransform).pipe(res);
  }


  else if (req.method === 'POST' && req.url === '/process') {
    res.setHeader('Content-Type', 'text/plain');
    req
      .pipe(upperCaseTransform)
      .pipe(vowelReplaceTransform)
      .pipe(res);
  }


  else {
    res.statusCode = 404;
    res.end('404 Page Not Found');
  }
});


server.listen(3000, () => {
  console.log('Server running on port 3000');
});
