const express = require('express');
const app = express();



// API to get all the data from the database
app.get('/', (req, res) => {
    res.send('API is running in port 5000');
});

app.listen(5000, console.log('Server running on port 5000'));

