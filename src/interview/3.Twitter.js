import React,{Component} from 'react';
import ReactDOM from 'react-dom';
function fetchUser(username){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve({username,password:'123456'});
        },3000)
    });
}
class Twitter extends Component{
    constructor(){
        super();
        this.state = {user:{}};
    }
    componentDidMount(){
      fetchUser(this.props.username)
          .then(user=>this.setState({user}))
    }
    render(){
        return (
            this.props.children(this.state.user)
        )
    }
}
ReactDOM.render(<Twitter username="zfpx">
    {
        user=><div>{user.username}{user.password}</div>
    }
</Twitter>,document.querySelector('#root'));

