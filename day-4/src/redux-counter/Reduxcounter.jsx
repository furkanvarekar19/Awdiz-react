import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { decrement, increment } from '../router/action';

function Reduxcounter() {
    const dispatch = useDispatch()
      const counter = useSelector((state) => state.counter)
      console.log(counter, 'counter');

  return (
    <div style={{textAlign: 'center'}}>
        <h1> Using React Redux counter: {counter} </h1>
        <button className='reduxbtn' onClick={()=> dispatch(increment())}>+</button>
        <button className='reduxbtn' onClick={()=> dispatch(decrement())}>-</button>

    </div>
  )
}

export default Reduxcounter