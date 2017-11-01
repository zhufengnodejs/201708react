import React,{Component} from 'react';
import ReactDOM from 'react-dom';
function UserGreeting(){
  return <h1>欢迎回来</h1>;
}
function GuestGreet(){
  return <h1>请登录</h1>;
}
function Greeting(props){
  let {isLogin} = props;
  if(isLogin)
    return <UserGreeting/>
  return <GuestGreet/>
}
function LoginButton(props){
  return <button onClick={props.onClick}>登录</button>
}
function LogoutButton(props){
 return <button onClick={props.onClick}>退出</button>
}
class LoginCtrl extends Component{
  constructor(){
    super();
    this.state = {isLogin:false};
  }
  render(){
    let {isLogin} = this.state;
    let button = isLogin?<LogoutButton onClick={()=>this.setState({isLogin:false})}/>
      :<LoginButton  onClick={()=>this.setState({isLogin:true})}/>;
    return (
      <div>
        <Greeting isLogin={this.state.isLogin}/>
        {button}
      </div>
    )
  }
}
ReactDOM.render(<LoginCtrl/>,document.querySelector('#root'));
