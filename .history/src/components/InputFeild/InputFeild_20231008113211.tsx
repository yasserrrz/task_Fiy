import React from 'react'
import './inputFeild.css'
interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handelAdd:(e: React.FormEvent)=>void
}
export default function InputFeild({setTodo , todo ,handelAdd} :Props) :React.ReactNode{
    const inputRef =
  return (
    <>
       <form className='input' onSubmit={(e)=>{handelAdd(e)}}>
           <input type="text" placeholder='Enter a task' className='input_box' 
           value={todo}
           onChange={(e)=>{setTodo(e.target.value)}}
           />
           <button className='input_submit' type='submit'>Go</button>
       </form>
    </>
  )
}
