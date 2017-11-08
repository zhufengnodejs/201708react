import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
const ADD = 'ADD';
const SUB = 'SUB';
let reducer = (state=0,action)=>{
    switch(action.type){
        case ADD:
            return state + 1;
        case SUB:
            return state - 1;
        default:
            return state;
    }
}
let store = createStore(reducer);


class Counter extends Component{
    constructor(){
        super();
        //在初始化的时候，把仓库中的状态拿过来存放到自己的内部状态中
        this.state = {number:store.getState()};
    }
    //在组件渲染完成后订阅仓库的状态变化事件
    componentDidMount(){
      store.subscribe(()=>{
         this.setState({number:store.getState()});
      })
    }
    render(){
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={()=>store.dispatch({type:ADD})}>+</button>
                <button onClick={()=>store.dispatch({type:SUB})}>-</button>
            </div>
        )
    }
}
ReactDOM.render(<div>
    <Counter/>
    <Counter/>
</div>,document.querySelector('#root'));