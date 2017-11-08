import React from 'react';
import ReactDOM from 'react-dom';
//如果不重写SCU的话，用换返回true
//比较前后的差异
class App extends React.PureComponent{
    constructor(){
        super();
        this.state = {todos:[]};
    }
   /* shouldComponentUpdate(newProps,newState){
        //如果新的状态对象和就的状态对象相等，则返回false
        if(newState == this.state){
            return false;
        }else{
            return true;
        }
    }*/
    handleClick = ()=>{
        this.setState({todos:[...this.state.todos,1]});
    }
    render(){
        console.log('render');
        return (
            <div>
                <p>{this.state.todos.length}</p>
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
}
ReactDOM.render(<App/>,document.querySelector('#root'));