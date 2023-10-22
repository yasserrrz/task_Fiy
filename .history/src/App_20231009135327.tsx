import {useState} from 'react'
import InputFeild from './components/InputFeild/InputFeild'
import './App.css'
import { Todo } from './components/model';
import TodoList from './components/TodoList/TodoList';
import {Dra } from 'react-beautiful-dnd'

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
  return (
    <
    
  )
}
