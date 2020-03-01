import React from 'react';
import jsonp from 'jsonp';

class Suggest extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            words:['1','2','3']
        }
    }

    handleChange = (event)=>{
        let code = event.target.keycode;
    }

    render(){
        return <div className="container">
            <div className="row">
                <div className="col-sm-8 col-sm-offset-2">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <input className="form-control" onChange={this.handleChange}></input>
                        </div>
                        <div className="panel-body">
                            <ul className="list-group">
                            {this.state.words.map((item,index)=>{
                                return <li key={index} className="list-group-item">{item}</li>
                            })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Suggest;