import {useEffect,useState} from 'react';

function UseEffect1(){
const [conter , setCounter ] = useState(1);

const [conter1 , setCounter1 ] = useState(1);

// useEffect(() => {
//     alert("INside useeffect.");
//   });

useEffect(()=>{
    alert("Inside useeffect")
})


    return(
        <div className="useEffect1">
            <h1>UseEffect : type1 :- No dependency</h1>
            <h1>counter 1 : {conter}</h1>
            <button onClick={()=>setCounter(conter +1)}>+</button>
            <h1>counter 2: {conter1}</h1>
            <button onClick={()=>setCounter1(conter1 +1)}>+</button>
            

            
        </div>
    )
}
export default UseEffect1;