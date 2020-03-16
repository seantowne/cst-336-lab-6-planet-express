var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var fs = require('fs');



// set the template engine to ejs
app.set('view engine', 'ejs');

// Tells node to look in public/ for styles
app.use(express.static("public"));

// makes data that comes to the server from the client a json object
app.use(bodyParser.urlencoded({extended: true}));

// route to base domain
app.get("/", function(req, res){
    res.render("home.ejs");
});

// route to base domain
app.get("/home", function(req, res){
    res.render("home.ejs");
});

app.get("/mercury", function(req, res){
    var txt;
    fs.readFile('public/txt/mercury.txt', 'utf8', function(err, data) {
        if (err) throw err;
        console.log(data);
        txt = data;
    });
    res.render("planet.ejs", {name:"mercury", img:"img/mercury.jpg", text:txt})
});
app.get("/venus", function(req, res){
    res.render("planet.ejs", {name:"venus", img:"img/venus.jpg", text:"txt/venus.txt"})
});
app.get("/earth", function(req, res){
    res.render("planet.ejs", {name:"earth", img:"img/earth.jpg", text:"txt/earth.txt"})
});
app.get("/mars", function(req, res){
    res.render("planet.ejs", {name:"mars", img:"img/mars.jpg", text:"txt/mars.txt"})
});
app.get("/jupiter", function(req, res){
    res.render("planet.ejs", {name:"jupiter", img:"img/jupiter.png", text:"txt/jupiter.txt"})
});
app.get("/saturn", function(req, res){
    res.render("planet.ejs", {name:"saturn", img:"img/saturn.jpg", text:"txt/saturn.txt"})
});
app.get("/uranus", function(req, res){
    res.render("planet.ejs", {name:"uranus", img:"img/uranus.jpg", text:"txt/uranus.txt"})
});
app.get("/neptune", function(req, res){
    res.render("planet.ejs", {name:"neptune", img:"img/neptune.jpg", text:"txt/neptune.txt"})
});
app.get("/pluto", function(req, res){
    res.render("planet.ejs", {name:"pluto", img:"img/pluto.jpeg", text:"txt/pluto.txt"})
});


// anything that hasn't matched a defined route is caught here
app.get("/*", function(req, res){
    res.render("error.ejs");
});

// listens for http requests
// port 3000 is for C9, port 8080 is for Heroku
app.listen(process.env.PORT || 3000 || 8080, function(){
    console.log("Server is running");
});
