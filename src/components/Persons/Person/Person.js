import React, { Component } from 'react';
import './Person.css';
import stlClasses from './Person.css'

/**
 * This is a stateless (or presentational) component, since it does not use useState
 * A SOLID app has more of stateless components than stateful ones
 * in order to make the app more maintainable
 *
 * @param props
 */
class Person extends Component {
    render() {
        console.log('[Person.js] rendering...')
        return (
            <div className={stlClasses.Person}>
                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" value={this.props.name} onChange={this.props.changed}/>
            </div>
        );
    }
}

export default Person;