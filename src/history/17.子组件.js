import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//它会自动包裹传入的子组件，给它加一个红色的实线边框
//如果传入一个子元素 一个虚拟DOM对象
//如果传入多个子元素 虚拟DOM对象数组
//如果没有传入子元素 则为undefined
class Panel extends Component{
 render(){
   console.log(this.props.children);
   return (
     <div style={{border:"1px solid red"}}>
       <ul>
         {
           React.Children.map(this.props.children,(item,index)=>(
             <li key={index}>{item}</li>
           ))
         }
       </ul>
     </div>
   )
 }
}
ReactDOM.render(<Panel>
  <p>world</p>
</Panel>, document.querySelector('#root'));
