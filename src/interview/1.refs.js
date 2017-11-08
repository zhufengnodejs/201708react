import React,{Component} from 'react';
export default class Form extends Component{
  constructor(){
      super();
      this.state = {username:'',password:''};
  }
  handleSubmit = (event)=>{
      console.log(this.state);
  }
  render(){
      return (
          <form onSubmit={this.handleSubmit}>
              <label htmlFor="username">
                  用户名<input type="text" value={this.state.username}
                            onChange={event => this.setState({username:event.target.value})
              }/>
              </label>
              <label htmlFor="username">
                  密码<input type="text" value={this.state.password}
                           onChange={event=>this.setState({password:event.target.value})}/>
              </label>
              <input type="submit"/>
          </form>
      )
  }
}