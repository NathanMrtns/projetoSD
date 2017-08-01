'use strict';

const express = require('express');
const os = require('os');
const sleep = require('sleep');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/:count', (req, res) => {
  console.log(fibonacci(req.params.count))
  res.send('Response from POD: ' + os.hostname() + '\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);


function fibonacci(n) {
  if (n < 2)
    return 1;
  else
    return fibonacci(n-2) + fibonacci(n-1);
}
