import { useState } from 'react';
import './bgcolor.css'

export const Bgcolor = () => {
    const [Color , setColor] = useState("olive")



  return (
    // style = {{backgroundColor:Color}}
    <>
    <h1> Bg-color</h1>
     <div className='color-flex'  style = {{backgroundColor:Color}}>
       
        <div className='center'>
            <button className='red' onClick={()=> setColor('red')}>Red</button>
            <button className='green'  onClick={()=> setColor('green')}>Green</button>
            <button className='blue'  onClick={()=> setColor('blue')}>Blue</button>
            <button className='purple'  onClick={()=> setColor('purple')}>purple</button>
             <button className='reset' onClick={()=> setColor("olive")}>Reset</button>
        </div>
     </div>
    </>
  )
}

export default Bgcolor;

