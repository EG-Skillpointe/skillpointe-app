import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import {CareerPathwayCard} from "./index";
import careerPathway from "../assets/mockData/career_pathways";

export const CareerPathways = (props) => {
    const slideImage = require(`../assets/images/slide_buttons.svg`);
    let cards = careerPathway.career_pathways.map(careerPathway => 
        <CareerPathwayCard careerPathway={careerPathway} />
    )

    return (
        <div style={{margin:"10px 20px !important", padding:'0', height:"340px", backgroundColor:"#FFFFFF", borderRadius:"5px", textAlign:"center"}}>
            <h5 className="certification-header" style={{marginTop:"0", paddingTop:"10px"}}>Career Pathways</h5>

            <Carousel className="ambassador-carousel"
                      addArrowClickHandler infinite
                        rtl
                        centered>
                {cards}
            </Carousel>

            <img src={slideImage} style={{position:"relative", top:"-95px"}} alt="slide image"/>
        </div>
    )
};

export default CareerPathways;
