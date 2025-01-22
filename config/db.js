const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();


// connect with database (XAMPP)
const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: '',
database: 'nodejscrud'
});

// handle the error 
connection.connect((err) => {
    // if (err) throw err; or
    if(err){
        throw err;
    }
    console.log('Connected Successfully to the database');
});