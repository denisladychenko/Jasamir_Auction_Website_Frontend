import React from "react";

import "./AuctionInfoCarouselItem.css";

const AuctionInfoCarouselItem = props => { 
    return (
        <div class={`carousel-item ${props.className}`}>
            <div className="auction-infobox-pin"></div>
            {props.children}
        </div>
    );
};

export default AuctionInfoCarouselItem;