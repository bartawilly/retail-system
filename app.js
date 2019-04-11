var express = require('express');
var app = express();
const PORT = process.env.PORT || 3000

//set up template engine

app.set('view engine', 'ejs');

//static files

app.use(express.static('./assets'));

app.get('/', function(req, res) {
    res.render('dashboard', {active: "dashboard"});
});

app.get('/icons', function(req, res) {
    res.render('icons', {active: "icons"});
});

app.get('/map', function(req, res) {
    res.render('map', {active: "map"});
});

app.get('/notifications', function(req, res) {
    res.render('notifications', {active: "notifications"});
});

app.get('/tables', function(req, res) {
    res.render('tables', {active: "tables"});
});

app.get('/typography', function(req, res) {
    res.render('typography', {active: "typography"});
});

app.get('/upgrade', function(req, res) {
    res.render('upgrade', {active: "upgrade"});
});

app.get('/user', function(req, res) {
    res.render('user', {active: "user"});
});


//listen to port 

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));