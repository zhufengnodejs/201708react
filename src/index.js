import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//受控组件的意思是input显示的值受React控制
class RegForm extends Component{
  constructor(){
    super();
    this.state = {username:'',password:''};
  }
  handleUserName = (event)=>{
    let username = event.target.value;//取得输入框的值
    this.setState({username});
  }
  handlePassword = (event)=>{
    let password = event.target.value;//取得输入框的值
    this.setState({password});
  }
  render(){
    return (
      <form>
        <label>用户名
          <input
                 type="text"
                 onChange={this.handleUserName}
                 value={this.state.username} />
        </label>
        <label>密码
          <input type="text"
                 onChange={this.handlePassword}
                 value={this.state.password}/>
        </label>
        <input type="submit"/>
      </form>
    )
  }
}
ReactDOM.render(<RegForm/>,document.querySelector('#root'));
