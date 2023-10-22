import {useState} from 'react'
import InputFeild from './components/InputFeild/InputFeild'
import './App.css'
import { Todo } from './components/model';
import TodoList from './components/TodoList/TodoList';
import {DragDropContext, DropResult } from 'react-beautiful-dnd'

export default function App():React.ReactNode {
  
  const [todo , setTodo]  = useState<string>("");
  const [todos , setTodos] = useState<Todo[]>([])
  const [compleatedTodos , setCompleatedTodos] = useState<Todo[]>([])
  const handelAdd = (e : React.FormEvent) =>{
    e.preventDefault();
    if(todo){
      setTodos([...todos , { id : Date.now(), todo:todo , isDone:false}])
    }
    setTodo("")
  }

  const onDragEnd = (result: DropResult )=>{
      const {source , destination} = result
      if(destination?.droppableId === "zDroppable_two" && source.droppableId !== destination?.droppableId){
              
      }
  };
  
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
       <span className='heading'>Taskify</span>
       <InputFeild todo={todo} setTodo={setTodo} handelAdd ={handelAdd} ></InputFeild >
        <TodoList compleatedTodos ={compleatedTodos} setCompleatedTodos={setCompleatedTodos}  todos={todos} setTodos ={setTodos}/>
     </div>
    </DragDropContext>
    
  )
}
