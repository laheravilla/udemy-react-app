// import React, { Component } from 'react';
import React, { PureComponent } from 'react';
import Person from './Person/Person';

// class Persons extends Component {
/**
 * React.PureComponent is similar to React.Component.
 * The difference between them is that React.Component doesn’t implement shouldComponentUpdate(),
 * but React.PureComponent implements it with a shallow prop and state comparison.
 */
class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps')
    //     return state;
    // }

    /*
    shouldComponentUpdate(nextProps, nextState) {
        // Were forced to return true (if react must continue to update)
        // or false on the opposite case
        console.log('[Persons.js] shouldComponentUpdate');

        return nextProps.persons !== this.props.persons ||
            nextProps.changed !== this.props.changed ||
            nextProps.click !== this.props.click;
    }
     */

    /**
     *  Invoked RIGHT BEFORE the most recently rendered output is committed to e.g. the DOM.
     *  It enables the component to capture some information from the DOM (e.g. scroll position)
     *  before it is potentially changed.
     *  Any value returned by this lifecycle will be passed as a parameter to componentDidUpdate().
     *
     *
     * @param prevProps
     * @param prevState
     * @returns {{message: string}}
     */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate')
        return {message: 'Snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot)
    }

    /**
     * Invoked immediately before a component is unmounted and destroyed.
     * Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests,
     * or cleaning up any subscriptions that were created in componentDidMount().
     */
    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] rendering...')
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    click={this.props.click.bind(index)}
                    changed={Event => this.props.changed(Event, person.id)}
                    isAuth={this.props.isAuthenticated}
                />
            );
        });
    }
}

export default Persons;