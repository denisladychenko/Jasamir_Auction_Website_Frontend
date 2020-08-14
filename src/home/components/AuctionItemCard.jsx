import React from "react";

import "./AuctionItemCard.css";
import { NavLink } from "react-router-dom";

const AuctionItemCard = props => {
    return (
        <div className="highlights-carousel-item-container">
            
            <div className="highlights-carousel-item-title">
                <p>{props.title}</p>
            </div>
            <img className="highlights-carousel-item-image" src={props.src} alt={props.alt} />
            <div className="highlights-carousel-item-body">
                <div className="highlights-carousel-item-body-content">
                    <p className="highlights-carousel-item-description-paragraph">{`${ props.description }...`}</p>
                    <NavLink to={props.id}><button className="btn btn-success btn-sm">Learn More</button></NavLink>
                    <p className="highlights-carousel-item-price-paragraph">{props.price}</p>
                </div>
            </div>
        </div>
    );
};


export default AuctionItemCard;