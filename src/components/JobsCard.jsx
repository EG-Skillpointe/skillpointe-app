import React from 'react';

export const JobsCard = (props) => {
  return (
      <div className="container">
        <div className="card-image-container">
          <img className="card-image" src="https://mtdata.ru/u7/photo53A0/20946911428-0/original.jpg#20946911428" alt="Cat"/>
          <h6>2 days ago</h6>
        </div>
        <div className="container__text">
          <h5 className="card-title">Pediatric Respiratory Specialist</h5>
          <h6 className="card-subtitle">Company</h6>
          <h6 className="card-text">Atlanta, GA</h6>
          <button className="card-button">Learn More</button>
        </div>
      </div>
  )
};

export default JobsCard;
