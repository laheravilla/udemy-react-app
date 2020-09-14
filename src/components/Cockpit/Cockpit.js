import React, { useEffect, useRef, useContext } from 'react';
import stlClasses from "./Cockpit.css";
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
    // Using ref in functional components
    const toggleBtnRef = useRef(null);

    const authContext = useContext(AuthContext);
    console.log(authContext.authenticated);

    // It runs for every DOM update
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...
        // setTimeout(() => alert('Saved data to cloud!'), 1000);

        toggleBtnRef.current.click();
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

    if (props.personsLength <= 2) {
        classes.push(stlClasses.red); // classes = ['red']
    }

    if (props.personsLength <= 1) {
        classes.push(stlClasses.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={stlClasses.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button className={btnClasses} onClick={props.click} ref={toggleBtnRef}>
                Switch Name
            </button>
            <button onClick={authContext.login}>Log in</button>
        </div>
    );
};

/**
 * If the component renders the same result given the same props, we can wrap it in a call to React.memo
 * for a performance boost in some cases by memorizing the result.
 * This means that React will skip rendering the component, and reuse the last rendered result.
 */
export default React.memo(cockpit);