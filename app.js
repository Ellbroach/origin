
const express = require('express');
const app = express();
var url = '';

app.use(function (req, res, next) {
  
  console.log(req.method + req.url);

  const method = req.method;
  url = req.url;

  next();
});


app.get(url, function (req, res, next) {
  res.send('welcome to the start')
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))


// const http = require('http');
// const EOL = require('os').EOL;
//res.end('nice job getting this far\n');

// const requestResponseHandler = function(req,res){
  
  //     // server window, does not go to client
  //     console.log('Received request!', req.meth, req.url);
  
  //     //starting to respond to client
  //     res.writeHead(200, { 'Content-Type': 'text/plain'});
  //     res.write('Heere is part of a...'+EOL);
  
  //     res.end('nice job getting this far' + EOL);
  
  
  // }
  //const app = http.createServer(requestResponseHandler);
  //app.get('/', (req, res) => res.send('Hello World!'))
  // app.get('/news', (req, res) => res.send('Is this working?'))