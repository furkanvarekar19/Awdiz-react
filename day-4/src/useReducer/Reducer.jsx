import React, { useReducer } from 'react'


function reducer(state , action){
  switch(action.type){
    case "INCREMENT" :
      return  {...state  , counter : state.counter + 1} ;
      case "DECREMENT":
        return {...state  , counter : state.counter - 1} ;
        case "RESET":
        return {...state , counter : 0} ;
        default:
          return state;
  }
}

const initialState = { counter : 0}



function Reducer() {
//    counter using  useReducer
 const [state , dispatch] = useReducer(reducer , initialState)
  console.log(state);

  function increment(){
    dispatch({type :"INCREMENT"})
  }
  function decrement(){
    dispatch({type: "DECREMENT"} )
  }
  function reset(){
    dispatch({type: "RESET"} )

  }

  return (
    <div className='reducer'>
    <h1>Counter using createContext : {state.counter} </h1>
    <button onClick={increment} className='col'> INCREMENT +</button>
    <button onClick={decrement} className='col'>DECREMENT- </button>
    <button onClick={reset} className='col'>RESET</button>

    </div>
  )
}

export default Reducer;