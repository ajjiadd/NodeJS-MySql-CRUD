const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();
//initialize the connection from ./config/db.js
const connection = require('./config/db');
// Serve static files (e.g., HTML, CSS, JS, images) from the public folder.
app.use(express.static(__dirname + "/public"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());


// API to get all the data from the database
app.get('/', (req, res) => {
    res.redirect('/create.html'); 
});

// Create Operation (Insert data into the database)
app.post('/create', (req, res) => {
    try {
        console.log('Create Operation');
        
    } catch (error) {
        console.log(error);
    }
});


app.listen(process.env.PORT || 4000, (error) => {
    //longer version
     if (error) {
        console.log(`Error: ${error}`);
     }else {
         console.log(`Server is running on port ${process.env.PORT}`);
    }

    //shorter version
    // if(error) throw error;
    // console.log(`Server is running on port ${process.env.PORT}`);
    
});

