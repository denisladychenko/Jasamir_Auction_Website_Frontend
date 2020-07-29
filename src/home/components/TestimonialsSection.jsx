import React from "react";

import "./TestimonialsSection.css";

const TestimonialsSection = props => { 
    return (
        <section className="testimonials-section">
            {props.children}
        </section>
    );
};

export default TestimonialsSection;