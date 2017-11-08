import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Wrapper extends Component{
    render(){
        let children = this.props.children;
        //克隆的时候可以传入新的属性
        //1.被克隆的元素 新的属性对象 新的子元素
        let newEle = React.cloneElement(children,{style:{color:'red'}},'world');
        return newEle;
    }
}
ReactDOM.render(<Wrapper>
    <div id="container">hello</div>
</Wrapper>,document.querySelector('#root'));

