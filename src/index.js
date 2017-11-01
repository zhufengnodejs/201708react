import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class RegForm extends Component{
  render(){
    return (
      <form>
        <label>用户名
          <input type="text" />
        </label>
        <label>密码
          <input type="text"/>
        </label>
        <input type="submit"/>
      </form>
    )
  }
}
ReactDOM.render(<RegForm/>,document.querySelector('#root'));
