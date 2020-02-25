import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import {AmbassadorCard, TrainingCard, JobsCard} from "./index";

export const CardCarousel= () => {
  const leftArrow = <button className="carousel-button "><span className="carousel-arrows carousel-arrow-left">prev</span></button>;
  const rightArrow = <button className="carousel-button"><span className="carousel-arrows carousel-arrow-right">next</span></button>;
  return (
      <div
          className="App"
          style={{ width: "600px", margin: "auto", padding: "50px" }}
      >
        <Carousel arrowRight={rightArrow}
                  arrowLeft={leftArrow}
                  addArrowClickHandler infinite>
          <AmbassadorCard/>
          <TrainingCard/>
          <JobsCard/>
        </Carousel>
      </div>
  )
};

export default CardCarousel;
