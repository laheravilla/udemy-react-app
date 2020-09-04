import React from 'react';
import './Person.css';
import Radium from 'radium';

/**
 * This is a stateless (or presentational) component, since it does not use useState
 * A SOLID app has more of stateless components than stateful ones
 * in order to make the app more maintainable
 *
 * @param props
 * @returns {JSX.Element}
 */
const person = (props) => {
    const style = {
        "@media (min-width: 500px)": {
            width: "60%",
            margin: "30px auto"
        }
    };

    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" value={props.name} onChange={props.changed}/>
        </div>
    )
};

export default Radium(person);