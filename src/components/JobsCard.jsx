import React from 'react';
import Button from "react-bootstrap/Button";

export const JobsCard = (props) => {
    const image = require(`../assets/images/${props.job.image}`);

    return (
        <div className="job-card">
            <div>
                <img src={image} alt="Cat"/>
                <h6>{props.job.datePosted}</h6>
            </div>
            
            
            <div>
                <h5 className="job-title">{props.job.title}</h5>
                
                <h6 className="job-subtitle">{props.job.company}</h6>
                    
                <h6 className="job-text">{props.job.location}</h6>

                {/* <a>
                    <Button className="card-button" style={{margin:"9px 0", fontSize:"12px", height:"20px", textAlign:"center", lineHeight:"6px"}}>Learn More</Button>
                </a> */}

                
            </div>
        </div>
  )
};

export default JobsCard;
