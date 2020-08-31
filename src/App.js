import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Hi, I'm a React App!</h1>
          <Person name="Yurniel" age="39" />
          <Person name="Emi" age="39" >My hobbies: traveling</Person>
          <Person name="Gabriel" age="3" />
      </div>
    );
  }
}

export default App;