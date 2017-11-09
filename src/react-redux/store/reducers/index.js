import {combineReducers} from 'redux';
import counter from './counter';
//此处会返回新的reducer,返回一个函数，它可以接受action,然后交给每个子reducer进行分别处理,处理完成后会返回一个新的子状态对象
export default combineReducers({
    counter
})
/*
{
    counter:{number:0}
}*/
