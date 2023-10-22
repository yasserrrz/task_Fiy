import React from 'react'
import { Todo } from '../model'
import {AiFillEdit ,AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
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
        <span className='icon'>
            <AiFillEdit/>
            </span><span className='icon'>
            <AiFillDelete/>
        </span>
        </span><span className='icon'>
            <AiFillDelete/>
        </span>
    </form>
  )
}
