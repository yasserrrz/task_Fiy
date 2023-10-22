import React from 'react'
import { Todo } from '../model'
import {AiFillEdit} from 'react-icons/ai'
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
        <span className=''></span>
    </form>
  )
}
