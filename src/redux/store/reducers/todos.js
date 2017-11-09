const ADD_TODO = 'ADD_TODO';//增加一个TODO
const DEL_TODO = 'DEL_TODO';//删除一个TODO
//状态树，因为状态一般都用对象，而对象都是🌲型结构
let initState = {todos: []};
let reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TODO:
            //payload是新的TODO字符串
            return {todos: [...state.todos, action.payload]};
        case DEL_TODO:
            //index是将要被删除的索引
            return {todos: state.todos.filter((item, index) => index != action.index)}
        default:
            return state;
    }
}
export default reducer;