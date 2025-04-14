import React from 'react'
import ToDo from './ToDo';

function TodoList({ todos, onRemoveTodo, onToggleComplete, onCancelTodo }) {
  return (
    <div style={{ width: '100%', marginTop: '50px' }}>
      {
        todos && todos.map((todo) => (
          <ToDo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onToggleComplete={onToggleComplete} onCancelTodo={onCancelTodo} />
        ))
      }

    </div>

  )
}

export default TodoList;