// TODO: Import express
const express = require(`express`);
// Import built in Node.js package `path` to resolve path of files that are located on the server.
const path = require(`path`);

// TODO: Import 'terms.json' file
const termData = require(`./terms.json`);
// Specify on which port the Express.js server will run
const PORT = 3003;

// TODO: Initialize app variable
const app = express();

// TODO: Create a route for a GET request that will return the content of our `terms.json` file
app.get("/", (req, res) => res.send("HOME PAGE"))
app.get(`/api/terms`, (req, res) => res.json(termData));

// Listen() method is responsible for listening for incoming connections on the specified port.
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
