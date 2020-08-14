import React from "react";

import "./TestimonialsCarouselItem.css";


const TestimonialsCarouselItem = props => {
    return (
        <div className={`carousel-item ${props.className}`}>
            <div className="testimonial-container d-block w-100">
                {props.children}
            </div>
        </div>
    );
};

export default TestimonialsCarouselItem;