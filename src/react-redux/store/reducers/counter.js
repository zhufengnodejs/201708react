import * as types from '../action-types';
//定义初始状态
let initState = {number:0};
//定义处理逻辑，用来计算下一个状态
let reducer = (state=initState,action)=>{
    switch(action.type){
        case types.ADD:
            return {number:state.number + 1};
        case types.SUB:
            return {number:state.number - 1};
        default:
            return state;
    }
}
export default reducer;