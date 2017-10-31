import React from 'react';
import ReactDOM from 'react-dom';
function Person(props){
  return <div>{props.name}</div>;
}
//复合组件
function Welcome(props){
  //{...props}表示批量传属性，就是把props的属性全部传给Person组件
  return <h1><Person {...props}/></h1>
}
function App(){
  //Adjacent JSX elements must be wrapped in an enclosing tag
  //必须返回并且只能返回一个顶级元素
  //Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.
  //render方法没有返回值，这意味着你没有return语句。如果真的不想返回任何东西的话可return null;
  return (
      <div>
        <Welcome name="sara"/>
        <Welcome name="lili"/>
        <Welcome name="lilei"/>
      </div>
  )
}
//什么叫自定义组件和普通组件有什么区别,自定义是指那块可以自定义
//就是用户自己写的组件，所有的组件全是自定义组件
//是跟原生React元素
// 自定义组件=普通组件

ReactDOM.render(<App/>,document.querySelector('#root'));