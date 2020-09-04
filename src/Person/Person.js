import React from 'react';
import './Person.css';
import Radium from 'radium';
import styled from 'styled-components';

/**
 * This is a stateless (or presentational) component, since it does not use useState
 * A SOLID app has more of stateless components than stateful ones
 * in order to make the app more maintainable
 *
 * @param props
 * @returns {JSX.Element}
 */
const person = (props) => {
    // styled.<tagName> return always a react component
    const StyledDiv = styled.div`
        width: 60%;
        margin: 20px;
        padding: 10px;
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        text-align: center;
        
        @media (min-width: 500px) {
            width: 60%;
            margin: 20px auto;
        }
    `;

    return (
        <StyledDiv>
            {/*<div className="Person" style={style}>*/}
                <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
                <p>{props.children}</p>
                <input type="text" value={props.name} onChange={props.changed}/>
            {/*</div>*/}
        </StyledDiv>
    )
};

export default Radium(person);