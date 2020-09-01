// import React, { Component } from 'react';
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

/**
 * Using useState approach when not extending Component
 * This is a stateful component since it uses useState
 *
 * @param props
 * @returns {JSX.Element}
 */
const app = props => {
    const [personsState, setPersonsState] = useState({
        persons: [
            { name: 'Yurniel', age: 39 },
            { name: 'Emi', age: 39 },
            { name: 'Gabriel', age: 3 }
        ],
        otherState: 'Some other state'
    });

    // As switchNameHandler() does not take all setState data, we must include it manually,
    // unlike when extending Component class
    const [otherState, setOtherState] = useState('Some other value');

    console.log(personsState, otherState);

    const switchNameHandler = () => {
        setPersonsState({
            persons: [
                { name: 'Yurniel  Lahera Villa', age: 39 },
                { name: 'Emi Lahera Villa', age: 39 },
                { name: 'Gabriel Lahera Villa', age: 3 }
            ]
        });
    };

    return (
        <div className="App">
            <h1>Hi, I'm a React App!</h1>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >My hobbies: traveling</Person>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
        </div>
    );
};

export default app;


/*
class App extends Component {
    // Only available when having extended Component
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
*/