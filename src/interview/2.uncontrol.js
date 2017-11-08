/**
 * React中，我们要尽可能的避免操作DOM，但是有些时候不可避免，比如说用一些
 * 第三方的DOM库或者动画库
 **/
import React,{Component} from 'react';
export default class Form extends Component{
    constructor(){
        super();
    }
    handleSubmit = (event)=>{
      event.preventDefault();
      //this.refs是一个对象，KEY是ref制定的字符串，值是它对应的真实的DOM元素
      let username = this.username.value;
      let password = this.password.value;
      console.log({username,password});
    }
    render(){
        //现在REF只能传入一个函数，就是当虚拟DOM转真实DOM并插入到页面之后执行，参数就是真实DOM
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="username">
                    用户名<input type="text" ref={input=>this.username=input}/>
                </label>
                <label htmlFor="username">
                    密码<input type="text" ref={input=>this.password=input} />
                </label>
                <input type="submit"/>
            </form>
        )
    }
}