import React from 'react'
import './inputFeild.css'
interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handelAdd:()=>void
}
export default function InputFeild({setTodo , todo ,handelAdd} :Props) :React.ReactNode{
    
  return (
    <>
       <form className='input' onSubmit={()=>{}}>
           <input type="text" placeholder='Enter a task' className='input_box' 
           onChange={(e)=>{setTodo(e.target.value)}}
           />
           <button className='input_submit' type='submit'>Go</button>
       </form>
    </>
  )
}
