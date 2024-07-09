const express = require("express");
const app = express();
//pour naviguer entre les dossiers
const path =require("path")
// Middleware to parse JSON request bodies
app.use(express.json());

// Import environment variables from.env file
require("dotenv").config();
const port = process.env.PORT || 5000;

const checkdate = require("./check-date");
//app.use(checkdate);
app.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(`Server listening at http://127.0.0.1:${port}`);
});

// require the pug 
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.get("/name/:user_name", (req, res) => {
  res.render("name", { name: req.params.user_name });
});

//Define routes
app.get("/", (req, res) => {
//  res.send("<h1>Welcome!</h1>");
res.render("home");
});
app.get("/contact", checkdate, (req, res) => {
 // res.send("<h1>Welcome to contact</h1>");
 res.render("contact");
});
app.get("/services", (req, res) => {
  //res.send("<h1>Welcome to services</h1>");
  res.render("services");
});

/*app.get("/name/:user_name", function (req, res) {
  res.status(200);
  res.set("Content-type", "text/html");
  res.send(
    "<html><body>" +
      "<h1>Hello " +
      req.params.user_name +
      "</h1>" +
      "</body></html>"
  );
});
*/