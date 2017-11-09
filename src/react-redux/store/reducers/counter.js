import * as types from '../action-types';
let initState = {number:0};
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