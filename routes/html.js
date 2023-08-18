const path = require('path');


module.exports = (app) => {


  //route handler  for the  GET method at the specified path /notes
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });


  // sets up a route handler for the  GET method with a wildcard  as the path thus will match any path that hasn't been specifically  matched 
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  })
};