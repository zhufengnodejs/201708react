import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
function Public(){return <div>公开页面</div>}
class AuthExample extends Component{
 render(){
   return (
     <Router>
       <div>
         <AuthButton/>
         <ul>
           <li><Link to="/public">公开页面</Link></li>
           <li><Link to="/login">登录</Link></li>
           <li><Link to="/protected">受保护页面</Link></li>
         </ul>
         <Route path="/public" component={Public}/>
         <Route path="/login" component={Login}/>
         <Route path="/protected" component={Protected}/>
       </div>
     </Router>
   )
 }
}
function AuthButton(){
  return <div>AuthButton</div>;
}
class Login extends Component{
  render(){
    return <div>Login</div>
  }
}
class Protected extends Component{
  render(){
    return <div>Protected</div>
  }
}
ReactDOM.render(<AuthExample/>,document.querySelector('#root'));