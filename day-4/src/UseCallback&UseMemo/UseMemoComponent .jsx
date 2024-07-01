import React, { useMemo, useState } from 'react'

function UseMemoComponent () {
 const [counter , setCounter] = useState(0);
 const [data , setdata] = useState("");
//  console.log(data);
//  const expCount = ExpensiveCalculation(counter);
const expCount = useMemo(() => ExpensiveCalculation(counter) , [counter]);


  return (
    <div className='centers'> 
        <h1>UseMemo </h1> <br />
        <input type="text" onChange={(event)=> setdata(event.target.value)}/> <br />
        <h2>Expensive Calculation Count : {expCount} </h2> <br />
        <h2>Counter : {counter} </h2>
        <button onClick={()=>setCounter(counter + 1)}>+ increment</button>
    </div>
  )
}

function ExpensiveCalculation(counter){
  console.log("Expensive Calculation");
       var totalCount = 0;
       for(var i = 0; i<1000000000 ; i++){
        totalCount += counter;
       }

  return totalCount;

}

export default UseMemoComponent ;