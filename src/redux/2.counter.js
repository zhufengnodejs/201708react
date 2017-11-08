import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
const ADD = 'ADD';
const SUB = 'SUB';
let initState = {number:0};
let reducer = (state=initState,action)=>{
    switch(action.type){
        case ADD:
            return {number:state.number+action.payload};
        case SUB:
            return {number:state.number-action.payload};
        default:
            return state;
    }
}
let store = createStore(reducer);

class Counter extends Component{
    constructor(){
        super();
        //在初始化的时候，把仓库中的状态拿过来存放到自己的内部状态中
        this.state = {number:store.getState().number};
    }
    //在组件渲染完成后订阅仓库的状态变化事件
    componentDidMount(){
      //取消订阅
      this.unSubscribe = store.subscribe(()=>{
         this.setState({number:store.getState().number});
      })
    }//在组件卸载的时候需要取消订阅
    componentWillUnmount(){
        this.unSubscribe();
    }
    render(){
        return (
            <div>
                <p>{this.state.number}</p>
                <input type="text" ref={input=>this.input = input}/>
                <button onClick={()=>store.dispatch({type:ADD,payload:parseFloat(this.input.value)})}>+</button>
                <button onClick={()=>store.dispatch({type:SUB,payload:parseFloat(this.input.value)})}>-</button>
            </div>
        )
    }
}
ReactDOM.render(<div>
    <Counter/>
    <Counter/>
</div>,document.querySelector('#root'));