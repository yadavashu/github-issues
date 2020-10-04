import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import IssuesList from "./components/issues-list.component";
import CreateIssue from "./components/create-issue.component";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          
          
      
          <Route path="/" exact component={IssuesList} />
          <Route path="/create"  component={CreateIssue} />
        </div>
      </Router>
    );
  }
}

export default App;