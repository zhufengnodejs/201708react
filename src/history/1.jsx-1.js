//react是核心库
import React from 'react';
//react跟DOM相关的库
import ReactDOM from 'react-dom';
//1.使用ReactDOM的render方法，把一个h1标题存放在DOM容器内容
//2.因为这种JSX语法是React扩展的语义，跟原生JS不一样。这样的代码是不是能直接在浏览器中运行的，需要经过webpack中babel-loader的编译
//3.React元素是构建React应用的基本单位
//4.如果希望在React元素内嵌表达式，则需要用{}包裹起来。表达式就是任意的变量、数字的运算结合.表达必须要返回一个结果。
let user = {
  firstName:'王',
  lastName:'肖肖'
}
//Objects are not valid as a React child
//对象不是React的合法子元素
function format(user){
  return `${user.firstName}${user.lastName}`;
}
function greeting(user){
  if(user){
    return format(user);
  }else{
    return '你好，陌生人!';
  }
}
let element = <h1>{greeting()}</h1>;
/*let element = React.createElement('h1',null,'你好，陌生人!');*/
//{type:'h1',props:{children:'你好，陌生人!'}} 虚拟DOM
//就是把虚拟DOM转变成真实的DOM并插入到DOM根节点里
ReactDOM.render(
  element,
  document.querySelector('#root')
);
