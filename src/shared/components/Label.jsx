import React from "react";

import "./Label.css";

const Label = props => {
    return (
        <label htmlFor={props.for}>
            {props.children}
        </label>
    );
};

export default Label;