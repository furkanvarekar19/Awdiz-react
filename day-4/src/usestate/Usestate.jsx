import './usestate.css';
import { useState } from "react"

function Usestate(){

  const [counter,setCounter] = useState(1);
  const [counter1,setCounter1] = useState(10);

//   console.log(counter);

function Increment() {

    // console.log("Inside function");


        setCounter(counter + 1);
    
    // setCounter((prevValue) => prevValue + 1);

}
function Decrement() {

    // console.log("Inside function");
    if(counter>1){
        setCounter(counter - 1);
        // setCounter((prevValue) => prevValue + 1);
    }

}

function Reset(){
    setCounter(1);
}

function Increment1() {

    // console.log("Inside function");
    if(counter === 10){
        
    setCounter1(counter1 + 1);
    }
    // setCounter((prevValue) => prevValue + 1);

}
function Decrement1() {

    // console.log("Inside function");
    if(counter1>10){
        setCounter1(counter1 - 1);
        // setCounter((prevValue) => prevValue + 1);
    }

}

function Reset1(){
    setCounter1(10);
}



    return(
        <div className='flex'>
        <div className="usestate">

            <h1>Counter 1: {counter}</h1>
            <button onClick={Increment} className='btn'>+</button>
            <button onClick={Decrement}  className='btn'>-</button>
            <button onClick={Reset}  className='btn'>Reset</button>

            <h1>Counter 2: {counter1}</h1>
            <button onClick={Increment1}  className='btn'>+</button>
            <button onClick={Decrement1}  className='btn'>-</button>
            <button onClick={Reset1}  className='btn'>Reset</button>

        </div>
        </div>
    )   
}
export default Usestate;