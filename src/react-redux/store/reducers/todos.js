import * as types from '../action-types';
let initState = {list:[]};
let reducer = (state=initState,action)=>{
    switch(action.type){
        case types.ADD_TODO:
          return {list:[...state.list,action.payload]}
        default:
            return state;
    }
}
export default reducer;