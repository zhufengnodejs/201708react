import React from 'react';
import {HashRouter as Router,Route,Link,NavLink} from 'react-router-dom';
import './link.css'
// /a  /b /cba /nba /mba /mmp
function Home(props){
  return <div>{props.match.params.name}</div>
}
//render是路径匹配则渲染，路径不匹配则不渲染。
//children也就是管你匹配不匹配都会渲染
function MenuLink(props){
  return <Route path={props.x} children={
    ({match})=>{
      return (
        <div className={match?'active':''}>
          <Link to={props.x}>{props.y}</Link>
        </div>
      )
    }
  }/>
}
export default function MenuLinkExample(){
  return (
    <Router>
      <div>
        <NavLink activeClassName="active" to="/home" >首页</NavLink>
        <NavLink activeClassName="active"  to="/about" >关于我们</NavLink>
        <hr/>
        <Route path="/:name" component={Home}/>
      </div>
    </Router>
  )
}
