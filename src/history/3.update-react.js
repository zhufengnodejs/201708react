import React from 'react';
import ReactDOM from 'react-dom';
//元素的更新
//1.React元素是不可变的,如果要更新的话需要创建新的元素,然后重新渲染
function tick(){
  //每次执行tick函数的时候都会创建一个新的React元素
  let clock = (
    <div>
      <p>
        <h1>{new Date().toLocaleString()}</h1>
      </p>
    </div>
  )
  ReactDOM.render(clock,document.querySelector('#root'));
}
setInterval(tick,1000);