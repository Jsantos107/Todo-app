import React, { Component } from 'react';
import './App.css';

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
      <div className="App">
        
      </div>
    );
  }
}

export default App;
