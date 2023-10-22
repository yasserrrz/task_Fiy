import {useState} from 'react'
import InputFeild from './components/InputFeild/InputFeild'
import './App.css'
import { Todo } from './components/model';

export default function App():React.ReactNode {
  
  const [todo , setTodo]  = useState<string>("");
  const [todos , setTodos] = useState<Todo[]>([])
  const handelAdd = (e : React.FormEvent) =>{
    e.preventDefault();
    if(todo){
      setTodos(...todos , {})
    }
  }
  return (
    <div className="App">
       <span className='heading'>Taskify</span>
       <InputFeild todo={todo} setTodo={setTodo} handelAdd ={handelAdd} ></InputFeild>
     </div>
  )
}
