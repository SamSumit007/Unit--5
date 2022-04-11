import { useState } from "react";
import{ TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";
//import { nonoid } from "nanoid"


function Todo(){
    const[todoList, setTodoList] = useState([]);

const getData = (todo)=>{
    // const payload ={
    //     title: todo,
    //     status: false
    // };
    setTodoList([...todoList,todo])
};
return(
  
    <div>

       
    {todoList.map((e) =>(
    <TodoItem  Todo={e}></TodoItem>
    ))}
 <TodoInput getData={getData} />
    </div>

)
}
export {Todo }