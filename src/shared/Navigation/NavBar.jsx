import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faHome, faCoins, faMoneyBillWave, faTools, faUserFriends, faPhone } from '@fortawesome/free-solid-svg-icons';
import $ from "jquery";

import "./NavBar.css";
import Container from "../components/Container";
import NavItem from "./NavItem";
import Dropdown from "./Dropdown";
import Search from "../components/Search";


const NavBar = () => {
    //handles click on hamburger button
    const clickHandler = () => {
        $(".nav-item-list").toggleClass("showing");
    };
    return (
      <header>
        <div className="upper-nav-container">
          <div className="logo-container">
            <img
              className="logo"
              src="/assets/images/Original.svg"
              alt="loveantiques logo"
            />
          </div>
        </div>

        <nav>
          <Container className="nav-bar">
            <Container className="search-container">
              <Search name="main-search" />
              <FontAwesomeIcon
                className="search-icon"
                icon={faSearch}
                size="1x"
                color="gray"
              />
            </Container>
            <FontAwesomeIcon
              className="bars"
              icon={faBars}
              size="3x"
              color="white"
              onClick={clickHandler}
            />
            <ul className="nav-item-list">
              <NavItem className="nav-item-link" to="/home">
                <FontAwesomeIcon
                  className="home-icon"
                  icon={faHome}
                  size="1x"
                  color="white"
                />
                Home
              </NavItem>
              <NavItem className="nav-item-link" to="/buy">
                <FontAwesomeIcon
                  className="coins-icon"
                  icon={faCoins}
                  size="1x"
                  color="white"
                />
                Buy
              </NavItem>
              <NavItem className="nav-item-link" to="/sell">
                <FontAwesomeIcon
                  className="money-icon"
                  icon={faMoneyBillWave}
                  size="1x"
                  color="white"
                />
                Sell
              </NavItem>
              <Dropdown
                className="nav-item-link"
                to={["/appraisals", "/catalogue-auctions"]}
                items={["Appraisals", "Catalogue Auctions"]}
                icon={faTools}
                iconClass="tools-icon"
                iconSize="1x"
                iconColor="white"
              >
                Services
              </Dropdown>
              <Dropdown
                className="nav-item-link"
                to={["/about", "/locations"]}
                items={["About Us", "Locations"]}
              >
                <FontAwesomeIcon
                  className="about-icon"
                  icon={faUserFriends}
                  size="1x"
                  color="white"
                />
                About us
              </Dropdown>
              <Dropdown
                className="nav-item-link"
                to={["/contact", "/mailing-list"]}
                items={["Contact Us", "Join Mailing List"]}
              >
                <FontAwesomeIcon
                  className="contact-icon"
                  icon={faPhone}
                  size="1x"
                  color="white"
                />
                Contact
              </Dropdown>
            </ul>
          </Container>
        </nav>
      </header>
    );
};

export default NavBar;