const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const app = express();
const upload = multer();

app.use(express.static(__dirname)); // Serve index.html

app.post('/submit', upload.none(), (req, res) => {
  const { name, email, date, signature } = req.body;
  if (!name || !email || !date || !signature) {
    return res.status(400).send('Missing fields');
  }
  // Save as JSON for simplicity
  const entry = {
    name,
    email,
    date,
    signature, // base64 PNG
    timestamp: new Date().toISOString()
  };
  const filename = `release_${Date.now()}.json`;
  fs.writeFile(
    path.join(__dirname, 'submissions', filename),
    JSON.stringify(entry, null, 2),
    err => {
      if (err) return res.status(500).send('Error saving form');
      res.send('OK');
    }
  );
});

// Ensure submissions directory exists
if (!fs.existsSync(path.join(__dirname, 'submissions'))) {
  fs.mkdirSync(path.join(__dirname, 'submissions'));
}

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
