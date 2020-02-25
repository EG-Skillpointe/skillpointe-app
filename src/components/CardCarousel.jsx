import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import {AmbassadorCard, TrainingCard, JobsCard} from "./index";
import school from '../assets/mockData/school.json'

export const CardCarousel= (props) => {
  /*if(props.CardType === 'training'){
    card = <TrainingCard/>
  }*/
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
          {school.schools.map(sch => { return <TrainingCard school={sch}/>})}
        </Carousel>
      </div>
  )
};

export default CardCarousel;
