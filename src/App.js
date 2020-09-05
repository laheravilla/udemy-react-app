import React, { Component } from 'react';
import stlClasses from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
        let persons = null;
        let btnClasses = "";

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            // Placed key here because keys must be in the outer component to be mapped
                            <ErrorBoundary key={person.id}>
                                <Person
                                    name={person.name}
                                    age={person.age}
                                    click={this.deletePersonHandler.bind(this, index)}
                                    changed={(Event) => this.nameChangedHandler(Event, person.id)}
                                />
                            </ErrorBoundary>
                            )
                    })}
                </div>
            );

            btnClasses = stlClasses.Red;
        }

        let classes = [];
        if (this.state.persons.length <= 2) {
            classes.push(stlClasses.red); // classes = ['red']
        }

        if (this.state.persons.length <= 1) {
            classes.push(stlClasses.bold); // classes = ['red', 'bold']
        }

        return (
            <div className={stlClasses.App}>
                <h1>Hi, I'm a React App!</h1>
                <p className={classes.join(' ')}>This is really working!</p>
                <button className={btnClasses} onClick={this.togglePersonsHandler}>Switch Name</button>
                {persons}
            </div>
        );
    }
}

export default App;
