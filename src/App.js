import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';

class App extends Component {
  state ={
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

  render (){
    return (
      <main>
        <h1>Todo App</h1>
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </main>
    );
  }
}

export default App;
