import React from 'react';
import ReactDOM from 'react-dom';
function UserGreeting(){
  return <h1>欢迎回来</h1>;
}
function GuestGreet(){
  return <h1>请注册</h1>;
}
function Greeting(props){
  let {isLogin} = props;
  if(isLogin)
    return <UserGreeting/>
  return <GuestGreet/>
}
ReactDOM.render(<Greeting isLogin={true}/>,document.querySelector('#root'));
