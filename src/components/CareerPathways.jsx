import React from 'react';
import check from '../assets/images/right-arrow.svg'
import { CareerPathwayCarousel } from "./index";

export const CareerPathways = (props) => {
    return (
        <div className="certification-container" >
            <h5 className="certification-header" style={{margin:"10px auto"}}>Career Pathways</h5>

            <CareerPathwayCarousel/>
        </div>
    )
};

export default CareerPathways;
