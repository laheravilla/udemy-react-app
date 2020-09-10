import React, { Component } from 'react';
import './Person.css';
import stlClasses from './Person.css'
import Aux from '../../../hoc/Aux';

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
        // return (
        //     <div className={stlClasses.Person}>
        //         <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
        //         <p>{this.props.children}</p>
        //         <input type="text" value={this.props.name} onChange={this.props.changed}/>
        //     </div>
        // );

        // We can also return an expression to avoid root element
        return (
            <Aux>
                <div className={stlClasses.Person}>
                    <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
                    <p>{this.props.children}</p>
                    <input type="text" value={this.props.name} onChange={this.props.changed}/>
                </div>
            </Aux>
        );

        // We can return an array of elements having their own unique keys, instead of a root element
        // return [
        //     <p key="p1" onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>,
        //     <p key="p2">{this.props.children}</p>,
        //     <input key="p3" type="text" value={this.props.name} onChange={this.props.changed}/>
        // ];
    }
}

export default Person;