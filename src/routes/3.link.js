import React from 'react';
import {HashRouter as Router,Route,Link} from 'react-router-dom';
// /a  /b /cba /nba /mba /mmp
function Home(props){
  return <div>{props.match.params.name}</div>
}
//render是路径匹配则渲染，路径不匹配则不渲染。
//children是路径匹配则渲染，路径不匹配则渲染,也就是管你匹配不匹配都会渲染
function MenuLink({to,label}){
  return <Route path={to} children={
    props=>{
      console.log(props);
      return (
        <div >
          <Link to={to}>{label}</Link>
        </div>
      )
    }
  }/>
}
export default function MenuLinkExample(){
  return (
    <Router>
      <div>
        <MenuLink to="/home" label="首页"/>
        <MenuLink to="/about" label="关于我们"/>
        <hr/>
        <Route path="/:name" component={Home}/>
      </div>
    </Router>
  )
}
