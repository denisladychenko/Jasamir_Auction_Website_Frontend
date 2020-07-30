import React from "react";

import "./SloganContainer.css";


const SloganContainer = props => {
    return (
        <div className="slogan-container">
            {props.children}
        </div>
    );
};

export default SloganContainer;