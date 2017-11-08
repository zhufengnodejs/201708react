/**
 * 派发动作 dispatch(action)
 * 仓库 store
 * 处理器 reducer
 * 订阅 subscribe
 */

//创建仓库
let createStore = function(reducer){
    //仓库里有状态
   let state;
   //此数组中存放着所有的监听函数
   let listeners = [];
   //获取仓库中的状态
   let getState = ()=>state;
    //订阅仓库中状态变化事件
    let subscribe = (listener)=>{
        listeners.push(listener);
    }
   //让外界给仓库派发动作
    //action是一个普通的JS对象, 必须要有一个 type属性
   let dispatch = (action)=>{
      //仓库会把得到的老状态和动作传给reducer,得到新的状态
      state = reducer(state,action);
      //通知所有的订阅函数执行
      listeners.forEach(l=>l());
   }

   //立即派发一个空action,为了初始化仓库的状态
   dispatch({});
   return {//这个就是我们的仓库
       getState,//获取仓库状态
       dispatch,//派发动作
       subscribe//订阅仓库中的状态变化事件
   }
}
const ADD = 'ADD';//加1
const SUB = 'SUB';//减1

//处理器 通过老的状态和动作对象，得到新的状态对象
//{type:ADD} {type:SUB}
//仓库的状态可以是任意类型
//初始状态
let initState = 0;
//仓库需要初始化，在初始化的时候需要传递初始值
let reducer = (state=initState,action)=>{
  switch(action.type){
      case ADD:
          return state + 1;
      case SUB:
          return state - 1;
      default:
          return state;
  }
}
let store = createStore(reducer);
console.log(store.getState());
store.dispatch({type:SUB});
store.dispatch({type:SUB});
console.log(store.getState());
