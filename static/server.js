const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static('.'));

// Home
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/content/file/", (req, res) => {
  res.sendFile(path.join(__dirname, 'contents', 'file', req.params[0]));
});

app.get("/content/*", (req, res) => {
  res.sendFile(path.join(__dirname, 'contents', req.params[0]));
});


// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
