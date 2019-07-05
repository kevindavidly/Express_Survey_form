var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var user = {};
app.get('/', function(req, res) {

 res.render("index");
})

app.post('/submit', function(req, res) {
    console.log("POST DATA \n\n", req.body)
    user['name'] = req.body['name'];
    user['location'] = req.body['location'];
    user['language'] = req.body['language'];
    user['comment'] = req.body['comment'];

    res.redirect("/result");
})
app.get('/result', function(req, res) {

    res.render("result",{user:user});
})
app.post('/return', function(req, res) {
    
    res.redirect("/");
})

// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});