'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello DevOps FS2024 test1234))');
  res.send('Neue Zeile Cansu ABCD1234');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
