import React from 'react'
import './inputFeild.css'
interface Props ={

}
export default function InputFeild({setTodo , todo}) :React.ReactNode{
  return (
    <>
       <form className='input'>
           <input type="text" placeholder='Enter a task' className='input_box' />
           <button className='input_submit' type='submit'>Go</button>
       </form>
    </>
  )
}
