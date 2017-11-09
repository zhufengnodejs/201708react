import {createStore,combineReducers} from 'redux';
import counter from './reducers/counter';
import todos from './reducers/todos';
/**
 * 把多个reducer合成一个reducer
 * 把多个状态树合成一个大的状态树
 * counter {number:0}
 * todos {todos:[]}
 */
let reducer = combineReducers({
    counter,
    todos
})
/*
合并后的状态树
{
    counter:{number:0}
    todos:{todos:[]}
}
*/
let store = createStore(reducer);
export default store;