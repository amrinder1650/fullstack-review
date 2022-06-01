const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  author: String,
  title: String,
  url: {type: String, unique: true},
  forks: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos, callback) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  // console.log('from database', repos);
  // var repo = new Repo(repos[0])
  // repo.save((error, result) => {
  //   if (result) {
  //     console.log("database result", result);
  //     callback(result);
  //   } else {
  //     console.log("database error", error)
  //     callback(error);
  //   }
  // });
  console.log(repos);

  Repo.insertMany(repos, (error, result) => {
    if (result) {
      callback(result);
    } else {
      callback(error);
    }
  });
}

module.exports.save = save;