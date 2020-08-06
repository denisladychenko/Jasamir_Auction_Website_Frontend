import React from "react";

import "./AuctionInfoSection.css";
import Carousel from "./Carousel";
import AuctionInfoCarouselItem from "./AuctionInfoCarouselItem";
import AuctionInfoBox from "./AuctionInfoBox";

const AuctionInfoSection = props => { 
    return (
        <section className="auction-info-section">
            <p className="section-title">       {/*section title class is defined in HomePage.css*/}
                Auction Info
            </p>    

            <Carousel id="auctionsCarousel" prevControlClassName="carousel-control-prev" nextControlClassName="carousel-control-next">
                <AuctionInfoCarouselItem className="active">
                    <img src="assets/images/Info-Board_1200x1200.jpg" className=" carousel-image d-block w-100" alt="..." />
                    <AuctionInfoBox >
                        <h1>Auctions Are Coming As Soon As 2021</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis recusandae est aspernatur, ratione explicabo laborum ex neque corporis totam.</p>
                        <a><button className="learn-more-btn btn btn-success" href="#">Learn More</button></a>
                    </AuctionInfoBox>
                </AuctionInfoCarouselItem>

                <AuctionInfoCarouselItem >
                    <img src="assets/images/Info-Board_1200x1200.jpg" className=" carousel-image d-block w-100" alt="..." />
                    <AuctionInfoBox >
                        <h1>Shipping Info</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis recusandae est aspernatur, ratione explicabo laborum ex neque corporis totam.</p>
                        <a><button className="learn-more-btn btn btn-success" href="#">Learn More</button></a>
                    </AuctionInfoBox>
                </AuctionInfoCarouselItem>

            </Carousel>
            
        </section>
    );
};

export default AuctionInfoSection;