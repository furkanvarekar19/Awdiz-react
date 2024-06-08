import React, { useState } from 'react'
import './bgcolor.css'


function BigCol2() {
    const [color , setcolor] = useState("white")

   

  return (
    <div style={{backgroundColor:color}} className='bg' >
        <h1>BigCol2</h1>
        <button onClick={() => setcolor('pink')}  style={{padding:'5px 20px', margin:"10px"}} >Pink </button>
        <button onClick={() => setcolor('lightblue')}  style={{padding:'5px 20px', margin:"10px"}}  >Blue </button>
        <button onClick={() => setcolor('lightgreen')}  style={{padding:'5px 20px', margin:"10px"}} >Green </button>
        <button onClick={() => setcolor('white')}  style={{padding:'5px 20px', margin:"10px"}} >Reset </button>



    </div>
  )
}

export default BigCol2;