import React from "react";

const withClass = props => (<div className={props.stlClasses}>{props.children}</div>);
export default withClass;