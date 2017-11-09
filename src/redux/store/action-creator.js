import * as types from './action-types';
//绑定的是dispatch和action
import {bindActionCreators} from 'redux';
import store from './index';
let dispatch = store.dispatch;
let actionCreators =  {
    //actionCreator就是用来创建action的函数
//每一个动作类型对应一个action-creator
    add(payload) {
        return {
            type: types.ADD,
            payload
        }
    },
    sub(payload) {
        return {
            type: types.SUB,
            payload
        }
    }
}
export default bindActionCreators(actionCreators,dispatch);


/*
let actionCreators =  {
    //actionCreator就是用来创建action的函数
//每一个动作类型对应一个action-creator
    add(payload) {
        dispatch({
            type: types.ADD,
            payload
        });
    }
}*/
