import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoCreate from './components/ToDoCreate'
import TodoList from './components/TodoList'



function App() {

  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);

  }

  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);
  }

  console.log(todos);

  /* childdan parenta props geçme yöntemi createTodo fonksiyonuna erişmek isteyen kişi onCreateTodo propsuyla buna erişebilir. */
  return (

    <div className='App'>
      <div className='main' >
        <ToDoCreate onCreateTodo={createTodo} />
        <TodoList todos={todos} onRemoveTodo={removeTodo} />



      </div>
    </div>

  )
}

export default App

