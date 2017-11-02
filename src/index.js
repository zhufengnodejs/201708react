import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//受控组件的意思是input显示的值受React控制
class RegForm extends Component{
  constructor(){
    super();
    this.state = {username:'',password:'',desc:''};
  }
  //event.target.dataset是自定义属性对象
  handleChange = (event)=>{
    let field = event.target.dataset.field;
    let val = event.target.value;//取得输入框的值
    this.setState({[field]:val});
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
                 onChange={this.handleChange}
                 value={this.state.username} />
        </label>
        <label>密码
          <input type="text"
                 data-field="password"
                 required
                 onChange={this.handleChange}
                 value={this.state.password}/>
        </label>
        <label>
          简介
          <textarea data-field="desc" cols="30" rows="10" value={this.state.desc} onChange={this.handleChange}></textarea>
        </label>
        <input type="submit"/>
      </form>
    )
  }
}
ReactDOM.render(<RegForm/>,document.querySelector('#root'));
