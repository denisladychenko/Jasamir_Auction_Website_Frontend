import React from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery";


import "./NavItem.css";

const NavItem = props => {

    const NavLinkClickHandler = (e) => {
      //close mobile nav menu
      $(".nav-item-list").toggleClass("showing");
        try {
          //get all the dropdown links
           const dropdownLinks = $(".dropdown-link");
            //iterate through all dropdown links and remove border from their parent links
             $.each(dropdownLinks, (key, value) => {
                const dropdown = $(`#${value.id}`).parent().parent();
                 dropdown.siblings().removeClass("underlined");});
                  //if it is a dropdown link, then add border to its parent
                   if (!((e.target.className === "nav-item-link" || //is it a regular not active link
                    e.target.className === "nav-item-link active" ) //is it a regular active nav link
                   )
                    ) {$(`#${e.target.id}`).parent().parent().siblings().addClass("underlined");}
        } catch (err) {
            console.log(err);
             }
        };

    return (
        <li className="nav-item">
            <NavLink id={props.id} className={props.className} to={props.to} onClick={ NavLinkClickHandler }>
                {props.children}
            </NavLink>
        </li>
    );
};

export default NavItem;