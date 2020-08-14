import React from "react";

import "./TestimonialsCarousel.css";

const TestimonialsCarousel = props => { 
    return (
        <div id="testimonials-carousel" class="carousel slide testimonials-carousel" data-ride="carousel">
            {props.children}  
        </div>
    );
};

export default TestimonialsCarousel;