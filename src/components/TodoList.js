import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos, deleteTodo, updateTodo}){
    const showTodos = todos.map(todo => <TodoItem 
        key={todo.id} deleteTodo={deleteTodo} {...todo}
        updateTodo={updateTodo} />)
    return(
        <ul className="todo-list">
            {showTodos}
        </ul>
    )
}
