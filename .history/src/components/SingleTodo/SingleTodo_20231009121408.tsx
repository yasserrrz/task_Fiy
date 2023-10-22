import React from 'react'
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

      const handelDone  = (id:number)=> {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)) )
      }
    const handelDelet = (id:number)=>{}

      
  return (
    <form className='todos_single'>
        {
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
       <span className='icon'>
            <AiFillEdit/>
            </span>
            <span className='icon' onClick={()=>{handelDelet(TODO.)}}>
            <AiFillDelete/>
        </span>
        <span className='icon' onClick={()=>{handelDone(todo.id)}}>
            <MdDone/>
        </span>
       </div>
        

    </form>
  )
}
