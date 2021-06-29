import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../helpers/CarouselData";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Carousel() {
  const [curImg, setCurImg] = useState(0);

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[curImg].img})` }}
      >
        <div
          className="left"
          onClick={() => {
            curImg > 0 && setCurImg(curImg - 1);
          }}
        >
          <ArrowBackIosIcon />
        </div>

        <div className="center">
          <h1>{images[curImg].title}</h1>
          <p>{images[curImg].subtitle}</p>
        </div>

        <div
          className="right"
          onClick={() => {
            curImg < images.length - 1 && setCurImg(curImg + 1);
          }}
        >
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
