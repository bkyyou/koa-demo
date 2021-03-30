const http = require('http');
const fs = require('fs');

// request response  是一个 流  

const serve = http.createServer((req, res) => {
  let { method, url, headers } = req;
  if (method === 'GET' && url === '/') {
    fs.readFile('index.html', (err, data) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      console.log('data', data);
      res.end(data);
    })
  } else if (method === 'GET' && url === '/users') {
    console.log('users');
    res.writeHead(200, {
      'Content-Type': 'application/json'
    })
    res.end(JSON.stringify({
      name: 'zs'
    }))
  } else if (method === 'GET' && headers.accept.indexOf('image/*') !== -1) {
    console.log('url image', url);
    fs.createReadStream('./' + url).pipe(res);
  }
})

serve.listen(3000, () => {
  console.log('running');
})