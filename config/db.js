const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config(); //This call-Function use for the .env file


// connect with database (XAMPP)
const connection = mysql.createConnection({
host: process.env.HOST,
user: process.env.USER,
password: process.env.PASSWORD,
database: process.env.DATABASE,
});

// handle the error 
connection.connect((err) => {
    // if (err) throw err; or
    if(err){
        throw err;
    }
    console.log('Connected Successfully to the database');
});


module.exports = connection; // export the connection to use in other files