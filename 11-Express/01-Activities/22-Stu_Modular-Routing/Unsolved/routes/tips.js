const tips = require('express').Router();
// TODO: Import helper functions and dependencies
const uuid = require(`../helpers/uuid`)

// TODO: GET Route for retrieving all the tips
// GET Route for retrieving all the tips
tips.get('/api/tips', (req, res) => {
    console.info(`${req.method} request received for tips`);
    readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
  });

// TODO: POST Route for a new UX/UI tip

  // POST Route for a new UX/UI tip
  tips.post('/api/tips', (req, res) => {
    console.info(`${req.method} request received to add a tip`);
  
    const { username, topic, tip } = req.body;
  
    if (username && topic && tip) {
      const newTip = {
        username,
        tip,
        topic,
        tip_id: uuid(),
      };
  
      readAndAppend(newTip, './db/tips.json');
      res.json(`Tip added successfully`);
    } else {
      res.error('Error in adding tip');
    }
  });

module.exports = tips;
