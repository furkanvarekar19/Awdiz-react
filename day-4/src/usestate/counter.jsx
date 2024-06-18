import React, { useContext, useState } from 'react'
import { CounterContext } from '../contex/countercontext';
import { Route, useNavigate } from 'react-router-dom';

function Counter() {
    const {state,dispatch} = useContext(CounterContext)
    const [counter,setCounter] = useState(0);
    const router = useNavigate()
    
  function Increment() {
    dispatch({type:"INCREMENT"})
    router('/')
  
      // console.log("Inside function");

          setCounter(counter + 1);
   
  }

  
      return(
          <div className='flex'>
          <div className="usestate">
  
              <h1>Counter : {counter}</h1>
              <button onClick={Increment} className='btn'>+</button>
           
   
          </div>
          </div>
      )   
}

export default Counter;