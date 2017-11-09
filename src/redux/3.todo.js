import React, {Component} from 'react';
import {createStore} from 'redux';

const ADD_TODO = 'ADD_TODO';//增加一个TODO
const DEL_TODO = 'DEL_TODO';//删除一个TODO
//状态树，因为状态一般都用对象，而对象都是🌲型结构
let initState = {todos: []};
let reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TODO:
            //payload是新的TODO字符串
            return {todos: [...state.todos, action.payload]};
        case DEL_TODO:
            //index是将要被删除的索引
            return {todos: state.todos.filter((item, index) => index != action.index)}
        default:
            return state;
    }
}
let store = createStore(reducer);
//{getState,dispatch,subscribe}

export default class Todos extends Component {
    constructor() {
        super();
        this.state = {todos: store.getState().todos};
    }
    componentDidMount(){
        this.unSubscribe = store.subscribe(()=>{
            this.setState({todos:store.getState().todos});
        })
    }
    componentWillUnmount(){
        this.unSubscribe();
    }
    handleKeyDown = (event)=>{
        let keyCode = event.keyCode;
        if(keyCode == 13){
            let payload = event.target.value;
            store.dispatch({type:ADD_TODO,payload})
        }
    }
    render() {
        return (
            <div>
                <input type="text" onKeyDown={this.handleKeyDown}/>
                <ul>
                    {
                        this.state.todos.map((item,index)=>(
                            <li key={index}>{item} <button>x</button></li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}