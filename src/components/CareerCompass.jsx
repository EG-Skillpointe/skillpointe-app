import React from 'react';
import compass from '../assets/images/compass.svg';
export const CareerCompass = (props) => {
  return (
      <div className="compass-container" >
        <h5 className="compass-title">Career Compass</h5>
        <p className="compass-text">Not sure where to start your search? Our career compass is designed to help identify your strengths and recommend careers based on your results.</p>
        <button className="compass-button">Take the Quiz</button>
        <img className="compass-image" src={compass} alt=""/>
      </div>
  )
};

export default CareerCompass;
