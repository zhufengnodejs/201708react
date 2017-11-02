import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//受控组件的意思是input显示的值受React控制
/**
 * A component is changing an uncontrolled input of type text to be controlled. Input elements should not switch from uncontrolled to controlled (or vice versa).
 * 一个组件正在把一个非受控组件变成受控组件
 * 输入元素不应该从非受控到受控，反之也一样
 */
class RegForm extends Component{
  constructor(){
    super();
    this.state = {username:'',password:'',desc:''};
  }
  //event.target.dataset是自定义属性对象
  handleChange = (event)=>{
    //let field = event.target.dataset.field;
    let field = event.target.name;
    let val = event.target.value;//取得输入框的值
    this.setState({[field]:val});//把filed当成一个变量
  }
  handleSubmit=(event)=>{
    event.preventDefault();
    console.log(this.state);
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>用户名
          <input
            required
                 data-field="username"
                 type="text"
                 name="username"
                 onChange={this.handleChange}
                 value={this.state.username} />
        </label>
        <label>密码
          <input type="text"
                 data-field="password"
                 required
                 name="password"
                 onChange={this.handleChange}
                 value={this.state.password}/>
        </label>
        <label>
          简介
          <textarea data-field="desc" cols="30" rows="10" value={this.state.desc} onChange={this.handleChange}></textarea>
        </label>
        <select data-field="fruit" value={this.state.fruit} onChange={this.handleChange}>
          <option value="apple">苹果</option>
          <option  value="banana">香蕉</option>
          <option value="orange">橙子</option>
        </select>
        <input type="submit"/>
      </form>
    )
  }
}
//You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field.
//你为一个表单字段添加了一个value属性，但是并没有提供值改变处理器。这将呈现出一个只读的字段
ReactDOM.render(<RegForm/>,document.querySelector('#root'));
