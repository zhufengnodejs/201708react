import {createStore,combineReducers} from 'redux';
import counter from './reducers/counter';
import todos from './reducers/todos';
/**
 * 把多个reducer合成一个reducer
 * 把多个状态树合成一个大的状态树
 * counter {number:0}
 * todos {todos:[]}
 */
/**
function combineReducers(obj){
  //这个函数就是合并后的reducer,state就是完整的state
  //当reducer接到新的action之后，会通知给所有的reducer,那些子reduer都会根据自己的老state和action返回新的state
  return function(state={},action){
    let result= {};
    for(let attr in obj){
      //取出每个reducer,然后执行，执行时传入本reducer老的state,和 action，并且把返回的结果覆盖相应的属性
      result[attr] = obj[attr](state[attr],action);
    }
    return result;
  }
}
 **/
let reducer = combineReducers({
    counter,
    todos
})
/*
合并后的状态树
{
    counter:{number:1}
    todos:{list:[]}
}
*/
let store = createStore(reducer);
export default store;