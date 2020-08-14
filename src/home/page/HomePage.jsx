import React from "react";

import "./HomePage.css"
import Container from "../../shared/components/Container";
import BannerSection from "../../home/components/BannerSection";
import AuctionInfoSection from "../../home/components/AuctionInfoSection";
import HighLightsSection from "../../home/components/HighLightsSection";
import TestimonialsSection from "../../home/components/TestimonialsSection";
import SloganContainer from "../../home/components/SloganContainer";
import BannerBottomContainer from "../../home/components/BannerBottomContainer";
import BannerInfoBox from "../components/BannerInfoBox";
import { NavLink } from "react-router-dom";


const HomePage = props => {
  return (
    <Container className="page-content-container">
      <BannerSection>
        <img
          className="header-image"
          src="/assets/images/columns_1900_1265.png"
          alt="Antiques"
        />
        <SloganContainer>
          <h1><span id="jasamir">Jasamir</span> Auctions</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum rerum quam libero corporis consectetur totam expedita quisquam repellendus suscipit accusamus natus.</p>
          <NavLink to="/about"><button className="btn btn-block btn-success">Learn more about us</button></NavLink>
        </SloganContainer>
        <BannerBottomContainer >
            <BannerInfoBox icon="/assets/images/sell.jpg" imgAlt="Sell with Jasamir" title="Sell" link="/sell">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, dolorem fuga ducimus fugit voluptatum numquam quaerat.
          </BannerInfoBox>
            <BannerInfoBox icon="/assets/images/libra.jpg" imgAlt="Appraise with Jasamir" title="Appraise" link="/appraisals">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, dolorem fuga ducimus fugit voluptatum numquam quaerat.
          </BannerInfoBox> 
        </BannerBottomContainer>
      </BannerSection>
      <AuctionInfoSection>

      </AuctionInfoSection>
      <HighLightsSection>

      </HighLightsSection>
      <TestimonialsSection>
        
      </TestimonialsSection>
    </Container>

  );
};

export default HomePage;