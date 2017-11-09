import React,{Component} from 'react';
import store from './store/index.js';
import * as types from './store/action-types';

export default class Counter extends Component{
    constructor(){
        super();
        //在初始化的时候，把仓库中的状态拿过来存放到自己的内部状态中
        this.state = {number:store.getState().counter.number};
    }
    //在组件渲染完成后订阅仓库的状态变化事件
    componentDidMount(){
      //取消订阅
      this.unSubscribe = store.subscribe(()=>{
         this.setState({number:store.getState().counter.number});
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
                <button onClick={()=>store.dispatch(add(parseFloat(this.input.value)||0))}>+</button>
                <button onClick={()=>store.dispatch(sub(parseFloat(this.input.value)||0))}>-</button>
            </div>
        )
    }
}
//actionCreator就是用来创建action的函数
//每一个动作类型对应一个action-creator
function add(payload){
    return {
        type:types.ADD,
        payload
    }
}
function sub(payload){
    return {
        type:types.SUB,
        payload
    }
}
