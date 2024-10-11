// const express = require(`express`);
// const termData = require(`./terms.json`);
// PORT = 3001;
// const app = express();

// app.get(`/api/terms`, (req, res) => res.json(termData));

// app.get(`/api/terms/:term`, (req, res) => {
//     const requestedData = req.params.term.toLowerCase();
//     for (let i = 0; i < termData.length; i++) {
//         if (requestedData === termData[i].term.toLowerCase()){
//         return res.json(termData[i]);
//     }
// }
//     return res.json(`No match found`)
// });

// app.get(`*`, (req, res) => res.send(`Make a GET using Insomia to <a href = "http://localhost:${PORT}/api/terms">http://localhost:${PORT}/api/terms</a>`)
// );

// app.listen(PORT, () => console.info(`Example app listening at http://localhost:${PORT}`));


const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  // Get the Keys
  const keys = Object.keys(person);

  console.log(keys);