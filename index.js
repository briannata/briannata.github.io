// Brianna Ta
// Period 6

var express = require('express');
var app = express();
var hbs = require('hbs');

app.use(express.static('static'))

var https = require('https');

const path = require('path');
const { nextTick } = require('process');

app.set('port', 80 );

app.set('view engine', 'hbs');

app.get('/', function(req, res){
  res.render('homepage');
});

app.get('/home', function(req, res){
        res.render('homepage');
});

app.get('/wrestling', function(req, res){
    res.render('wrestling');
});

app.get('/jiujitsu', function(req, res){
    res.render('jiujitsu');
});

app.get('/aboutme', function(req, res){
  res.render('aboutme');
});

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
})