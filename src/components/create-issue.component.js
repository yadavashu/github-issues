import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class CreateIssue extends Component {

    state={
        issue_desc:'',
        status:true
    }

    issuedes=(e)=>{
        this.setState({
            issue_desc:e.target.value
        })
    }
    submit=(e)=>{
        e.preventDefault();
        console.log('form submitted')
        console.log(`Issue-description:${this.state.issue_desc}`)

        const issue={
            issue_desc:this.state.issue_desc,
            status:this.state.status
        }
        axios.post('http://localhost:8000/create',issue)
        .then(res => console.log(res.data));
        this.setState({
            issue_desc:' '
        })
    }

    onClose=e=>{
        this.props.onClose && this.props.onClose(e);
    }
    render() {
        if(!this.props.show)
        return null;
        return (
            <div className="Form-create">
            <form>
            <div className="form-row">
              <div className="col">
                <input type="text" className="form-control" placeholder="Enter Issue" onChange={this.issuedes} value={this.state.issue_desc}/>
                <button type="submit" class="btn btn-primary" onClick={this.submit}>Submit</button>
              </div>
            </div>
          </form>
          <button onClick={e=>{
              this.onClose(e);
          }}><Link to={"/"}>Close</Link></button>
        </div>
        )
    }
}