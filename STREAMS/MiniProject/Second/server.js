const http = require('http');
const { Transform } = require('stream');

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    try {
      const parsedData = JSON.parse(chunk.toString());

      const upperCaseData = {
        name: parsedData.name.toUpperCase(),
        course: parsedData.course.toUpperCase()
      };

      this.push(JSON.stringify(upperCaseData));
      callback();
    } catch (error) {
      callback(error);
    }
  }
});

const server = http.createServer((req, res) => {
  try {
    if (req.method === 'POST' && req.url === '/user') {
      res.setHeader('Content-Type', 'application/json');

      req
        .pipe(upperCaseTransform)
        .on('data', (data) => {
          res.statusCode = 200;
          res.end(JSON.stringify({
            message: 'User data received',
            data: JSON.parse(data)
          }));
        })
        .on('error', () => {
          res.statusCode = 400;
          res.end(JSON.stringify({ error: 'Invalid JSON' }));
        });
    } else {
      res.statusCode = 404;
      res.end('404 Page Not Found');
    }
  } catch (error) {
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
