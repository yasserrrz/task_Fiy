import React, { useState , useRef} from 'react'
import { Todo } from '../model'
import {AiFillEdit ,AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import './singleTodo.css'
type Props = {
    todo : Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
export default function SingleTodo({todo , setTodos , todos }:Props) :React.ReactNode {
      const [edit , setEdit] = useState<boolean>(false);
      const [editTodo , setEditTodo] = useState<string>(todo.todo);
      const inputRef = useRef()
      const handelDone  = (id:number)=> {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)) )
      }
    const handelDelet = (id:number)=>{
        setTodos(todos.filter((todo)=>todo.id !== id  )) 
    };
    const handelEdit = (id  :number , e:React.FormEvent)=>{
        e.preventDefault();
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, todo  : editTodo} : todo)) );
        setEdit(false);
    };
  return (
    <form className='todos_single' onSubmit={(e)=>{handelEdit(todo.id , e)}}>
        {
            edit? 
            <>
                <input className='form-control' value={editTodo}  onChange={(e)=>{setEditTodo(e.target.value)}}/>
            </>
            :
            
                todo.isDone?
                <>
                
            <s className="todos_single_text">
            {todo.todo}
            </s>
                
                </>
                :
                <>
                
                
            <span className="todos_single_text">
                {todo.todo}
            </span>
                
                </>
            

        }

       
       <div className=" " style={{display:"flex"}}>
       <span className='icon' onClick={()=>{setEdit(!edit)}}>
            <AiFillEdit/>
            </span>
            <span className='icon' onClick={()=>{handelDelet(todo.id)}}>
            <AiFillDelete/>
        </span>
        <span className='icon' onClick={()=>{handelDone(todo.id)}}>
            <MdDone/>
        </span>
       </div>
        

    </form>
  )
}
