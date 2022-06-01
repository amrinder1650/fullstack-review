const express = require('express');
let app = express();
const getReposByUsername = require('../helpers/github.js').getReposByUsername
// var bodyParser = require('body-parser');
const save = require('../database/index.js').save

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
  var repos = [];
  // res.send(getReposByUsername(username));
  getReposByUsername(username, (result, error) => {
    // var repos = [];
    for (var i = 0; i < result.data.length; i++) {
      var repo = {
        author: result.data[i].owner.login,
        title: result.data[i].name,
        url: result.data[i].html_url,
        forks: result.data[i].forks
      }
      // console.log(repo);
      repos.push(repo);
    }
    save(repos, (result, error) => {
      if (error) {
        console.log(error)
      } else {
        res.sendStatus(200);
      }
    })
  });
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

