import React from "react";

import "./HighLightsSection.css";
import Carousel from "./Carousel";
import CarouselIndicators from "./CarouselIndicators";
import HighlightsCarouselItem from "./HighlightsCarouselItem";
import AuctionItemCard from "./AuctionItemCard";

const HighLightsSection = props => { 

    const items = [
        {
            id: 1,
            name: "Faberge Egg with some gorgeous frame",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            price: 3000000,
            image: "assets/images/faberge.webp",
            alt: "faberge egg"
        },
        {
            id: 2,
            name: "Century 28 Chandelier",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            price: 700000,
            image: "assets/images/century28.jpg",
            alt: "century 28"
        },
        {
            id: 3,
            name: "Saint Francis",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            price: 1000000,
            image: "assets/images/saint_Francis.jpg",
            alt: "Saint Francis"
        }
    ]

    const trancDescription = (description) => {
        return description.substring(0, 100);          //returns first 100 characters
    };

    const formatAsCurrency = (price) => { 
        return (price).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        });
    };


    return (

        
        <section className="highlights-section">
            <p className="section-title">       {/*section title class is defined in HomePage.css*/}
                Some Great Results
            </p> 
            <Carousel id="highlights-carousel" prevControlClassName="carousel-control-prev" nextControlClassName="carousel-control-next" >
                <CarouselIndicators>
                    {items.map((item, index) => { 
                        return <li data-target="#highlights-carousel" data-slide-to={index} className={index === 0 ? "active" : ""}></li>
                    })}
                </CarouselIndicators>
                
                {items.map((item, index) => {
                    return <HighlightsCarouselItem className={index === 0 ? "active" : ""}>
                        <AuctionItemCard
                        id={item.id}
                        title={item.name}
                        description={trancDescription(item.description)}
                        price={`SOLD ${formatAsCurrency(item.price)}`}
                        src={item.image}
                        alt={item.alt}>

                        </AuctionItemCard>
                    </HighlightsCarouselItem>
                    })}    
                
            </Carousel>
            {/* {props.children} */}
        </section>
    );
};

export default HighLightsSection;