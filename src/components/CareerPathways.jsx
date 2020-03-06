import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import {CareerPathwayCard} from "./index";
import careerPathway from "../assets/mockData/career_pathways";

export const CareerPathways = (props) => {
    let cards = [];

    {careerPathway.career_pathways.map(careerPathway => {
        cards.push(<CareerPathwayCard careerPathway={careerPathway}/>);
    })}

    return (
        <div style={{ height:"330px", backgroundColor:"#FFFFFF", borderRadius:"5px"}}>
            <h5 className="certification-header" style={{margin:"10px auto"}}>Career Pathways</h5>

                <Carousel className="ambassador-carousel"
                          addArrowClickHandler infinite
                            rtl
                            centered>
                    {cards}
                </Carousel>
        </div>
    )
};

export default CareerPathways;
