import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
//引入组件
import Counter from "./components/Counter";
//引入仓库
import store from './store/index';
//通过store属性把redux仓库传给了Provider,然后Provider又传给了它的子组件
ReactDOM.render(
    <Provider store={store}>
        <Counter/>
    </Provider>
    ,document.querySelector('#root')
);

