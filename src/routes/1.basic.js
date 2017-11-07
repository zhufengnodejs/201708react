import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route} from 'react-router-dom';
function Home(){
  return <h1>Home</h1>
}
function About(){
  return <h1>Home</h1>
}
//Router是路由容器，就是他负责处理在内部定义的所有路由
ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>,document.querySelector('#root')
);
