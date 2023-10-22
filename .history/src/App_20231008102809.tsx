import React from 'react'
import InputFeild from './components/InputFeild/InputFeild'
import '.'

export default function App():React.ReactNode {
  return (
    <div className="App">
       <span className='heading'>Taskify</span>
       <InputFeild></InputFeild>
     </div>
  )
}
