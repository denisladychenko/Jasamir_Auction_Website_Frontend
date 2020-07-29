import React from "react";

import "./HighLightsSection.css";

const HighLightsSection = props => { 
    return (
        <section className="highlights-section">
            {props.children}
        </section>
    );
};

export default HighLightsSection;