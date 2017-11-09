import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class SubCounter extends Component{
    //组件将要接收到新的属性
    //只用当父组建重新渲染的时候，重新render的时候，会传入新的属性
    componentWillReceiveProps(newProps){
       console.log('SubCounter componentWillReceiveProps');
    }
    shouldComponentUpdate(newProps,newState){
        if(newProps.number<15){
            return true;
        }else{
            return false;
        }
    }
    componentWillUnmount(){
        console.log('SubCounter componentWillUnmount');
    }

    render(){
        return (
            <div>
                <p>{this.props.number}</p>
            </div>
        )
    }
}
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
        /*if(newState.number%5==0){
            return true;
        }else{
            return false;
        }*/
        return true;
    }
    componentWillUpdate(){
        console.log('7.组件将要更新');
    }
    componentDidUpdate(){
        console.log('8.组件更新完成');
    }
    handleClick=()=>{
        console.log(this.state.number);//0
        this.setState({number:this.state.number+1},()=>{
            console.log(this.state.number);
        });
        console.log(this.state.number);//0
    }
    render(){
        console.log('4.render 组建的挂载');
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={this.handleClick}>+</button>
                <hr/>
                {
                    this.state.number<10?
                        <SubCounter number={this.state.number}/>
                        :null
                }

            </div>
        )
    }
}
ReactDOM.render(<Counter/>,document.querySelector('#root'));