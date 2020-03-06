import React from 'react';
import problemSolving from '../assets/images/problem_solving.svg';
import physical from '../assets/images/physical_labor.svg';
import math from '../assets/images/math_skills.svg';
import project from '../assets/images/project_management.svg';
import detail from '../assets/images/attention_to_detail.svg';
import working from '../assets/images/independent_working.svg';

export const Skill = (props) => {
  return (
      <div className="skill-container" style={{padding:'10px 0px 16px 30px'}}>
        <h5 className="skill-header">Key Skills for Welders</h5>
        <div className="skill-row">
          <div className="skill-div">
            <img className="skill-image-left" src={problemSolving} alt=""/>
            <h6 className="skill-text" style={{paddingTop:"5px"}}> Problem Solving </h6>
          </div>
          <div className="skill-div">
            <img className="skill-image-right" src={working} alt=""/>
            <h6 className="skill-text" style={{paddingTop:"2px"}}> Independent Working </h6>
          </div>
        </div>
        <div className="skill-row">
          <div className="skill-div">
            <img className="skill-image-left" style={{width:'36px', height:'36px'}} src={physical} alt=""/>
            <h6 className="skill-text" style={{paddingTop:"5px"}}> Physical Labor </h6>
          </div>
          <div className="skill-div">
            <img className="skill-image-right" style={{width:'32px', height:'32px'}} src={math} alt=""/>
            <h6 className="skill-text" style={{paddingTop:"5px"}}> Math Skills </h6>
          </div>
        </div>
        <div className="skill-row">
          <div className="skill-div">
            <img className="skill-image-left" style={{width:'34px', height:'30px'}} src={project} alt=""/>
            <h6 className="skill-text" style={{paddingTop:"2px"}}> Project Management </h6>
          </div>
          <div className="skill-div">
            <img className="skill-image-right" style={{width:'34px', height:'34px'}} src={detail} alt=""/>
            <h6 className="skill-text" style={{paddingRight:'10px',paddingTop:"2px"}}> Attention to Detail </h6>
          </div>
        </div>
      </div>
  )
};

export default Skill;
