import React from 'react';
import './Person.css';

/**
 * This is a stateless (or presentational) component, since it does not use useState
 * A SOLID app has more of stateless components than stateful ones
 * in order to make the app more maintainable
 *
 * @param props
 * @returns {JSX.Element}
 */
const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" value={props.name} onChange={props.changed}/>
        </div>
    )
};

export default person;