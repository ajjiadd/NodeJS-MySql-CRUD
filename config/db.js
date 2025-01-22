const mysql = require('mysql');


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