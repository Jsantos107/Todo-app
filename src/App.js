import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
class App extends Component {
  state = {
    count: 3,
    todos:[
      {id:1, title: "First Todo", content: "I have something todo", urgent: true},
      {id:2, title: "Second Todo", content: "I have some more todo", urgent: false},
      {id:3, title: "Third Todo", content: "I have too much todo", urgent: true}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({ todos })
  }
  addTodo = (newTodo) => {
    this.setState({
      todos: [...this.state.todos, {...newTodo, id: this.state.count + 1}]
    })
  }

  render (){
    return (
      <main>
        <h1>Todo App</h1>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </main>
    );
  }
}

export default App;
