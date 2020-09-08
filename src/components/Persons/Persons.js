import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps')
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        // Were forced to return true (if react must continue to update)
        // or false on the opposite case
        console.log('[Persons.js] shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate')
        return {message: 'Snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot)
    }

    render() {
        console.log('[Persons.js] rendering...')
        return this.props.persons.map((person, index) => {
            return <Person
                name={person.name}
                age={person.age}
                key={person.id}
                click={this.props.click.bind(index)}
                changed={Event => this.props.changed(Event, person.id)}
            />
        });
    }
}

export default Persons;