import React from 'react'
import { Todo } from '../model'
import SingleTodo from '../SingleTodo/SingleTodo';
import './todolist.css'
import { Droppable } from 'react-beautiful-dnd';
interface Props {
    todos : Todo[];
    setTodos :React.Dispatch<React.SetStateAction<Todo[]>>;
    setCompleatedTodos:  React.Dispatch<React.SetStateAction<Todo[]>>;
    compleatedTodos: Todo[];
}
export default function TodoList({todos ,setTodos} :Props) :React.ReactNode {
  return (
   <>



      <div className="container-fluid ">
       <div className="row my-3">
        <Droppable droppableId='TodosList'>
          {

              (provided)=>(
                <div className=" col-12 col-md-6 mb-3" ref={provided}>
                <div className="todos">
                    <span className="todos_heading">
                        Active Taskes
                    </span>
                    {todos.map((t )=>{  
                            return<>
                                
                                     <SingleTodo todo={t} key={t.id} 
                                     todos={todos}
                                     setTodos={setTodos}
                                     ></SingleTodo>
                                
                            </>
                        })}
                        </div>
                </div>
              )
          }

       
        </Droppable>
      <Droppable>

        <div className="col-12 col-md-6 ">
            <div className="todos remove ">

        <span className="todos_heading">
                Compleated Taskes
            </span>
            {todos.map((t )=>{  
                    return<>
                        
                             <SingleTodo todo={t} key={t.id} 
                             todos={todos}
                             setTodos={setTodos}
                             ></SingleTodo>
                        
                    </>
                })}
            </div>

        </div>
                </Droppable>
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
