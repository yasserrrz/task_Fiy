import React from 'react'
import { Todo } from '../model'
import SingleTodo from '../SingleTodo/SingleTodo';
imp
interface Props {
    todos : Todo[];
    setTodos :React.Dispatch<React.SetStateAction<Todo[]>>;

}
export default function TodoList({todos ,setTodos} :Props) :React.ReactNode {
  return (
   <>
     <div className="todos">
                {todos.map((t , index)=>{
                    return<>
                        <div key={index} >
                             <SingleTodo todo={t} key={t.id} 
                             todos={todos}
                             setTodos={setTodos}
                             ></SingleTodo>
                        </div>
                    </>
                })}
        </div>
   </>
  )
}
