import React, { useEffect } from 'react';
import stlClasses from "./Cockpit.css";

const cockpit = (props) => {
    // It runs for every DOM update
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...
        setTimeout(() => alert('Saved data to cloud!'), 1000);
        return () => console.log('[Cockpit.js] cleanup work in useEffect');
    }, [props.persons]); // Code will execute only when persons change. If [] code will execute only one time

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => console.log('[Cockpit.js] cleanup work in  2nd useEffect');
    });

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
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button className={btnClasses} onClick={props.click}>Switch Name</button>
        </div>
    );
};

export default cockpit;