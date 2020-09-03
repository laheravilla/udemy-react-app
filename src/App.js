import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    // Only available when having extended Component
    state = {
        persons: [
            { id: 1, name: 'Yurniel', age: 39 },
            { id: 2, name: 'Emi', age: 39 },
            { id: 3, name: 'Gabriel', age: 3 }
        ],
        showPersons: false
    }

    // React will override property state with setState() data

    nameChangedHandler = (Event, id) => {
        const personIndex = this.state.persons.findIndex(p => p.id === id);

        // Create a copy
        const person = {...this.state.persons[personIndex]};
        // = const person = Object.assign({}, this.state.persons[personIndex])

        person.name = Event.target.value;

        // Update array persons
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons})
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons;
        const persons = [...this.state.persons]; // Best practice is to create a copy of the array
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    /*
    * In arrow functions THIS refers to the current class (or module),
    * whereas in not-arrow functions THIS refers to the scope of the function
    */
    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {
        const inlineStyle = {
            backgroundColor: "green",
            font: "inherit",
            border: "1px solid blue",
            padding: "8px",
            cursor: "pointer",
            color: "white"
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                name={person.name}
                                age={person.age}
                                click={this.deletePersonHandler.bind(this, index)}
                                key={person.id}
                                changed={(Event) => this.nameChangedHandler(Event, person.id)}
                            />
                            )
                    })}
                </div>
            );

            // Change style dynamically by accessing to inlineStyle object
            inlineStyle.backgroundColor = "red";
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App!</h1>
                {/*Ways of passing params to switchNameHandler(). Use .bind() as recommended way!*/}
                <button
                    style={inlineStyle}
                    onClick={this.togglePersonsHandler}>Switch Name
                </button>
                {/*<button onClick={() => this.switchNameHandler('Yurniel!!')}>Switch Name</button>*/}
                {persons}
            </div>
        );
    }
}

export default App;

/**
 * Using useState approach when not extending Component
 * This is a stateful component since it uses useState
 *
 * @param props
 * @returns {JSX.Element}
 */
/*
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
*/
