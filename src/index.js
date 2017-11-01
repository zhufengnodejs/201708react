import React,{Component} from 'react';
import ReactDOM from 'react-dom';
function WarningBanner(props){
   if(!props.warn){
     return null;
   }
   return <div className="warn">{props.message}</div>
}
class Page extends Component{
  constructor(){
    super();
    this.state = {showWarning:false};
  }
  handleClick = ()=>{
    this.setState((preState)=>({showWarning:!preState.showWarning}));
  }
  render(){
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} message="Warning"/>
        <button onClick={this.handleClick}>
          {this.state.showWarning?'隐藏':"显示"}
        </button>
      </div>
    )
  }
}
ReactDOM.render(<Page/>,document.querySelector('#root'));
