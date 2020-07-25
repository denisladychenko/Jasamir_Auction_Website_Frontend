import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import $ from "jquery";

import "./Dropdown.css";
import NavItem from "./NavItem";

const Dropdown = props => {
    let key = 0;      //a key value for a dropdown link

    // const clickHandler = () => { 
    //     alert("Hello");
        
    // };
    

    return (
        <li className="nav-item">
        <a className={`noSelect ${props.className}`}>
          <FontAwesomeIcon
            className={props.iconClass}
            icon={props.icon}
            size={props.iconSize}
            color={props.iconColor}
          />
          {props.children}
          <FontAwesomeIcon
            className="chevron"
            icon={faChevronDown}
            size="sm"
            color="white"
          />
        </a>

        <ul className="dropdown">
          {props.items.map((item, index) => {
            return (
              <NavItem
                className="dropdown-link"
                key={key++}
                to={props.to[index]}
            
              >
                {item}
              </NavItem>
            );
          })}
        </ul>
      </li>
    );
};

export default Dropdown;