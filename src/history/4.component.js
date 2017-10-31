import React from 'react';
import ReactDOM from 'react-dom';
/**
 * 可以通过函数定义组件
 * 参数是props对象，此对象可以有任意类型的参数
 * 返回一个React元素
 */
/*function Welcome(props){
  return <h1>{props.name}</h1>;
}*/
//一个普通的类只要继承了React组件类，就成为一个自定义组件
class Welcome extends React.Component{
  constructor(props){
    super(props);//调用父类的构造函数,目的是继承父类的私有属性
    //this.props = props;
  }
  //至少需要一个render方法，用来返回react元素
  render(){
    return <h1>{this.props.name}</h1>
  }
}
//一个组件可以像React元素标签一样使用
//{name:'zfpx',age:'8'}
//1.渲染函数式组件的时候，会先把传入组件的属性包装成一个对象，传入组件函数，返回一个React元素。然后把返回的React元素渲染到页面上
/**
 * 如何渲染类级组件
 * 1.把所有传递给组件的属性封装成一个对象。
 * 2.把属性对象传递给组件类的构造函数，从而得到组件的实例
 * 3.调用实例的render方法得到React元素
 * 4.ReactDOM把React元素转换成真实的DOM对象并插入到页面中
 * !!! 类的名称必须首字母大写。因为ReactDOM内部就是通过首字母来区分是React元素还是React组件
 */

ReactDOM.render(<Welcome name="zfpx" age="8"/>,document.querySelector('#root'));