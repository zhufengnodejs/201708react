import React, {Component} from 'react';
import store from './store/index.js';
import * as types from './store/action-types';
export default class Todos extends Component {
    constructor() {
        super();
        this.state = {todos: store.getState().todos.list};
    }
    componentDidMount(){
        this.unSubscribe = store.subscribe(()=>{
            this.setState({todos:store.getState().todos.list});
        })
    }
    componentWillUnmount(){
        this.unSubscribe();
    }
    handleKeyDown = (event)=>{
        let keyCode = event.keyCode;
        if(keyCode == 13){
            let payload = event.target.value;
            store.dispatch({type:types.ADD_TODO,payload});
            event.target.value = '';
        }
    }
    delTodo = (index)=>{
        store.dispatch({
            type:types.DEL_TODO,
            index
        })
    }
    render() {
        return (
            <div>
                <input type="text" onKeyDown={this.handleKeyDown}/>
                <ul>
                    {
                        this.state.todos.map((item,index)=>(
                            <li key={index}>{item} <button onClick={()=>this.delTodo(index)}>x</button></li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}