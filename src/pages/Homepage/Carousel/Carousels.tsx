import React from "react";
import { Carousel } from "react-bootstrap";
import * as S from "./Carousels.styled";

const Carousels = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <S.CarouselImg src="https://i.ytimg.com/vi/4tYuIU7pLmI/maxresdefault.jpg" />
        <Carousel.Caption>
          <h3>Endeavor</h3>
          <p>Hard labor and effort are critical components in the attainment of success.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <S.CarouselImg src="https://cdn.bongdaplus.vn/Assets/Media/2023/08/31/56/messi-jack-3.jpg" />
        <Carousel.Caption>
          <h3>Knowledge</h3>
          <p>Acquiring knowledge is crucial in establishing a pathway to future grandeur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <S.CarouselImg src="https://i.ytimg.com/vi/y6IjHFQEzOc/maxresdefault.jpg" />
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
