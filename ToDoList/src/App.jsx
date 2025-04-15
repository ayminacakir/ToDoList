import { useState } from 'react';
import './App.css';
import ToDoCreate from './components/ToDoCreate';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResultId, setSearchResultId] = useState(null);

  const createTodo = (newTodo) => {
    setTodos([...todos, { ...newTodo, isCompleted: false }]);
    setSearchTerm('');
    setSearchResultId(null);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);

    const match = todos.find(todo =>
      todo.content.toLowerCase().includes(term.toLowerCase())
    );

    if (match) {
      setSearchResultId(match.id);
    } else {
      setSearchResultId(null);
    }
  };

  const toggleComplete = (todoId) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === todoId) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const cancelTodo = (todoId) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === todoId ? { ...todo, isCancelled: !todo.isCancelled } : todo
      )
    );
  };

  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);
  };

  const sortedTodos = [...todos];
  if (searchResultId) {
    const index = sortedTodos.findIndex(todo => todo.id === searchResultId);
    if (index !== -1) {
      const [foundTodo] = sortedTodos.splice(index, 1);
      sortedTodos.unshift(foundTodo);
    }
  }

  return (
    <div className='App'>
      <div className='main'>
        <p>AYMİNA's TODO LIST</p>
        <hr />
        <hr />
        <ToDoCreate onCreateTodo={createTodo} onSearch={handleSearch} />
        <TodoList
          todos={sortedTodos}
          onRemoveTodo={removeTodo}
          onToggleComplete={toggleComplete}
          onCancelTodo={cancelTodo}
          searchResultId={searchResultId}
        />
      </div>
    </div>
  );
}

export default App;
