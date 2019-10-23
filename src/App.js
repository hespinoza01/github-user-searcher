import React, {Component} from 'react';
import './App.css';

import SearchBox from "./components/SearchBox";
import ViewerList from "./components/ViewerList";

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      q: "",
      users: [{
        "login": "hespinoza",
        "id": 5750955,
        "node_id": "MDQ6VXNlcjU3NTA5NTU=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/5750955?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/hespinoza",
        "html_url": "https://github.com/hespinoza",
        "followers_url": "https://api.github.com/users/hespinoza/followers",
        "following_url": "https://api.github.com/users/hespinoza/following{/other_user}",
        "gists_url": "https://api.github.com/users/hespinoza/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/hespinoza/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/hespinoza/subscriptions",
        "organizations_url": "https://api.github.com/users/hespinoza/orgs",
        "repos_url": "https://api.github.com/users/hespinoza/repos",
        "events_url": "https://api.github.com/users/hespinoza/events{/privacy}",
        "received_events_url": "https://api.github.com/users/hespinoza/received_events",
        "type": "User",
        "site_admin": false,
        "score": 527.819
      },
        {
          "login": "hespinoza01",
          "id": 24770635,
          "node_id": "MDQ6VXNlcjI0NzcwNjM1",
          "avatar_url": "https://avatars1.githubusercontent.com/u/24770635?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/hespinoza01",
          "html_url": "https://github.com/hespinoza01",
          "followers_url": "https://api.github.com/users/hespinoza01/followers",
          "following_url": "https://api.github.com/users/hespinoza01/following{/other_user}",
          "gists_url": "https://api.github.com/users/hespinoza01/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/hespinoza01/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/hespinoza01/subscriptions",
          "organizations_url": "https://api.github.com/users/hespinoza01/orgs",
          "repos_url": "https://api.github.com/users/hespinoza01/repos",
          "events_url": "https://api.github.com/users/hespinoza01/events{/privacy}",
          "received_events_url": "https://api.github.com/users/hespinoza01/received_events",
          "type": "User",
          "site_admin": false,
          "score": 54.33806
        }]
    };

    this.onSearch = this.onSearch.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSearch(e){
     this.setState({q: e.target.value});
  }

  onSubmit(e){
    e.preventDefault();

    let query = this.state.q;

    if(query.length > 0){
      fetch(`https://api.github.com/search/users?q=${query}`, {
        headers: {
          Authorization: "token 61cd198a0a552a4c13888dc179c0c3a9a83213e5"
        }
      })
        .then(response => response.json())
        .then(data => this.setState({ users: data.items }))
        .catch(error => console.error(error));
    }
  }

  render(){
    return (
      <main>
        <header className="App-header">
          <h1>Github User Searcher</h1>
          <SearchBox onChange={this.onSearch} onSubmit={this.onSubmit}></SearchBox>
        </header>
        <ViewerList users={this.state.users}></ViewerList>
      </main>

    );
  }
}

export default App;
