import React, { useState , useRef , useEffect} from 'react'
import { Todo } from '../model'
import {AiFillEdit ,AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import './singleTodo.css'
import { Draggable } from 'react-beautiful-dnd'
type Props = {
    todo : Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
    , index: number
}
export default function SingleTodo({todo , setTodos , todos , index }:Props) :React.ReactNode {
      const [edit , setEdit] = useState<boolean>(false);
      const [editTodo , setEditTodo] = useState<string>(todo.todo);
      const inputRef = useRef<HTMLInputElement>(null)
      const handelDone  = (id:number)=> {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)) )
      }
    const handelDelet = (id:number)=>{
        setTodos(todos.filter((todo)=>todo.id !== id  )) 
    };
    const handelEdit = (id  :number , e:React.FormEvent)=>{
        e.preventDefault();
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, todo  : editTodo} : todo)) );
        setEdit(false);
    };
    useEffect(()=>{
        inputRef.current?.focus()
    }, [edit]);
  return (
    <Draggable draggableId={todo.id.toString()} index={index}>

        {
            (provided)=>(


            )
        }

   
            </Draggable>
  )
}
