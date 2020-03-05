import React from 'react';
import check from '../assets/images/check.png'

export const Skill = (props) => {
  return (
      <div className="skill-container" style={{padding:'16px 20px 16px 20px'}}>
        <h5 className="skill-header">Key Skills for Welders</h5>
        <div className="skill-row">
          <div className="skill-div">
            <h6 className="skill-text"> Problem Solving </h6>
          </div>
          <div className="skill-div">
            <h6 className="skill-text"> Independent Working </h6>
          </div>
        </div>
      </div>
  )
};

export default Skill;
