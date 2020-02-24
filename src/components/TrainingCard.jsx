import React from 'react';

export const TrainingCard = (props) => {
  return (
      <div className="container">
        <img className="container__image" src="https://mtdata.ru/u7/photo53A0/20946911428-0/original.jpg#20946911428" alt="Cat"/>
          <div className="container__text">
            <h6 className="card-subtitle">School</h6>
            <h5 className="card-title">Georgia Tech Institute of Nothing</h5>
            <h6 className="card-text">Atlanta, GA</h6>
            <button className="card-button">Learn More</button>
          </div>
      </div>
  )
};

export default TrainingCard;
