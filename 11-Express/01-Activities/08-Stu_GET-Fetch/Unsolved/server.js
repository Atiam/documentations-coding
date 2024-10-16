const express = require('express');
const path = require('path');
const petData = require('./db/animals.json');

const PORT = 3001;

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/animals', (req, res) => res.json(petData));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
