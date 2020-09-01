import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Yurniel', age: 39 },
      { name: 'Emi', age: 39 },
      { name: 'Gabriel', age: 3 }
    ]
  }

  // React will override property state with setState() data
  switchNameHandler = () => {
    this.setState({persons: [
            { name: 'Yurniel  Lahera Villa', age: 39 },
            { name: 'Emi Lahera Villa', age: 39 },
            { name: 'Gabriel Lahera Villa', age: 3 }
        ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My hobbies: traveling</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;