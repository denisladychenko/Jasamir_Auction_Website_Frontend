import React from "react";

import "./Paragraph.css";

const Paragraph = props => {
    return (
        <p className={props.className} >
            {props.children}
        </p>
    );
};

export default Paragraph;