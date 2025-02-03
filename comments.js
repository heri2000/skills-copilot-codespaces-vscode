// Create web server
// Create web server
var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.static('public'));

// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage');
});

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});

// PUT method route
app.put('/user', function (req, res) {
  res.send('PUT request to the homepage');
});

// DELETE method route
app.delete('/user', function (req, res) {
  res.send('DELETE request to the homepage');
});

// Listen to port 3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
