import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
/**
 * 在一个组件进入或离开的时候添加一系列的类名
 * 比如在进行的时候 example-enter example-enter-active
 **/
export default class Todos extends Component {
  constructor() {
    super();
    this.state = {todos: ["a", "b"]};
  }

  addTodo = (event) => {
    let keyCode = event.keyCode;
    if(keyCode == 13){
      let text = event.target.value;
      this.setState({todos:[...this.state.todos,text]});
      event.target.value = '';
    }
  }

  render() {
    return (
      <div>
        <input
          onKeyDown={this.addTodo}
          type="text"/><br/>
        <ul>
          {
            this.state.todos.map((item, index) => (
              <li>{item}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}