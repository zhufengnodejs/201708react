import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//温度判断器 判断在指定的温度条件下水是否能被烧开
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>水开了!</p>;
  } else {
    return <p>水没开!</p>;
  }
}
//输入温度的组件
class TemperatureInput extends Component{
  constructor(){
    super();
    this.state = {temperature:0}
  }
  handleChange = (event)=>{
    this.setState({temperature:event.target.value});
  }
  render(){
    return (
      <fieldset>
        <label>请输入温度
          <input type="text"
                 value={this.state.temperature}
                 onChange={this.handleChange}
          />
        </label>
      </fieldset>
    )
  }
}
class Calculator extends Component {
  render() {
    return (
      <div>
        <TemperatureInput/>
        <TemperatureInput/>
      </div>
    )
  }
}


ReactDOM.render(<Calculator/>, document.querySelector('#root'));
