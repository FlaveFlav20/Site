const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');
const rateLimit = require('express-rate-limit');

const app = express();
const port = 3000;

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 100, 
    standardHeaders: true,
    legacyHeaders: false, 
});

const content_lang_check = /_[a-z]{2}_[A-Z]{2}(\.html)?$/;
const content_simple_lang_check = /^[a-z]{2}_[A-Z]{2}$/;


// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'contents')));
app.use(express.static(path.join(__dirname, 'pictures')));
app.use(express.static(path.join(__dirname, 'scripts')));
app.use(express.static(path.join(__dirname, 'public')));

// Home
app.get('/', limiter, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/content/*", limiter, (req, res) => {
  let param = req.params[0];
  if (!content_lang_check.test(param) && 
        !content_simple_lang_check.test(param)) {
    return res.sendFile(path.join(__dirname, 'public/404_NOTFOUND.html'));;
  }
  else {
    return res.sendFile(path.join(__dirname, 'public', 'contents', param));
  }
});

app.get('*', limiter, (req, res) => {
  res.sendFile(path.join(__dirname, 'public/404_NOTFOUND.html'));
});


// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

/*https.createServer(options, app).listen(443, () => {
  console.log('HTTPS Server running on port 443');
});*/
