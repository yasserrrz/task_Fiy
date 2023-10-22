import {useState} from 'react'
import InputFeild from './components/InputFeild/InputFeild'
import './App.css'
import { Todo } from './components/model';

export default function App():React.ReactNode {
  
  const [todo , setTodo]  = useState<string>("");
  const [todos , setTodos] = useState<Todo>([ ])
  return (
    <div className="App">
       <span className='heading'>Taskify</span>
       <InputFeild todo={todo} setTodo={setTodo} ></InputFeild>
     </div>
  )
}
