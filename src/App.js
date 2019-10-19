import React, {Component} from 'react';
import './App.css';

import SearchBox from "./components/SearchBox";
import ViewerList from "./components/ViewerList";

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      q: "",
      users: []
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
      <div>
        <h1>Github User Searcher</h1>

        <SearchBox onChange={this.onSearch} onSubmit={this.onSubmit}></SearchBox>

        <ViewerList users={this.state.users}></ViewerList>
      </div>
    );
  }
}

export default App;
