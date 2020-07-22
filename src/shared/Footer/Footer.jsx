import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

import "./Footer.css";
import Paragraph from "../components/Paragraph";

const Footer = props => {
    const year = new Date().getFullYear();
    return (
        <footer className={props.className}>
            <FontAwesomeIcon className="icons" icon={faTwitter} size="3x" color="white" />
            <FontAwesomeIcon className="icons" icon={faFacebook} size="3x" color="white" />
            <FontAwesomeIcon className="icons" icon={faInstagram} size="3x" color="white" />
            <Paragraph className="copyright">{`©${year} Loveantiques`}</Paragraph>
        </footer>
    );
};

export default Footer;