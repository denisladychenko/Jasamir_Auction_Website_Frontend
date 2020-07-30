import React from "react";

import "./BannerInfoBox.css";

const BannerInfoBox = props => { 
    return (
        <div className="banner-info-box-outer-container">
            <div className="banner-info-box-inner-container">
                <div className="banner-info-box-top-container">
                    <div className="banner-infobox-icon-container">
                        <img className="banner-infobox-image" src={props.icon} alt={props.imgAlt}/>
                    </div>
                    <div className="banner-infobox-title-container">
                        <p className="banner-infobox-title">{props.title}</p>
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