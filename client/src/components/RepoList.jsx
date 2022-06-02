import React from 'react';

const RepoList = (props) => {

  var repos = [...props.repos]
  repos.sort((a, b) => {
    return a.forks - b.forks;
  }).reverse();
  repos = repos.slice(0, 25);

  return (
    <div>
      <h4> Repo List Component </h4>
      There are {props.repos.length} repos.

      <h4>Top 25 Repos</h4>

      <table>
        <tr><th>Title</th><th>Author</th><th>Forks</th><th>URL</th></tr>
        {repos.map(repo =>
        <tr key={repo.url}><td><a href={repo.url}>{repo.title}</a></td><td>{repo.author}</td><td>{repo.forks}</td><td>{repo.url}</td></tr>
        )}
      </table>

    </div>
  )
}

export default RepoList;

/* {repos.map(repo =>
      <div key={repo.url}>{repo.title}, {repo.author}, {repo.forks}, {repo.url}</div>
      )} */