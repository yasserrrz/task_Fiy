import React from 'react'
import './inputFeild.css'
interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>
}
export default function InputFeild({setTodo , todo} :Props) :React.ReactNode{
  return (
    <>
       <form className='input'>
           <input type="text" placeholder='Enter a task' className='input_box' 
           onChange={(e)=>{setTodo(e.targe)}}
           />
           <button className='input_submit' type='submit'>Go</button>
       </form>
    </>
  )
}
