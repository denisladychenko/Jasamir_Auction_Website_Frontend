import React from "react";

import "./HighlightsCarouselItem";

const HighlightsCarouselItem = props => { 
    return (
        <div class={`carousel-item ${props.className} `}>
            {props.children}
        </div>
    );
};


export default HighlightsCarouselItem;