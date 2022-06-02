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

      {repos.map(repo =>
      <div key={repo.url}>{repo.title}, {repo.author}, {repo.forks}, {repo.url}</div>
      )}

    </div>
  )
}

export default RepoList;