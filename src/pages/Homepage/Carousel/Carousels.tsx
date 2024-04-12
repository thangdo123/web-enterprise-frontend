import React from "react";
import { Carousel } from "react-bootstrap";
import * as S from "./Carousels.styled";
const Carousels = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <S.CarouselImg src="https://law.depaul.edu/academics/centers-institutes-initiatives/center-for-intellectual-property-law-and-information-technology/PublishingImages/IP_Spring_preLaw21crop.jpg"/>
        <Carousel.Caption>
          <h3>Endeavor</h3>
          <p>Hard labor and effort are critical components in the attainment of success.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <S.CarouselImg src="https://cdn.elearningindustry.com/wp-content/uploads/2022/04/shutterstock_1964806165.jpg" />
        <Carousel.Caption>
          <h3>Knowledge</h3>
          <p>Acquiring knowledge is crucial in establishing a pathway to future grandeur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <S.CarouselImg src="https://tigosoftware.com/sites/default/files/2022-09/Enterprise-SEO-Strategies-for-Knowledge-Base-Self-Serve-Customer-Success.png" />
        <Carousel.Caption>
          <h3>Times</h3>
          <p>
          Whoever has the ability to balance work and personal life is the epitome of perfection.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousels;
