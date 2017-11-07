import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
/**
 * 1. 如何在跳转路径的时候传参数 state
 * 2. 第二种渲染路由组件的方法 render
 * 3. 如何在一个非直接由路由渲染出来的组件中使用history对象 外面的套一个withRouter
 *
 */
function Public() {
  return <div>公开页面</div>
}
class Login extends Component {
  login = ()=>{
    //模拟登录操作
    fakeAuth.login();
    //跳转到登录前的路径
    if(this.props.location.state)
      this.props.history.push(this.props.location.state.from.pathname);
    else
      this.props.history.push('/');
  }
  render() {
    let {from} = this.props.location.state||{from:'/'};
    return (
      <div>
        <p>你需要登录后才能访问{from.pathname}路径</p>
        <button onClick={this.login}>登录</button>
      </div>
    )
  }
}
class Protected extends Component {
  render() {
    return <div>Protected</div>
  }
}
class AuthExample extends Component {
  render() {
    return (
      <Router>
        <div>
          <AuthButton/>
          <ul>
            <li><Link to="/public">公开页面</Link></li>
            <li><Link to="/protected">受保护页面</Link></li>
          </ul>
          <Route path="/public" component={Public}/>
          <Route path="/login" component={Login}/>
          <PrivateRoute path="/protected" component={Protected}/>
        </div>
      </Router>
    )
  }
}
//在这个对象里模拟登录操作,里面存放一个变量isAuth,用来表示当前用户是否登录
let fakeAuth = {
  isAuth: !!localStorage.getItem('isAuth'),//默认为未登录状态
  login(){//登录
    this.isAuth = true;
    localStorage.setItem('isAuth','true');
  },
  signOut(){//退出
    this.isAuth = false;
    localStorage.clear();
  }
}

//如果说已经登录，则显示欢迎和退出按钮，否则显示你尚未登录
// 只有路由直接渲染的组件才有history location match这三个属性
//而这些的组件的子组件且没有这些属性
//withRouter 是向指定的组件传入三个属性的
let AuthButton = withRouter(function(props) {
  return (
    <div>
      {
        fakeAuth.isAuth ? <p>欢迎
          <button onClick={()=>{
            fakeAuth.signOut();
            props.history.push('/');
          }
          }>退出</button>
        </p> : <p>你尚未登录!</p>
      }
    </div>
  );
})
//判断此用户是否登录，如果登录的话，则正常显示受保护的组件，如果未登录的话则跳转到登录页面
//路由的渲染方式有三种
// 1. component
// 2.使用render的方法,会把render的返回值渲染出来
function PrivateRoute({component: Component, ...rest}) {
  // 当前路径是 /protected的话
  return <Route {...rest} render={
    ({location}) => fakeAuth.isAuth ? <Component/> :
      <Redirect to={{pathname: "/login", state: {from:location}}}/>
  }/>
}
ReactDOM.render(<AuthExample/>, document.querySelector('#root'));