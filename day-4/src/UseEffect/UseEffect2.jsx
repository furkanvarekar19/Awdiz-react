import {useEffect,useState} from "react"
function UseEffect2(){
  const [counter,setCounter]= useState(1)
  useEffect(()=>{
    alert("Hello World  !")
  },[])

    return(
        <div>
            <h1>UseEffect : type2 :- Empty dependencies</h1>
            <h1>Counter : {counter}</h1>
            <button onClick={()=>setCounter(counter + 1)}>+</button>
        </div>
    )
}
export default UseEffect2;