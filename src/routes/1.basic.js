import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
function Home(){
  return <h1>Home</h1>
}
function About(){
  return <h1>About</h1>
}
//Router是路由容器，就是他负责处理在内部定义的所有路由
//A <Router> may have only one child element
//一个路由组件只可能拥有唯一的子元素
//因为默认匹配路径 的时候是匹配的前缀，就是说只要当前的URL路径是以本路由规则的path开始的，那会渲染对应的组件
ReactDOM.render(
  <Router>
    <div className="container">
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/about">关于我们</Link></li>
      </ul>
      <hr/>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>,document.querySelector('#root')
);
//Warning: Hash history cannot PUSH the same path; a new entry will not be added to the history stack.
//警告:哈希历史栈不能放入相同的路径 ，一个新的路径条目将不会添加到历史栈中

/**
 * HashRouter 以用哈希路径来跳转
 *   监听的是锚点变化，然后用新的锚点路径去渲染指定组件
 * BrowserRouter
 *   利用的是HTML5 HistoryAPI pushState
 */
