import React from 'react';
import check from '../assets/images/check.png'

export const Certification = (props) => {
  return (
      <div className="certification-container" style={{padding:'16px 20px 16px 20px'}}>
        <h5 className="certification-header">Welding Certifications</h5>
        <div className="certification-item">
          <img src={check} alt="" className="certification-image"/>
          <h6 className="certification-text">Certified Weilding Inspector</h6>
        </div>
        <div className="certification-item" >
          <img src={check} alt="" className="certification-image"/>
          <h6 className="certification-text">Welding Radiographic Interpreter</h6>
        </div>
        <div className="certification-item" >
          <img src={check} alt="" className="certification-image"/>
          <h6 className="certification-text">Certified Welding Engineer</h6>
        </div>
        <div className="certification-item" >
          <img src={check} alt="" className="certification-image"/>
          <h6 className="certification-text">Certified Robotic Arc Welding</h6>
        </div>
        <div className="certification-item" >
          <img src={check} alt="" className="certification-image"/>
          <h6 className="certification-text">Certified Welding Educator</h6>
        </div>
      </div>
  )
};

export default Certification;
