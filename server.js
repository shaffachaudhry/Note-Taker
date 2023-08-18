// import the Express module, create an instance of the Express application
const  express = require('express');
const app = express();

//if the process.env.PORT is falsy, then the value 3001 will be used as the default port.
const PORT = process.env.PORT || 3001;

//middlwarew 
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//require routes/api and roures/html
require('./routes/api')(app);
require('./routes/html')(app);

// Starts the Express server and listens on port established above
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});

