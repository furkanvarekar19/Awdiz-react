import React, { useRef, useState } from 'react'
import Usestate from '../usestate/Usestate';

function UseRef2Component () {

  const counterRef = useRef(0);
  const [counter , setCounter] = useState(10);
   
  function Increment(){
    counterRef.current++;
    console.log(counterRef.current , " current counterRef");
  }

  return (
    <div style={{textAlign:'center'}}>
        <h1>UseRef-2 Component</h1> <br />
          <h1>counterRef : {counterRef.current} </h1>
          <h2> State counter : {counter} </h2> <br />
          <button onClick={()=> setCounter(counter + 1)}>+Increment State</button> <br /> <br />
          <button onClick={Increment}>+Increment Ref</button>
    </div>
  )
}

export default UseRef2Component;