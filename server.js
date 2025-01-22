const express = require('express');
const app = express();
const mysql = require('mysql');


// connect with database (XAMPP)
const db = mysql.createConnection({
host: 'localhost',
user: 'root',
password: '',
database: 'nodejscrud'
});

// handle the error 
db.connect((err) => {
    // if (err) throw err; or
    if(err){
        throw err;
    }
    console.log('Connected Successfully to the database');
});


// API to get all the data from the database
app.get('/', (req, res) => {
    res.send('API is running in port 5000');
});

app.listen(5000, console.log('Server running on port 5000'));

