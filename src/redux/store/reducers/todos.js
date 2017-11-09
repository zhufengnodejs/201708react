import * as types from '../action-types';
//状态树，因为状态一般都用对象，而对象都是🌲型结构
let initState = {list: []};
let reducer = (state = initState, action) => {
    switch (action.type) {
        case types.ADD_TODO:
            //payload是新的TODO字符串
            return {list: [...state.list, action.payload]};
        case types.DEL_TODO:
            //index是将要被删除的索引
            return {list: state.list.filter((item, index) => index != action.index)}
        default:
            return state;
    }
}
export default reducer;