import React from 'react';
import ReactDOM from 'react-dom';
class Child extends React.Component{
    componentWillUpdate(){
        console.log('componentWillUpdate');
    }
    render(){
        return (
            <input
                type="text"
                onChange={(event)=>this.props.handleChange(event.target.value)}
                value={this.props.val}/>
        )
    }
}
class Parent extends React.Component{
    constructor(){
        super();
        this.state = {val:''};
    }
    handleChange = (val)=>{
       this.setState({val});
    }
    render(){
        return (
            <div>
                <Child val={this.state.val}
                       handleChange={this.handleChange}/>
                <Child val={this.state.val}/>
                <Child val={this.state.val}/>
            </div>
        )
    }
}
ReactDOM.render(<Parent/>,document.querySelector('#root'));