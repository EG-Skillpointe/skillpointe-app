import React from 'react';
import Button from "react-bootstrap/Button";

const card_subtitle_style = {
    marginTop:"0"
};

export const TrainingCard = (props) => {
    const image = require(`../assets/images/${props.school.image}`);

    return (
      <div className="container">
          <img className="container_image" src={image} alt="Cat"/>
          <div className="container_text">
              <div className="school_info_wrapper">
                  <h6 className="card-subtitle" style={card_subtitle_style}>School</h6>
                  <h5 className="card-title" style={{lineHeight:"18px"}}>{props.school.name}</h5>
                  <h6 className="card-text">{props.school.location}</h6>
                  <a href={props.school.wesbite}>
                      <Button className="card-button" style={{margin:"9px 0", fontSize:"12px", height:"20px", textAlign:"center", lineHeight:"6px"}}>Learn More</Button>
                  </a>
              </div>
          </div>
      </div>
  )
};

export default TrainingCard;
