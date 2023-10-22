import React, { useState } from 'react'
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
      const handelDone  = (id:number)=> {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)) )
      }
    const handelDelet = (id:number)=>{
        setTodos(todos.filter((todo)=>todo.id !== id  )) 
    }

      
  return (
    <form className='todos_single'>
        {
            edit? 
            <>
                <input type="text" className='form-controle' />
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
       <span className='icon' onClick={()=>{setEdit(don)}}>
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
