// import React, { Component, Fragment } from 'react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Person.css';
import stlClasses from './Person.css'
import Aux from '../../../hoc/Aux';
import withClass from "../../../hoc/withClass";
import AuthContext from '../../../context/auth-context';

/**
 * This is a stateless (or presentational) component, since it does not use useState
 * A SOLID app has more of stateless components than stateful ones
 * in order to make the app more maintainable
 *
 * @param props
 */
class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering...')
        // return (
        //     <div className={stlClasses.Person}>
        //         <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
        //         <p>{this.props.children}</p>
        //         <input type="text" value={this.props.name} onChange={this.props.changed}/>
        //     </div>
        // );

        // We can also use React.Fragment = Aux
        // return (
        //     <Fragment>
        //         <div className={stlClasses.Person}>
        //             <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
        //             <p>{this.props.children}</p>
        //             <input type="text" value={this.props.name} onChange={this.props.changed}/>
        //         </div>
        //     </Fragment>
        // );

        // We can also return an expression to avoid root element
        return (
            <Aux>
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}

                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    value={this.props.name}
                    onChange={this.props.changed}
                    ref={this.inputElementRef}
                    // ref={(input) => this.inputElement = input}
                />
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

// Set data types
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, stlClasses.Person);