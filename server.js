const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();

// Set the view engine to ejs
app.set("view engine", "ejs");

//initialize the connection from ./config/db.js
const connection = require("./config/db");

// Serve static files (e.g., HTML, CSS, JS, images) from the public folder.
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());





// API for default page
app.get("/", (req, res) => {
  res.redirect("/create.html");
});

// Delete Operation (Delete data from the database)
 app.get("/delete-data", (req, res) => {
     const deleteQuery = "DELETE FROM userinfo WHERE id = ?";

     connection.query(deleteQuery, [req.query.id], (error, rows) => {
         if (error) {
         console.log(error);
         } else {
         res.redirect("/data");
         }
     });
 });


// Read Operation (Fetch data from the database)
app.get("/data", (req, res) => {
    connection.query("SELECT * FROM userinfo", (error, rows) => {
        if (error) {
        console.log(error);
        } else {
        // res.send({rows}); [use for testing]
        res.render("read.ejs", { rows });
        }
    });
});


// Create Operation (Insert data into the database)
app.post("/create.html", (req, res) => {
  // console.log(req.body);
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const occupation = req.body.occupation;
  try {
    connection.query(
      "INSERT INTO userinfo (name, email, phone, occupation) VALUES (?,?,?,?)",
      [name, email, phone, occupation],
      (error, rows) => {
        if (error) {
          console.log(error);
        } else {
            //this code use for redirect the page after the data insert
          res.redirect("/data");
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
});



app.listen(process.env.PORT || 4000, (error) => {
  //longer version
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    console.log(`Server is running on port ${process.env.PORT}`);
  }

  //shorter version
  // if(error) throw error;
  // console.log(`Server is running on port ${process.env.PORT}`);
});
