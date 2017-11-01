import React,{Component} from 'react';
import ReactDOM from 'react-dom';
function Blog(props){
 let sidebar =  (
   <ul>
     {
       props.posts.map((item,index)=>(
         <li key={item.id}>{item.title}</li>
       ))
     }
   </ul>
 )
 let contents = (
   <ul>
     {
       props.posts.map((item,index)=>(
         <li key={item.id}>{item.content}</li>
       ))
     }
   </ul>
 )
 return (
   <div>
     {sidebar}
     <hr/>
     {contents}
   </div>
 )
}
let posts = [
  {id:1,title:'标题1',content:'内容1'},
  {id:2,title:'标题2',content:'内容2'}
]
ReactDOM.render(<Blog posts={posts}/>,document.querySelector('#root'));
