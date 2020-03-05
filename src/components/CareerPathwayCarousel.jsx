import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { CareerPathwayCard } from "./index";
import job from '../assets/mockData/jobs';

export const CareerPathwayCarousel= (props) => {
    const leftArrow = <button className="carousel-button "><span className="carousel-arrows carousel-arrow-left">prev</span></button>;
    const rightArrow = <button className="carousel-button"><span className="carousel-arrows carousel-arrow-right">next</span></button>;

    let cards = [];

    {job.jobs.map(job => { cards.push(<CareerPathwayCard job={job}/>)}) }

    return (
        <Carousel className="ambassador-carousel"
                  arrowRight={rightArrow}
                  arrowLeft={leftArrow}
                  addArrowClickHandler infinite>
            {cards}
        </Carousel>
    )
};

export default CareerPathwayCarousel;
