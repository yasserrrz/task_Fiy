import React from 'react'
import { Todo } from '../model'
import {AiFillEdit ,AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import 
type Props = {
    todo : Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
export default function SingleTodo({todo , setTodos , todos }:Props) :React.ReactNode {
  return (
    <form className='todos_single'>
        <span className="todos_single_text">
            {todo.todo}
        </span>
       <div className="">
       <span className='icon'>
            <AiFillEdit/>
            </span>
            <span className='icon'>
            <AiFillDelete/>
        </span>
        <span className='icon'>
            <MdDone/>
        </span>
       </div>
        

    </form>
  )
}
