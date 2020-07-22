import React from "react";

import "./Form.css";

const Form = props => {
    return (
        <form className={props.className} action={props.action}>
            {props.children}
        </form>
    );
};

export default Form;