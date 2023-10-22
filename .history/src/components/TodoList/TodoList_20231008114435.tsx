import React from 'react'
import { Todo } from '../model'
interface Props ={
    todos : Todo[];
    

}
export default function TodoList({todos ,setTodos}) :React.ReactNode {
  return (
    <div>TodoList</div>
  )
}
