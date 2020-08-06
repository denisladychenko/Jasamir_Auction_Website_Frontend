import React from "react";

import "./Carousel.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

const Carousel = props => { 


    return (
        <div id={props.id} className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                
                {props.children}
                
            </div>
            <a className={props.prevControlClassName} href={`#${props.id}`} role="button" data-slide="prev">
                <FontAwesomeIcon
                    icon={faChevronCircleLeft}
                    size="7x"
                    color="black"
                />
            </a>
            <a class={props.nextControlClassName} href={`#${props.id}`} role="button" data-slide="next">
                <FontAwesomeIcon
                    icon={faChevronCircleRight}
                    size="7x"
                    color="black"
                />
            </a>
        </div>
    );
};


export default Carousel;