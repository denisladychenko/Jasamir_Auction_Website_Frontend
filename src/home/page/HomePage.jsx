import React from "react";

import "./HomePage.css"
import Container from "../../shared/components/Container";
import BannerSection from "../../home/components/BannerSection";
import AuctionInfoSection from "../../home/components/AuctionInfoSection";
import HighLightsSection from "../../home/components/HighLightsSection";
import TestimonialsSection from "../../home/components/TestimonialsSection";

const HomePage = props => {
  return (
    <Container className="page-content-container">
      <BannerSection>
        <img
          className="header-image"
          src="/assets/images/columns_1900_1265.png"
          alt="Antiques"
        />
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