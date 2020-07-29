import React from "react";

import "./AuctionInfoSection.css";

const AuctionInfoSection = props => { 
    return (
        <section className="auction-info-section">
            {props.children}
        </section>
    );
};

export default AuctionInfoSection;