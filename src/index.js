import React from 'react';
import ReactDOM from 'react-dom';
//local state and lifecycle hooks.
//本地的状态和生命周期的钩子函数
class Clock extends React.Component{
  constructor(props){
    super(props);// this.props
    //在构造函数内部初始化state对象
    this.state = {date:new Date};
  }
  //组件将要挂载
  componentWillMount(){
      console.log('1. componentWillMount 组件将要挂载');
  }
  /*
   * 表示向当前的组件实体上添加一个属性
   * 这样定义的函数，无论在何时何地执行，里面的this永远当前组件的实例
   */
  tick = ()=>{
    //此方法可以用来修改状态对象.是从父类继承过来的。
    //永远永远只能用setState方法来修改状态，因为一旦调用了setState方法，不但可以修改状态对象，还会自动重新调用render方法修改界面的显示效果
    this.setState({
      date:new Date()
    });
    /*function setState(state){
      //this.state = state;
      //1.调用setState的时候不需要传入完整对象
      //2.通过setState只能增加字段，或者覆盖同名字段,但不能删除字段
      this.state = Object.assign({},this.state,state);
      this.render();
    }*/

  }
  //组件挂载完成后
  componentDidMount(){
    console.log('3. componentDidMount 组件将要挂载');
    //在组件挂载完成后，开启了一个定时器，每隔一秒执行一下tick方法，另外会把返回的定时器对象传给timerID,在timerID保存到了当前实例
    this.timerID = setInterval(this.tick,1000);
  }
  componentWillUnmount(){
    console.log('4. componentWillUnmount 组件将要卸载');
    clearInterval(this.timerID);
  }

  /**
   * 如果一个值或属性是不需要在render的时候使用的，就不能放在state里。可以放在实例上
   */
  render(){
    console.log('2. render 挂载 ');
    return (
      <div>
        <h1>Hello World</h1>
        <h2>It's {this.state.date.toLocaleString()}</h2>
      </div>
    )
  }
}
ReactDOM.render(<Clock/>,document.querySelector('#root'));