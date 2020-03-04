import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import {TrainingCardV2} from "./index";
import school from "../assets/mockData/school";

export const CardCarousel= () => {
    const leftArrow = <button className="carousel-button "><span className="carousel-arrows carousel-arrow-left">prev</span></button>;
    const rightArrow = <button className="carousel-button"><span className="carousel-arrows carousel-arrow-right">next</span></button>;

    let cards = [];

    {school.schools.map(school => { cards.push(<TrainingCardV2 school={school}/>)}) }

    return (
        <div className="job-opening" style={{width:"100%", height:"230px", margin:"20px 0", backgroundColor:"#FFFFFF", borderRadius:"5px"}}>
            <h1 style={{color:"#2D426B", margin:"12px 0", fontSize:"20px"}}>Current Job Openings</h1>
            <Carousel className="job-opening-carousel"
                      slidesPerPage={2}
                      arrowRight={rightArrow}
                      arrowLeft={leftArrow}
                      addArrowClickHandler infinite>
                {cards}
            </Carousel>
        </div>
    )
};

export default CardCarousel;
