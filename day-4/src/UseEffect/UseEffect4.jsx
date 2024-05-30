 import {useEffect,useState } from 'react';

function UseEffect4(){

    let [counter,setCounter] = useState(1)
    let [LoggedIn , setLoggdIn] = useState(false);


    function SwitchFlag() {
        setLoggdIn((prevState) => !prevState); 
      }


    useEffect(()=>{
        alert("useEffect4")
    },[LoggedIn])


    return(

        <div>
         {/* {LoggedIn ? (
        <button onClick={SwitchFlag}>Welcome! Logout?</button>
      ) : (
        <button onClick={SwitchFlag}>Please login!</button>
      )} */}

  {/* Assigment && -> if counter is more than 10 and less than 20 then display "counter is in between 10-20"
   else display "counter is out of range". */}

{counter >= 10 && counter<= 20 ? (
        <h2>counter is in between 10-20</h2>

      ) : (
        <h2>counter is out of range</h2>
      )}


            {/* <h1>Counter : {counter} </h1> */}
            <h1>Counter : {counter} </h1>
           

            <button
            onClick={()=> setCounter(counter + 1)}>+</button>
            <button onClick={()=> setCounter(counter - 1)}>-</button>

           
        </div>
    )
}
export default UseEffect4;