const express = require('express');

const PORT = 3004;

const app = express();

// TODO: Create a GET method for `/api/reviews` that logs when a user's request has been received
app.get('/api/reviews', (req, res) => {
  // Your code here
  //Let the client know that their request was received
  res.json(`${req.method} request received`);
  //show the user agent information in the terminal
  console.info(req.rawHeaders);

  //Log our request to the terminal
  console.info(`${req.method} request received`)
});

// TODO: Create a POST request for `/api/reviews` that logs when a user's request has been received
// Your code here
app.post(`/api/reviews`, (req, res) => 
{res.json(`${req.method} request received`);
//Show the user agent information in the terminal
console.info(req.rawHeaders);
//log our user agent information in the terminal
console.info(`${req.method} request received`);
});


// TODO: Create a GET request for `api/upvotes` that logs when a user's request has been received
app.get('/api/upvotes', (req, res) => {
  // Your code here
  res.json(`${req.method} request received`);
  // console.info(req.rawHeaders);
  // console.info(req.rawHeaders);
  //log the request to the terminal
  console.info(`${req.method} request received`)
});

// TODO: Create a POST request for `api/upvotes` that logs when a user's request has been received
// Your code here
app.post(`/api/upvotes`, (req, res) => {
  //Let the client know that their POST request was receive
  res.json(`${req.method} request received`);

  //Show the user agent information in the terminal
  console.info(req.rawHeaders);
  // Log our request to the terminal
  console.info(req.rawHeaders);
  // Log our request to the terminal
  console.info(`${req.method} request received`);
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
