/**
 * 派发动作 dispatch(action)
 * 仓库 store
 * 处理器 reducer
 * 订阅 subscribe
 */
//初始状态
let initState = 0;
//创建仓库
let createStore = function(reducer){
    //仓库里有状态
   let state;
   //此数组中存放着所有的监听函数
   let listeners = [];
   //获取仓库中的状态
   let getState = ()=>state;
   //让外界给仓库派发动作
    //action是一个普通的JS对象, 必须要有一个 type属性
   let dispatch = (action)=>{
      //仓库会把得到的老状态和动作传给reducer,得到新的状态
      state = reducer(state,action);
      listeners.forEach(l=>l());
   }
   //订阅仓库中状态变化事件
   let subscribe = (listener)=>{
      listeners.push(listener);
   }
   return {//这个就是我们的仓库
       getState,
       dispatch,
       subscribe
   }
}

