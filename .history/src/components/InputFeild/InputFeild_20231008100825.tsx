import React from 'react'
import 'first'
export default function InputFeild() {
  return (
    <>
       <form className='input'>
           <input type="text" placeholder='Enter a task' className='input_box' />
           <button className='input_submit' type='submit'></button>
       </form>
    </>
  )
}
