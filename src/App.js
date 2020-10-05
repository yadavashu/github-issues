import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import github from "./github.svg";
import filter from "./filter.svg";
import  "./App.css";
import IssuesList from "./components/issues-list.component";
import CreateIssue from "./components/create-issue.component";
import editIssue from "./components/edit-issue.component";
import OpenIssues from "./components/open-issues.component";
import CloseIssues from "./components/closeissues.component";
class App extends Component {
  state={
    show:false
  };
  showModal =e=>{
    this.setState({
      show:!this.state.show
    });
  }

  render() {
    

    return (
      <Router>
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"><img src={github} id="img2"></img></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav contents">
    <li className="nav-item dropdown options-filter">
    <Link to="/" className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <img src={filter} id="img1"></img>Filter
    </Link>
    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
      <Link to="/" className="dropdown-item" href="#">Show all</Link>
      <Link to="/open" className="dropdown-item" href="#">Open</Link>
      <Link to="/close" className="dropdown-item" href="#">Closed</Link>
     </div>
  </li>
      <button onClick={this.showModal} id="modal">Create Todo</button>
    </div>
  </div>
</nav>    
<CreateIssue onClose={this.showModal} show={this.state.show}  className=" letsee"/>
          <Route path="/" exact component={IssuesList} />
          <Route path="/close"  component={CloseIssues} />
          <Route path="/open"  component={OpenIssues} />
          <Route path="/edit/:id" component={editIssue} />
         
          
        </div>
      </Router>
    );
  }
}

export default App;