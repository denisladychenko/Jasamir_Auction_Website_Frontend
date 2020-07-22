import React from "react";


import "./Container.css";

const Container = props => {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
};

export default Container;