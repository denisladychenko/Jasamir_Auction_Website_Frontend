import React from "react";
import { NavLink } from "react-router-dom";


import "./NavItem.css";

const NavItem = props => {
    return (
        <li className="nav-item">
            <NavLink className={props.className} to={props.to}>
                {props.children}
            </NavLink>
        </li>
    );
};

export default NavItem;