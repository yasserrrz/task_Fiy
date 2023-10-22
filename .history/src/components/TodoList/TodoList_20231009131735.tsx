import React from 'react'
import { Todo } from '../model'
import SingleTodo from '../SingleTodo/SingleTodo';
import './todolist.css'
interface Props {
    todos : Todo[];
    setTodos :React.Dispatch<React.SetStateAction<Todo[]>>;

}
export default function TodoList({todos ,setTodos} :Props) :React.ReactNode {
  return (
   <>



      <div className="container">
        <div className="todos">
            <span className="todos_heading">
                Active Taskes
            </span>
        </div>
        <div className="todos remove">
        <span className="todos_heading"></span>

        </div>
      </div>
     {/* <div className="todos">
                {todos.map((t )=>{
                    return<>
                        
                             <SingleTodo todo={t} key={t.id} 
                             todos={todos}
                             setTodos={setTodos}
                             ></SingleTodo>
                        
                    </>
                })}
        </div> */}
   </>
  )
}
