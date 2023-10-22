import React from 'react'
import { Todo } from '../model'
import SingleTodo from '../SingleTodo/SingleTodo';
interface Props {
    todos : Todo[];
    setTodos :React.Dispatch<React.SetStateAction<Todo[]>>;

}; 
export default function TodoList({todos ,setTodos} :Props) :React.ReactNode {
  return (
   <>
     <div className="todos">
                {todos.map((t)=>{
                    return<>
                        <div >
                             <SingleTodo todo={t} ke></SingleTodo>
                        </div>
                    </>
                })}
        </div>
   </>
  )
}
