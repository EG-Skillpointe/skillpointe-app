import React from 'react';
import Button from "react-bootstrap/Button";

export const JobsCard = (props) => {
    const image = require(`../assets/images/${props.job.image}`);

    return (
      <div className="container">
        <div className="card-image-container">
          <img className="card-image" src={image} alt="Cat"/>
          <h6>{props.job.datePosted}</h6>
        </div>
        <div className="container__text">
          <h5 className="card-title">{props.job.title}</h5>
          <h6 className="card-subtitle">{props.job.company}</h6>
          <h6 className="card-text">{props.job.location}</h6>
          <Button className="card-button">Learn More</Button>
        </div>
      </div>
  )
};

export default JobsCard;
