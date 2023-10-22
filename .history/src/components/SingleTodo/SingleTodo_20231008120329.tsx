import React from 'react'
import { Todo } from '../model'
type Props = {
    todo : Todo,
    todos:Todo[],
    setTodos
}
export default function SingleTodo({todo , setTodos , todos , }) {
  return (
    <div>SingleTodo</div>
  )
}
