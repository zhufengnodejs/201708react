import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
function Home(){
  return <h1>Home</h1>
}
function About(){
  return <h1>About</h1>
}
//用户组件
/**
 * props
 * history
 *   push(路径,状态对象) 表示跳转路径
 *   goBack 返回上一个路径
 * location
 *   pathname 当前的路径名
 *   state 状态对象,当此路径是通过push跳过来的，就指的push的第二个参数
 * match 匹配 是当前URL中的路径和当前路径的path属性的匹配结果
 *   isExact 是否精确匹配 url路径 和path是否完全一样
 *   params 路径参数对象 属性来自于path中的占位符 值来自于真实的URL
 */
function User(props){
  console.log(props);
  return <h1>{props.match.params.id}</h1>
}
let users = [
  {id:1,name:'zfpx1',age:1},
  {id:2,name:'zfpx2',age:2}
]
function Users(){
  return (
    <ul>
      {
        users.map((item,index)=>(
          <li key={index}>
            <Link to={{pathname:'/detail',state:{user:item}}}>{item.name}</Link>
          </li>
        ))
      }
    </ul>
  )
}
function Detail(props){
  console.log(props);//props.location.state
  let {id,name,age} = props.location.state?props.location.state.user:{};
  return (
    <div>
      ID:{id}<br/>
      name:{name}<br/>
      age:{age}
    </div>
  )
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
        <li><Link to="/user/1">用户</Link></li>
        <li><Link to="/users">用户列表</Link></li>
      </ul>
      <hr/>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/user/:id" component={User}/>
      <Route path="/users" component={Users}/>
      <Route path="/detail" component={Detail}/>
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
