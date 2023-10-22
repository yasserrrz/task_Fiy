import {useState} from 'react'
import InputFeild from './components/InputFeild/InputFeild'
import './App.css'
import { Todo } from './components/model';
import TodoList from './components/TodoList/TodoList';
import {DragDropContext } from 'react-beautiful-dnd'

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
  const handleDragEnd = (result) => {
    if (!result.destination) {
      return; // Dropped outside of a droppable area
    }
    
    const updatedTodos = [...todos];
    const [reorderedTodo] = updatedTodos.splice(result.source.index, 1); // Remove from source
    updatedTodos.splice(result.destination.index, 0, reorderedTodo); // Insert at destination
    setTodos(updatedTodos);
  };
  return (
    <DragDropContext onDragEnd={()=>{const handleDragEnd = (result) => {
      if (!result.destination) {
        return; // Dropped outside of a droppable area
      }
      
      const updatedTodos = [...todos];
      const [reorderedTodo] = updatedTodos.splice(result.source.index, 1); // Remove from source
      updatedTodos.splice(result.destination.index, 0, reorderedTodo); // Insert at destination
      setTodos(updatedTodos);
    };}}>
      <div className="App">
       <span className='heading'>Taskify</span>
       <InputFeild todo={todo} setTodo={setTodo} handelAdd ={handelAdd} ></InputFeild >
        <TodoList compleatedTodos ={compleatedTodos} setCompleatedTodos={setCompleatedTodos}  todos={todos} setTodos ={setTodos}/>
     </div>
    </DragDropContext>
    
  )
}
