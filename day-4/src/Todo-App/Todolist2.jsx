import React, { useState } from 'react'

function Todolist2() {
    const [todo2 , settodo2] = useState('')
    console.log(todo2);

  const [alltodo , setalltodo] = useState([])
//   console.log(alltodo);


   function handletodo(e){
      settodo2(e.target.value)
   }

  function hadlesubmit(){
       setalltodo(...alltodo , todo2);
       settodo2('');
  }

  return (
    <div>
      <h1>Todolist2 :</h1>

       <input type="text" value={todo2}  onChange={handletodo} placeholder='Add todo'/>
       <button onClick={hadlesubmit} >Add todo</button>

       {alltodo.map((todo2 , i) =>(
        <div key={i}>
            <p>  {i + 1} {todo2}  </p>
        </div>
       ))}
  
  </div>

  );
};

export default Todolist2;