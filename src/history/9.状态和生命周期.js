import React from 'react';
import ReactDOM from 'react-dom';
/**
 * 1.在构造函数里初始化状态对象 {number:0}
 * 2.给button绑定点击事件，当点击按钮的时候要调用setState方法修改state
 */
function MyNumber(props){
  return <h1>{props.number}</h1>;
}
class Counter extends React.Component{
  constructor(){
    super();
    this.state = {number:0};
  }
  handleClick = ()=>{
    // batch multiple setState() calls into a single update
    //因为 setState方法的执行是异步的。所以不能依赖上一个state计算下一个state
    /*this.setState({number:this.state.number+1});
    this.setState({number:this.state.number+1});*/
    //如果setState里面放入一个函数的话，会把它们放入一个队列中串行执行。
   /* this.setState((preState,preProps)=>({
      number:preState.number+1
    }));
    this.setState((preState,preProps)=>({
      number:preState.number+1
    }));*/
   // 0 0 1
    console.log(this.state.number);//0
   this.setState({number:this.state.number+1},()=>{
     console.log(this.state.number);//1
   });
    console.log(this.state.number);//0
  }
  //onClick里面放的是函数的定义,一定不能执行

  render(){
    //把组件的状态传递给子组件的属性
    //单向数据流 数据是从通过属性从上往下传递的
    return (
      <div>
        <MyNumber number={this.state.number}/>
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
  /**
   * Cannot update during an existing state transition
   * 在状态改变中不能再更新
   * Maximum update depth exceeded
   * 最大更新深度超出异常
   */
}
ReactDOM.render(<Counter/>,document.querySelector('#root'));
