import React, { useContext, useState } from 'react'
import { AuthContext } from '../contex/authcontext';

function Todolist() {

   const {state} = useContext(AuthContext)

    const [todo, setTodo] = useState("");
    const [allTodos, setAllTodos] = useState([]);
    console.log(allTodos, "allTodos");

    function handleChange(event) {
      setTodo(event.target.value);
    }
    function handleSubmit() {
      setAllTodos([...allTodos, todo]);
      setTodo("");
    }
    function deleteTodo(index) {
    //   allTodos.splice(index, 1);
    //   setAllTodos(allTodos);
      const taskcopy = [...allTodos];
      taskcopy.splice(index, 1);
      setAllTodos(taskcopy);
    }
    return (
      <div className='main_todo'>
        <h1>Todo App : {state?.user?.name} </h1>
        <input value={todo} onChange={handleChange}  placeholder='Add your todo list'/>
      
        <button onClick={handleSubmit} className='addtotd'>Add Todo.</button>
        {/* <h1>All Todos.</h1> */}
        {allTodos.map((todo, i) => (
          <div  key={i} className='todolist' >
            <p className='todo-text'>
              {" "}
              {i + 1}. {todo}
            </p>
            <button onClick={() => deleteTodo(i)} className='delete'>Delete.</button>
           
          </div>
        ))}
        
      </div>
    );
  };

export default Todolist;