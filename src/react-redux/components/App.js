import React from 'react';
import Counter from "./Counter";
import Todos from "./Todos";
export default class App extends React.Component{
    render(){
        return (
            <div>
                <Counter/>
                <Todos/>
            </div>
        )
    }
}
/**
 *
 **/