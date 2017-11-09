import React from 'react';
import ReactDOM from 'react-dom';
import Todos from "./3.todo";
import Counter from "./5.counter";
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