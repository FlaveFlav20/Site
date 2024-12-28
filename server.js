const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static('.'));

/*
const options = {
  key: fs.readFileSync(path.join(__dirname, 'server.key')),
  cert: fs.readFileSync(path.join(__dirname, 'server.cert'))
};*/

// Home
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/content/*", (req, res) => {
  res.sendFile(path.join(__dirname, 'contents', req.params[0]));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '404_NOTFOUND.html'));
});


// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

/*https.createServer(options, app).listen(443, () => {
  console.log('HTTPS Server running on port 443');
});*/
