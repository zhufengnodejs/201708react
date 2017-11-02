import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//把华氏转摄氏
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
//把摄氏转华氏
function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
//1.参数是温度 2个参数是一个转换函数
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
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
  render(){
    return (
      <fieldset>
        <label>请输入<span style={{color:"red"}}>{this.props.scale}</span>温度
          <input type="text"
                 name={this.props.scale}
                 value={this.props.temperature}
                 onChange={event=>this.props.onTemperatureChange(event)}
          />
        </label>
      </fieldset>
    )
  }
}
class Calculator extends Component {
  constructor(){
    super();
    this.state = {temperature:0,scale:'摄氏'}
  }
  //第一个参数是温度 第二个参数是单位
  handleTemperatureChange = (event)=>{
      this.setState({temperature:event.target.value,scale:event.target.name});
  }
  render() {
    let cTemperature = this.state.scale=='摄氏'?this.state.temperature:tryConvert(this.state.temperature,toCelsius);
    let fTemperature = this.state.scale == '摄氏'?tryConvert(this.state.temperature,toFahrenheit):this.state.temperature;
    return (
      <div>
        <TemperatureInput
          onTemperatureChange={this.handleTemperatureChange}
          temperature={cTemperature} scale="摄氏"/>
        <TemperatureInput
          onTemperatureChange={this.handleTemperatureChange}
          temperature={fTemperature} scale="华氏"/>
        <BoilingVerdict/>
      </div>
    )
  }
}


ReactDOM.render(<Calculator/>, document.querySelector('#root'));
