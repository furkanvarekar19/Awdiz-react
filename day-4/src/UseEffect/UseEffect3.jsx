import {useEffect,useState} from 'react'

function UseEffect3(){
    const [counter,setCounter] = useState(1)

    useEffect(()=>{
        alert("useEffect")
      },[counter])
    


 return(
    <div>
        <h1>Counter : {counter}</h1>
        <button onClick={()=> setCounter(counter +1)}>+</button>
    </div>
 )
}

export default UseEffect3;