import React from 'react';
import ReactDOM from 'react-dom';
class ActionLink extends React.Component{
  //参数是事件对象
  handleClick = (event)=>{
    //调用此方法可以阻止默认事件
    event.preventDefault();
    console.log('click me');
  }
  render(){
    return (
      <div>
        <a href="http://www.baidu.com" onClick={this.handleClick}>
          click me
        </a>
      </div>
    )
  }
}
class Toggle extends React.Component{
  constructor(){
    super();
    this.state = {on:true,num:0};
    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * 解决this问题的三种方法
   * 1. 箭头函数
   * 2. bind this
   * 3. 直接在构造函数中绑定this
   */
  handleClick(num,event){
    //Cannot read property 'setState' of undefined
    //在类组件里，除了生命周期函数和构造函数之外，其它函数里的this指都向undefined
    this.setState({on:!this.state.on,num});
  }
  render(){
    return (

        <button onClick={this.handleClick.bind(this,5)}>
        {this.state.on?'开'+this.state.num:'关'+this.state.num}
      </button>
    )
  }
}
ReactDOM.render(<Toggle/>,document.querySelector('#root'));
