const http = require('http');
const url = require('url');
const os = require('os');

const fibo = (n) => { 
  if (n < 2)
    return 1;
  else
    return fibo(n - 2) + fibo(n - 1);
};

const badRequest = (res) => {
  res.statusCode = 400;
  res.write('Error: invalid number!');
  res.end();
};

const notFound = (res) => {
  res.statusCode = 404;
  res.end();
};

const parseHrtimeToSeconds = (hrtime) => (hrtime[0] + (hrtime[1] / 1e9)).toFixed(3);
const getElapsedSeconds = (startTime) => parseHrtimeToSeconds(process.hrtime(startTime));

const sendResponse = (res, n, startTime) => {
  const fiboResult = fibo(n);
  const elapsedSeconds = getElapsedSeconds(startTime);

  const responseData = {
    hostname: os.hostname(),
    requestNumber: n,
    result: fiboResult,
    elapsedSeconds
  };

  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(responseData));
};

const server = http.createServer((req, res) => {
  'use strict';
  const { pathname, query } = url.parse(req.url, true);

  if (pathname == '/fibo') {
    const startTime = process.hrtime();
    const { n } = query;

    if (isNaN(parseInt(n))) {
      badRequest(res);
    } else {
      sendResponse(res, n, startTime);
    }
    
  } else {
    notFound(res);
  }
});

server.listen(3000, () => console.log(`API is running on port 3000...`));
