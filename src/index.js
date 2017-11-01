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
  render(){
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} message="Warning"/>
        <button></button>
      </div>
    )
  }
}
ReactDOM.render(,document.querySelector('#root'));
