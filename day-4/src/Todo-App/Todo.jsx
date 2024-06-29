import React, { useState } from 'react'

function Todo() {

  const [todo , setTodo] = useState();
  const [data , setData] = useState([])
//   console.log(todo);

 function tododata(event){
        setTodo(event.target.value)
 }

function todosubmit(){
    setData([...data ,todo]);
    setTodo("");
}

 function deletetodo(index){
      const copy = [...data];
    copy.splice(index , 1);
    setData(copy)
 }



  return (
    <div style={{textAlign:'center'}}>
        <h1>Todo app</h1>
        <input type="text" onChange={tododata} />
        <button onClick={todosubmit}>Add</button> <br />
  

     {
        data.map((todo , item)=>(
            <div key={item}>
               <p>  {item + 1} {todo}  </p>
               <button onClick={()=> deletetodo(item)}>delete</button>
            </div>

        ))}

</div>
  )
}

export default Todo;