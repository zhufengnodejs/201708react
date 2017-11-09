import React,{Component} from 'react';
import store from './store';
import actions from './store/action-creator'

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
                <button
                    onClick={()=>actions.add(parseFloat(this.input.value)||0)}
                >+</button>
                <button onClick={()=>actions.sub(parseFloat(this.input.value)||0)}>-</button>
            </div>
        )
    }
}

