import React from 'react';
import thumbs from '../assets/images/thumbs.png';
import rightArrow from '../assets/images/small-right-arrow.svg'

export const Compare = (props) => {
  return (
      <div className="compare-container" >
        <img src={thumbs} alt="" className="certification-image"/>
        <h6 className="compare-text">Compare + Contrast Welding Against Other Careers</h6>
        <img src={rightArrow} alt='' className="compare-arrow"/>
      </div>
  )
};

export default Compare;
