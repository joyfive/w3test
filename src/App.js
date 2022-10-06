import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";

let number = 3;
function App() {

  const todoItem = {
    id: 0,
    txt: "",
  };

  const [todos, setTodos] = useState([
    {
      id: 1,
      txt: "react를 배워봅시다.",
    },
    {
      id: 2,
      txt: "useState를 배워봅시다.",
    }
  ]);

  const [todo, setTodo] = useState(todoItem);
  
  const onChange = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (todo.txt.trim() === "") return;
    setTodos([...todos, { ...todo, id: number }]);
    setTodo(todoItem);
    number++;
  };



  return (
    <div className='app'>
      <form onSubmit={onSubmit} className='input-box' id='add'>
        <input 
          type='text' 
          className='input-field' 
          name='txt'
          value={todo.txt}
          onChange={onChange} />
        <button type='submit' form='add' className='input-btn' > 추가하기 </button>
      </form>
      <div className='list-wrap'>
        <h1>Todo List</h1>
        <hr></hr>
        <ul className='todo-list'>
          {todos.map((todo) => {
            return (
              <li className='todo-item' 
              key={todo.id} 
              todos={todos} 
              setTodos={setTodos}
              > {todo.txt} </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
