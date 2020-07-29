import React from "react";

import "./BannerSection.css";

const BannerSection = props => { 
    return (
        <section className="banner-section">
            {props.children}
        </section>
    );
};

export default BannerSection;