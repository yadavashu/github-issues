import React, {Component} from 'react';

export default class CreateIssue extends Component {

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
                <input type="text" className="form-control" placeholder="Enter Issue" />
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
          <button onClick={e=>{
              this.onClose(e);
          }}>Close</button>
        </div>
        )
    }
}