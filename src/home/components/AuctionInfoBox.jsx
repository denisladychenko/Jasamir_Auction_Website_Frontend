import React from "react";

import "./AuctionInfoBox.css";

const AuctionInfoBox = props => { 
    return (
        <div className="carousel-item-inner-box">
            {props.children}
        </div>
    );
};


export default AuctionInfoBox;