import React, { memo, useCallback, useState } from 'react'

function UseCallbackComponent () {

    const [counter, setCounter] = useState(0);
    // console.log(counter , 'counter');
    const [data , setData] = useState("");
    console.log(data , 'data');

    // const Increment= () =>{
    //   setCounter(counter + 1)
    // }

    const Increment = useCallback(()=> {
      setCounter((prevValue) =>prevValue + 1);

    },[]);




  return (
    <div className='centers'>
        <h1>UseCallback</h1>

        <input type="text" onChange={(event)=> setData(event.target.value)} />
        <MemoComponent counter={counter} Increment = {Increment}/>
      
    </div>
  )
}
  const MemoComponent = memo( function ChildrenComponent ({counter , Increment}){
    console.log('ChildrenComponent');
     return(
      <div>
      <h1> Counter {counter} </h1>
      <button onClick={Increment}>+ increment</button>
      </div>
     )
   })








export default UseCallbackComponent;