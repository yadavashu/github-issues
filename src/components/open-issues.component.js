import axios from 'axios';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const Issue=(props)=>(
   
    <tr>
    <td><Link to={"/edit/"+props.issue._id}>{props.issue.issue_desc}</Link></td>
    </tr>
)

export default class IssuesList extends Component {

    state={
        issues:[]
    }
    componentDidMount()
    {
        axios.get('http://localhost:8000/openissue')
        .then((res)=>{
            console.log(res.data);
           this.setState({
               issues:res.data
           })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
    issuelist=()=>{
        console.log("hello")
        return this.state.issues.map((currentissue,i)=>{
            console.log({currentissue})
            return (
                <Issue issue={currentissue} key={i} />);
        })
    }
    render() {
     
        return (
            <div>
              <table className="table table-striped" style={{marginTop:20}}>
              <thead>
              <tr>
              <th>Issues</th>
              <th>Action</th>
              </tr>
              </thead>
              <tbody>
                {this.issuelist()}
              </tbody>
              </table>
            </div>
        )
    }
}