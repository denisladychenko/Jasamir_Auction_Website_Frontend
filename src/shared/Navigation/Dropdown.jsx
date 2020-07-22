import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import "./Dropdown.css";
import NavItem from "./NavItem";

const Dropdown = props => {
    let key = 0;
    return (
        <li className="nav-item">
            <Link className={props.className} >
                {props.children}
                <FontAwesomeIcon className="chevron" icon={faChevronDown} size="sm" color="white" />
            </Link>
            
            <ul className="dropdown">
            {props.items.map((item, index) => {
                return <NavItem className="dropdown-link" key={key++} to={props.to[index]} >{item}</NavItem>})}
            </ul>
        </li>
    );
};

export default Dropdown;