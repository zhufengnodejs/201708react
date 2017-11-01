import React from 'react';
import ReactDOM from 'react-dom';
class Clock extends React.Component{
  render(){
    return (
      <div>
        <h1>Hello World</h1>
        <h2>It's {this.props.date}</h2>
      </div>
    )
  }
}
ReactDOM.render(<Clock date={new Date().toLocaleString()}/>,document.querySelector('#root'));