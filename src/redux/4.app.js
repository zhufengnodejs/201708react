import React from 'react';
import ReactDOM from 'react-dom';
import Todos from "./3.todo";
import Counter from "./5.counter";
// {counter:{number:0},todos:{todos:[]}}
class Page extends React.Component{
    render(){
        return (
            <div>
                <Counter/>
                <Todos/>
            </div>
        )
    }
}

ReactDOM.render(<Page/>,document.querySelector('#root'));