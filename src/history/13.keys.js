import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//numbers:[1,2,3,4,5]
//Each child in an array or iterator should have a unique "key" prop.
//数组或者迭代器中的每一个子元素都应该有一个唯一的key属性
//是用来区分每个子元素
function NumberList(props){
  return (
    <ul>
      {
        props.numbers.map((item,index)=>(
          <li key={index}>{item}</li>
        ))
      }
    </ul>
  )
}
let numbers = [1,1,3,4,5];
ReactDOM.render(<NumberList numbers={numbers}/>,document.querySelector('#root'));
