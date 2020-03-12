import React, { Component } from 'react';
import './App.css';
import TodoList from './cpmponents/TodoList';

class App extends Component {
  state ={
    todo:[
      {id:1, title: "First Todo", content: "I have something todo"},
      {id:1, title: "Second Todo", content: "I have some more todo"},
      {id:1, title: "Third Todo", content: "I have too much todo"}
    ]
  }

  render (){
    return (
      <main>
        <h1>Todo App</h1>
        <TodoList todo={this.state.todo}/>
      </main>
    );
  }
}

export default App;
