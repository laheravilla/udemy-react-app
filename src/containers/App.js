import React, { Component } from 'react';
import stlClasses from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    constructor (props) {
        super(props);
        console.log('[App.js] constructor');

        // In modern JS constructor are implicit
        // If we need to set some initial state base on props, the must use constructor
        this.state = {
            persons: [
                { id: 1, name: 'Yurniel', age: 39 },
                { id: 2, name: 'Emi', age: 39 },
                { id: 3, name: 'Gabriel', age: 3 }
            ],
            showPersons: false
        }
    }

    // Hook / Lifecycle method
    // Sync state to props
    static getDerivedStateFromProps(props, state) {
        console.log('[App] getDerivedStateFromProps', props);
        return state;
    }

    // Hook / Lifecycle method
    componentDidMount() {
        console.log('[App.js] componentDidMount')
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
        console.log('[App.js] render')
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                click={this.deletePersonHandler}
                changed={this.nameChangedHandler}
            />;
        }

        return (
            <div className={stlClasses.App}>
                <Cockpit
                    title={this.props.appTitle}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    click={this.togglePersonsHandler}
                />
                {persons}
            </div>
        );
    }
}

export default App;
