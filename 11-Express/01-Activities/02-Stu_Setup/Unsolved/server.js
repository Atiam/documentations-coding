//Import Express.js
const express = require('express');

//Import built-in Node.js package `path` to to resolth path files that are located on the server.
const path = require('path');

//Initialize an instance of Express.js
const app = express();

//Specify on which port the Express.js server will run
const PORT = 3001;

// TODO: Invoke app.use() and serve static files from the '/public' folder
//Static middleware pointing to the public folder
app.use(express.static(`public`));

// Create Express.js routes for default `/1, `/send` and `/routes` endpoints
app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

app.get('/send', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/send.html'))
);

// TODO: Create a route that will serve up the `public/paths.html` page

app.get(`/paths`, (req, res) => 
  res.sendFile(path.join(__dirname, `public/paths.html`))
);


// Listen() method is responible for listening for invoming connections on the spoecified port.
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
