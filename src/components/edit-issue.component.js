import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class editIssue extends Component {

    state={
        issue_desc:'',
        status:true
    }
    
    componentDidMount=()=>
    {
        axios.get('http://localhost:8000/listissues/'+this.props.match.params.id)
        .then((res)=>{
            console.log("hellooo")
            console.log(res.data)
            this.setState({
                issue_desc:res.data[0].issue_desc
            })
            console.log(this.state.issue_desc)
        })
    }

    close=(e)=>{
        e.preventDefault();
        const obj={
            issue_desc:this.state.issue_desc,
            status:false
        }
        axios.post('http://localhost:8000/closeissue/'+this.props.match.params.id,obj)
        .then((res)=>{
            console.log("updated successfully")
        })

    }

    delet=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/deleteissue/'+this.props.match.params.id)
        .then((res)=>{
            console.log("deleted successfully")
        })
    }
       
    
    render() {
       
        return (
            <div>
            <p>{this.state.issue_desc}</p>
            <button onClick={this.close}><Link to={"/"}>Close Issue</Link></button>
            <button onClick={this.delet}><Link to={"/"}>Delete Issue</Link></button>
            </div>
        )
    }
}