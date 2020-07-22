import React from "react";

import "./Search.css";

const Search = props => {
    return (
        <input type="search" name={props.name} placeholder="Search..." />
    );
};

export default Search;