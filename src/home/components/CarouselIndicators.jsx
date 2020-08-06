import React from "react";


import "./CarouselIndicators.css";

const CarouselIndicators = props => { 
    return (
        <ol class="carousel-indicators">
            {props.children}
        </ol>
    );
};

export default CarouselIndicators;