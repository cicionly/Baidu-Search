import React from 'react';
import ReactDOM from 'react-dom';
import Suggest from './component/Suggest.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class Panel extends React.Component{
    render(){
        return <div className="panel panel-default">
            <div className="panel-heading">tou</div>
            <div className="panel-body">ti</div>
            <div className="panel-footer">wei</div>
        </div>
    }
}
ReactDOM.render(<Panel/>, document.getElementById('root'));

