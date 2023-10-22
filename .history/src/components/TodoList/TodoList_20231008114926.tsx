import React from 'react'
import { Todo } from '../model'
interface Props {
    todos : Todo[];
    setTodos :React.Dispatch<React.SetStateAction<Todo[]>>;

}; 
export default function TodoList({todos ,setTodos} :Props) :React.ReactNode {
  return (
   <>
     <div>
                {todos.map((t)=>{
                    return<>
                        <div className="dodos"></div>
                    </>
                })}
        </div>
   </>
  )
}
