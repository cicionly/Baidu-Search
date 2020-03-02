import React from 'react';
import jsonp from 'jsonp';

class Suggest extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            words:['1','2','3'],
            index :-1
        }
    }

    handleChange = (event)=>{
        let wd = event.target.value;
        this.wd = wd;
        jsonp(`http://www.baidu.com/su?wd=${wd}`,{param:"cb"},(err,data)=>{
            console.log(data);
            this.setState({
                words:data.s
            })
        });
    }

    handleKeyDown = (event)=>{
        let code = event.keyCode;
        let index = this.state.index;
        if(code === 38){
            index --;
            if (index === -2){
                index = this.state.words.length-1;
            }
        } else if (code === 40){
            index ++;
            if(index === this.state.words.length){
                index = -1;
            } 
        } else if (code === 13) {
            console.log(event.target.value);
            window.location = `http://www.baidu.com/s?wd=${event.target.value}`;
        }
        this.setState({index});
    }

    render(){
        return <div className="container">
            <div className="row">
                <div className="col-sm-8 col-sm-offset-2">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <input className="form-control" value={(this.state.index === -1? this.wd:this.state.words[this.state.index])} onChange={this.handleChange} onKeyDown={this.handleKeyDown}></input>
                        </div>
                        <div className="panel-body">
                            <ul className="list-group">
                            {this.state.words.map((item,index)=>{
                                return <li key={index} className={"list-group-item "+(this.state.index===index?"active":"")}>{item}</li>
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