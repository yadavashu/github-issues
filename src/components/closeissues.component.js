import axios from 'axios';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Pagination from './pagination';

const Issue=(props)=>(
   
    <tr>
    <td><Link to={"/edit/"+props.issue._id}>{props.issue.issue_desc}</Link></td>
    </tr>
)

export default class IssuesList extends Component {

    state={
        issues:[],
        currentPage:1,
        PostsPerPage:5
    }
    componentDidMount()
    {
        axios.get('http://localhost:8000/closeissue')
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
    
    issuelist=(issi)=>{
        console.log("hello")
        return issi.map((currentissue,i)=>{
            console.log({currentissue})
            return (
                <Issue issue={currentissue} key={i} />);
        })
    }
    render() {
        console.log(this.state.issues)
        const nu=this.state.issues.length;
        console.log(nu)
        console.log(this.state.PostsPerPage)
        console.log(this.state.currentPage )
        const indexOfLastPost = this.state.currentPage * this.state.PostsPerPage;
  const indexOfFirstPost = indexOfLastPost - this.state.PostsPerPage;
  const currentPosts = this.state.issues.slice(indexOfFirstPost, indexOfLastPost);

  const paginate=(pageNumber)=>{
      console.log("pelooui")
      console.log(pageNumber)
      this.setState({
          currentPage:pageNumber
      })
  }
     
     
        return (
            <div>
              <table className="table table-striped" style={{marginTop:20}}>
              <thead>
              <tr>
              <th>Issues</th>
            
              </tr>
              </thead>
              <tbody>
              {this.issuelist(currentPosts)}
              </tbody>
              </table>
              <Pagination
              postsPerPage={this.state.PostsPerPage}
              totalPosts={nu}
              paginate={paginate}
            />
            </div>
        )
    }
}