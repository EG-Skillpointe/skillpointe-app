import React from 'react';
import Button from "react-bootstrap/Button";

export const JobsCard = (props) => {
    const image = require(`../assets/images/${props.job.image}`);

    return (
        <div className="container">
            <img className="container_image" src={image} alt="Cat"/>
            <div className="container_text">
                <div className="school_info_wrapper">
                    <h6 className="card-subtitle" style={{marginTop:"0"}}>{props.job.company}</h6>
                    <h5 className="card-title">{props.job.title}</h5>
                    <h6 className="card-text">{props.job.location}</h6>
                    <Button className="card-button" style={{margin:"9px 0", fontSize:"12px", height:"20px", textAlign:"center", lineHeight:"6px"}}>Learn More</Button>
                    <h6 style={{margin:"0"}}>{props.job.datePosted}</h6>
                </div>
            </div>
        </div>
  )
};

export default JobsCard;
