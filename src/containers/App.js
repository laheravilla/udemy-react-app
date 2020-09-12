import React, { Component } from 'react';
import stlClasses from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

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
            showPersons: false,
            showCockpit: true,
            changeCounter: 0,
            authenticated: false
        }
    }

    /**
     * Hook / Lifecycle method
     * Sync state to props
     * Invoked right BEFORE calling the render method
     * It should return an object to update the state or NULL
     *
     * @param props
     * @param state
     * @returns {*}
     */
    static getDerivedStateFromProps(props, state) {
        console.log('[App] getDerivedStateFromProps', props);
        return state;
    }

    /**
     * Hook / Lifecycle method
     * One of the most important hooks if we want fetch data from DB
     * Invoked IMMEDIATELY AFTER a component is mounted (inserted into the tree)
     */
    componentDidMount() {
        console.log('[App.js] componentDidMount')
    }

    /**
     * Let React know if a component’s output is not affected by the current change in state or props.
     * Invoked BEFORE rendering when new props or state are being received. Defaults to true.
     *
     * @param nextProps
     * @param nextState
     * @param nextContext
     * @returns {boolean}
     */
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[App.js] shouldComponentUpdate')
        return true;
    }

    /**
     * One of the most important hooks if we want fetch data from DB
     * Invoked immediately AFTER updating occurs. This method is not called for the initial render.
     *
     * @param prevProps
     * @param prevState
     * @param snapshot
     */
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[App.js] componentDidUpdate')
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

        this.setState((prevState, props) => {
            return {
                persons: persons,
                changeCounter: prevState.changeCounter + 1
            };
        });
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

    loginHandler = () => {
        this.setState({authenticated: true});
    }

    render() {
        console.log('[App.js] render')
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                click={this.deletePersonHandler}
                changed={this.nameChangedHandler}
                isAuthenticated={this.state.authenticated}
            />;
        }

        return (
            <Aux stlClasses={stlClasses.App}>
                <button onClick={() => this.setState({showCockpit: false})}>Remove Cockpit</button>
                {this.state.showCockpit ? (
                    <Cockpit
                        title={this.props.appTitle}
                        showPersons={this.state.showPersons}
                        personsLength={this.state.persons.length}
                        click={this.togglePersonsHandler}
                        login={this.loginHandler}
                    />
                ) : null }
                {persons}
            </Aux>
        );
    }
}

export default withClass(App, stlClasses.App);
