import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoCreate from './components/ToDoCreate'
import TodoList from './components/TodoList'



function App() {

  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, { ...newTodo, isCompleted: false }]);

  }
  const toggleComplete = (todoId) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === todoId) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);
  }

  console.log(todos);

  /* childdan parenta props geçme yöntemi createTodo fonksiyonuna erişmek isteyen kişi onCreateTodo propsuyla buna erişebilir. */
  return (

    <div className='App'>
      <div className='main' >

        <p>AYMİNA's TODO LIST</p>
        <hr />
        <hr />

        <ToDoCreate onCreateTodo={createTodo} />
        <TodoList todos={todos} onRemoveTodo={removeTodo} onToggleComplete={toggleComplete} />



      </div>
    </div>

  )
}

export default App

