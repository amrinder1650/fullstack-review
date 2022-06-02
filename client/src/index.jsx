import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  search (term) {
    console.log(`${term} was searched`);

    $.ajax({
      url: '/repos',
      type: 'POST',
      data: {username: term},
      success: (/*result*/) => {
        console.log('Successful ajax post');
        // console.log(result);
        // this.setState({
        //   repos: [...this.state.repos, ...result]
        // });
        $.ajax({
          url: '/repos',
          type: 'GET',
          success: (result) => {
            console.log('Successful ajax get');
            console.log(result);
            this.setState({
              repos: [...result]
            });
          },
          error: function() {
            console.log('Error ajax get')
          }
        });
      },
      error: function() {
        console.log('Error ajax post')
      }
    });
  }

  componentDidMount(){
    $.ajax({
      url: '/repos',
      type: 'GET',
      success: (result) => {
        console.log('Successful ajax get');
        console.log(result);
        this.setState({
          repos: [...result]
        });
      },
      error: function() {
        console.log('Error ajax get')
      }
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));