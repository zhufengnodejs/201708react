import React from 'react';
import ReactDOM from 'react-dom';
//JSX的属性
//tabIndex 指的是按tab按切换焦点时候的索引
let imgSrc = 'https://www.baidu.com/img/wanshengdoodle_677234cad70a5974a64e4665c6485c71.gif';
//当给React元素添加属性的时候，属性名称跟原生的HTML不一样。要用驼峰命名法。
//有些特殊的属性比如class=>className for=>htmlFor
//如果给行内样式的话字符串的话直接给会报错。
//The `style` prop expects a mapping from style properties to values, not a string
//style属性期待一个样式对象的映射，而非字符串
//react渲染出来的任何的字符串都要经过转义，所以显示是没有问题的
let msg = '<script>while(true){}</script>';
let ele = <div>
  {msg}
  <button tabIndex="1">1</button>
  <button tabIndex="2">2</button>
  <button tabIndex="3">3</button>
  <img
    style={{border:'1px solid red'}}
    src={imgSrc}
    className="myimg"/>
</div>;
console.log(ele);
//ele就是大名鼎鼎的虚拟DOM
//其实是一个普通的JS对象，但是可以用来描述真实DOM长什么样子
// type props (children)
let ele2 = React.createElement('h1',{className:'zfpx'},'hello');
ReactDOM.render(
  ele2,
  document.querySelector('#root')
);
