import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import github from "./github.svg";
import filter from "./filter.svg";
import  "./App.css";
import IssuesList from "./components/issues-list.component";
import CreateIssue from "./components/create-issue.component";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"><img src={github}></img></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
    <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <img src={filter}></img>Filter
    </a>
    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
      <a className="dropdown-item" href="#">Show all</a>
      <a className="dropdown-item" href="#">Open</a>
      <a className="dropdown-item" href="#">Closed</a>
     </div>
  </li>
      <a className="nav-link" href="#"><button>Create Todo</button></a>
    </div>
  </div>
</nav>
          <Route path="/" exact component={IssuesList} />
          <Route path="/create"  component={CreateIssue} />
        </div>
      </Router>
    );
  }
}

export default App;