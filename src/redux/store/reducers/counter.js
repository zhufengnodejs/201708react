import * as types from '../action-types';
let initState = {number:0};
let reducer = (state=initState,action)=>{
    switch(action.type){
        case types.ADD:
            return {number:state.number+action.payload};
        case types.SUB:
            return {number:state.number-action.payload};
        default:
            return state;
    }
}
export default reducer;