import React from 'react';
import stlClasses from "./Cockpit.css";

const cockpit = (props) => {
    let classes = [];
    let btnClasses = "";

    if (props.showPersons) {
        btnClasses = stlClasses.Red;
    }

    if (props.persons.length <= 2) {
        classes.push(stlClasses.red); // classes = ['red']
    }

    if (props.persons.length <= 1) {
        classes.push(stlClasses.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={stlClasses.Cockpit}>
            <h1>Hi, I'm a React App!</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button className={btnClasses} onClick={props.click}>Switch Name</button>
        </div>
    );
};

export default cockpit;