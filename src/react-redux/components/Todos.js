import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as types from '../store/action-types';
class Todos extends Component{
    handleKeyDown = (event)=>{
        if(event.keyCode == 13){
            this.props.add(event.target.value);
        }
    }
    render(){
        return (
            <div>
                <input
                    onKeyDown={this.handleKeyDown}
                    type="text"/>
                <ul>
                    {
                        this.props.list.map((item,index)=>(
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
let mapStateToProps = state=>state.todos;

export default connect(mapStateToProps,{
    add:(payload)=>({type:types.ADD_TODO,payload})
})(Todos)