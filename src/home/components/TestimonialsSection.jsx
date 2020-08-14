import React from "react";

import "./TestimonialsSection.css";
import TestimonialsCarousel from "./TestimonialsCarousel";
import TestimonialsCarouselItem from "./TestimonialsCarouselItem";
import CarouselIndicators from "./CarouselIndicators";

const TestimonialsSection = props => { 

    const testimonials =[
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            name: "John McCane"
        },
        {
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            name: "Jim Carrey"
        },
        {
            text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            name: "Jim Belushi"
        },
        {
            text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            name: "Monica Bellucci"
        }
    ]


    return (
        <section className="testimonials-section">
            <p className="section-title">       {/*section title class is defined in HomePage.css*/}
                Testimonials
            </p>
            <TestimonialsCarousel>
                <CarouselIndicators className="testimonials-carousel-indicator">
                    {testimonials.map((item, index) => { 
                        return <li data-target="#testimonials-carousel" data-slide-to={index} className={`testimonial-carousel-indicator ${index === 0 ? "active" : ""}`}></li>
                    })}
                </CarouselIndicators>
                <div className="carousel-inner">
                {testimonials.map((item, index) => { 
                    return <TestimonialsCarouselItem className={index === 0 ? "active" : ""}>
                        <p className="testimonial-text-paragraph">{item.text}</p>
                        <p className="testimonial-name-paragraph">{item.name}</p>
                    </TestimonialsCarouselItem>
                })}
                </div>
            </TestimonialsCarousel>
            {props.children}
        </section>
    );
};

export default TestimonialsSection;