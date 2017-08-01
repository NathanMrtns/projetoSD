'use strict';

const express = require('express');
const os = require('os');
const sleep = require('sleep');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  sleep.msleep(1000);
  res.send('Response from POD: ' + os.hostname() + '\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
