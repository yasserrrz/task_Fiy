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
export default function TodoList({todos ,setTodos , setCompleatedTodos , compleatedTodos} :Props) :React.ReactNode {
  return (
   <>



      <div className="container-fluid ">
       <div className="row my-3">
        <Droppable droppableId='TodosList'>
          {

              (provided , snapshot)=>(
                <div className=" col-12 col-md-6 mb-3" ref={provided.innerRef} {...provided.droppableProps}>
                <div className="todos>
                    <span className="todos_heading">
                        Active Taskes
                    </span>
                    {todos.map((t , index )=>{  
                            return<>
                                
                                     <SingleTodo todo={t} key={t.id} 
                                       index={index}
                                     todos={todos}
                                     setTodos={setTodos}
                                     ></SingleTodo>
                                
                            </>
                        })}
                        {provided.placeholder}
                        </div>
                </div>
              )
          }

       
        </Droppable>


        
        <Droppable droppableId='DoneList'>
          {
            (provided)=>(

                <div className="col-12 col-md-6 " ref={provided.innerRef} {...provided.droppableProps}>
            <div className="todos remove ">

        <span className="todos_heading">
                Compleated Taskes
            </span>
            {compleatedTodos.map((t, index )=>{  
                    return<>
                        
                             <SingleTodo todo={t}
                              key={t.id} 
                             index={index}
                             todos={compleatedTodos}
                             setTodos={setCompleatedTodos}
                             ></SingleTodo>
                        
                    </>
                })}
                        {provided.placeholder}
            </div>

               </div>
            )
          }

        
                </Droppable>
       </div>
      </div>

   </>
  )
}
