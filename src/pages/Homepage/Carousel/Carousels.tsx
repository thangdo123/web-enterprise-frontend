import React from "react";
import { Carousel } from "react-bootstrap";
import * as S from "./Carousels.styled";
import carousel1 from "../../../assets/images/carousel1.jpg";
import carousel2 from "../../../assets/images/carousel2.jpg";
import carousel3 from "../../../assets/images/carousel3.jpg";

const Carousels = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <S.CarouselImg src={carousel1}/>
        <Carousel.Caption>
          <h3>Endeavor</h3>
          <p>Hard labor and effort are critical components in the attainment of success.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <S.CarouselImg src={carousel2} />
        <Carousel.Caption>
          <h3>Knowledge</h3>
          <p>Acquiring knowledge is crucial in establishing a pathway to future grandeur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <S.CarouselImg src={carousel3} />
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
