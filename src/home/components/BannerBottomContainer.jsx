import React from "react";

import "./BannerBottomContainer.css";

const BannerBottomContainer = props => { 
    return (
        <div className="banner-bottom-container">
            {props.children}
        </div>
    );
};

export default BannerBottomContainer;