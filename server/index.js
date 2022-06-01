const express = require('express');
let app = express();
const getReposByUsername = require('../helpers/github.js').getReposByUsername;
// var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'));
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  var username = req.body.username
  getReposByUsername(username);
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

