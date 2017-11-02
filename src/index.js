import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//它会自动包裹传入的子组件，给它加一个红色的实线边框
class Panel extends Component{
 render(){
   return (
     <div style={{border:"1px solid red"}}>
       {this.props.children}
     </div>
   )
 }
}
ReactDOM.render(<Panel>
  <p>hello</p>
</Panel>, document.querySelector('#root'));
