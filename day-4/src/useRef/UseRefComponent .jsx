import React, { useEffect, useRef, useState } from 'react'

function UseRefComponent () {
  const [counter , setCounter] = useState(0);
  console.log(counter , "counter");
  const prevCounter = useRef();
  console.log(prevCounter , "prevCounter");

  useEffect(()=>{
  prevCounter.current = counter;
  },[counter])


  return (
    <div style={{textAlign:'center'}}>
        <h1>UseRefComponent</h1> <br />
        <h2>prevCounter : {prevCounter.current} </h2><br />
        <h2>Counter : {counter}</h2>
        <button onClick={()=> setCounter(counter + 1)}>+</button>
    </div>
  )
}

export default UseRefComponent ;