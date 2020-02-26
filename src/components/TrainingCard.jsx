import React from 'react';

const card_subtitle_style = {
    marginTop:"0"
};

export const TrainingCard = (props) => {
  return (
      <div className="container">
          <img className="container_image" src="https://mtdata.ru/u7/photo53A0/20946911428-0/original.jpg#20946911428" alt="Cat"/>
          <div className="container_text">
              <div className="school_info_wrapper">
                  <h6 className="card-subtitle" style={card_subtitle_style}>School</h6>
                  <h5 className="card-title">{props.school.name}</h5>
                  <h6 className="card-text">{props.school.location}</h6>
                  <button className="card-button">Learn More</button>
              </div>
          </div>
      </div>
  )
};

export default TrainingCard;
