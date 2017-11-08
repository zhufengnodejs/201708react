import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class Counter extends Component{
    //1.默认属性 getDefaultProps
    static defaultProps = {
      name:'zfpx'
    }
    constructor(){
        super();
        //2. 默认状态
        this.state = {number:0};
    }
    //3. 组建将要挂载到页面上
    componentWillMount(){
        console.log('3.componentWillMount 组建将要挂载到页面上');
    }
    //如果你要进行DOM操作的话，必须在这里进行
    componentDidMount(){
        console.log('5.componentDidMount 组建挂载完成');
    }
    //组件是否需要更新
    //newProps 新的属性对象  newState新的状态对象
    shouldComponentUpdate(newProps,newState){
        console.log('6.shouldComponentUpdate 组件是否需要更新');
        if(newState.number%5==0){
            return true;
        }else{
            return false;
        }
    }
    componentWillUpdate(){
        console.log('7.组件将要更新');
    }
    componentDidUpdate(){
        console.log('8.组件更新完成');
    }
    handleClick=()=>{
        this.setState({number:this.state.number+1});
    }
    render(){
        console.log('4.render 组建的挂载');
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
}
ReactDOM.render(<Counter/>,document.querySelector('#root'));