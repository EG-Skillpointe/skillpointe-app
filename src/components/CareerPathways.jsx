import React from 'react';
import check from '../assets/images/right-arrow.svg'
import { CareerPathwayCarousel } from "./index";

export const CareerPathways = (props) => {
    return (
        <div className="certification-container" style={{padding:'16px 20px 16px 20px', margin:"0", marginBottom:"20px", width:"100%"}}>
            <h5 className="certification-header" style={{margin:"10px auto"}}>Career Pathways</h5>

            <CareerPathwayCarousel/>
        </div>
    )
};

export default CareerPathways;
