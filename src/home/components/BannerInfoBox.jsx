import React from "react";

import "./BannerInfoBox.css";
import { NavLink } from "react-router-dom";

const BannerInfoBox = props => { 
    return (
        <div className="banner-info-box-outer-container">
            <div className="banner-info-box-inner-container">
                <div className="banner-info-box-top-container">
                    <div className="banner-infobox-icon-container">
                        <img className="banner-infobox-image" src={props.icon} alt={props.imgAlt}/>
                    </div>
                    <div className="banner-infobox-title-container">
                        <NavLink to={props.link}><p className="banner-infobox-title">{props.title}</p></NavLink>
                    </div>
                    <div className="banner-infobox-paragraph-container">
                        <p className="banner-infobox-paragraph">{props.children}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerInfoBox;