const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  axios.get(options.url, {headers: options.headers})
  .then(result => {
    callback(result);
  //   var repos = [];
  //   for (var i = 0; i < result.data.length; i++) {
  //     var repo = {
  //       author: result.data[i].owner.login,
  //       title: result.data[i].name,
  //       url: result.data[i].html_url,
  //       forks: result.data[i].forks
  //     }
  //     // console.log(repo);
  //     repos.push(repos);
  //   }
  //   return repos;
  // })
  // .then(result => {
  //   console.log(result);
  })
  .catch(err => {
    console.log(err);
  });
}

module.exports.getReposByUsername = getReposByUsername;