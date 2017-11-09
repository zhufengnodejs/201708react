const ADD = 'ADD';
const SUB = 'SUB';
let initState = {number:0};
let reducer = (state=initState,action)=>{
    switch(action.type){
        case ADD:
            return {number:state.number+action.payload};
        case SUB:
            return {number:state.number-action.payload};
        default:
            return state;
    }
}
export default reducer;