//imports path and fs  using the require function
const path  = require('path');
const  fs = require('fs');


// importing the uniqid module
const uniqid = require('uniqid');

module.exports = (app) => {

//  route handler  defining how the aplication responds to an HTTP GET request to the path /api/notes
    app.get('/api/notes', (req, res) => {
      res.sendFile(path.join(__dirname, '../db/db.json'));
    });


    // route handler for the HTTP POST method at path /api/notes
    app.post('/api/notes', (req, res) => {
      //reads the contents of the db.json
        let data = fs.readFileSync('./db/db.json');
        // parses the JSON data read from the file
        data = JSON.parse(data);
        // sends a JSON response back to the client
        res.json(data);
        let noteInput = {
          title: req.body.title,
          text: req.body.text,
          // creats a unique id for each note
          id: uniqid(),
        };
        // pushes note the db. json file
        data.push(noteInput);
        
        fs.writeFileSync('./db/db.json', JSON.stringify(data));
        res.json(data);
    
      });
      //sets up a route handler for the HTTP DELETE method at the specified path /api/notes/:id
      app.delete('/api/notes/:id', (req, res) => {

        let data = JSON.parse(fs.readFileSync('./db/db.json'))

        let deleteNotes = data.filter(item => item.id !== req.params.id);
        // re writes  note to db.json
        fs.writeFileSync('./db/db.json', JSON.stringify(deleteNotes));
        res.json(deleteNotes);
        
      })
    };

