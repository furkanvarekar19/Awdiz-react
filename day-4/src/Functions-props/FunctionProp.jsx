import { useState } from "react";
function FunctionProp() {
    const [counter, setCounter] = useState(1);
    function Increment() {
      setCounter(counter + 1);
    }
    return (
      <div>
        <h1> Counter : {counter}</h1>
        <ChildrenComponent Increment={Increment} />
      </div>
    );
  }
  
  function ChildrenComponent({ Increment }) {
    return <button onClick={Increment} style={{padding: '3px 8px'}}>+</button>;
  }
  
 





  

export default FunctionProp;