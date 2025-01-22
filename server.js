const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
//initialize the connection from ./config/db.js
const connection = require('./config/db');


// API to get all the data from the database
app.get('/', (req, res) => {
    res.send('API is running in port 5000');
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

