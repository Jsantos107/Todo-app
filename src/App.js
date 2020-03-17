import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
class App extends Component {
  state = {
    todos:[]
  }
  componentDidMount(){
    fetch('http://localhost:3000/api/v1/todos')
      .then(response => response.json())
      .then(todos => this.setState({ todos }))
  }
  updateTodo = (updatedTodo) => {
    const todos = this.state.todos.map(todo => {
      return todo.id === updatedTodo.id ? updatedTodo : todo
    })

    this.setState({todos})

    const todo = {
      todo: {...updatedTodo}
    }

    fetch(`http://localhost:3000/api/v1/todos/${updatedTodo.id}`, {
      method:'PATCH',
      headers: {
        'Content-Type': 'application/json'
      }, body: JSON.stringify(todo)
    })

  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({ todos })
      fetch(`http://localhost:3000/api/v1/todos/${id}`, {
        method: "DELETE"
      })
  }
  addTodo = (newTodo) => {
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
    const todo = {
      todo: {...newTodo, user_id: 1}
    }
    fetch(`http://localhost:3000/api/v1/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    })
  }

  render (){
    return (
      <main>
        <h1>Todo App</h1>
        <TodoForm submitAction={this.addTodo}/>
        <TodoList 
          todos={this.state.todos} 
          deleteTodo={this.deleteTodo}
          updateTodo = {this.updateTodo}/>
      </main>
    );
  }
}

export default App;
