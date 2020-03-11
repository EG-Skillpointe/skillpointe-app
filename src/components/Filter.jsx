import React from 'react';
import downArrow from '../assets/images/keyboard_arrow_down_24px_outlined.svg';
import filter from '../assets/images/tune_24px_outlined.svg';

export const Filter = (props) => {
  return (
      <div className="filter-container">
        <div className="filter-button-container" style={{marginRight: '8px'}}>
          <img src={filter} alt="" className="filter-image" />
          <button className="filter-header" style={{paddingLeft: '20px', paddingTop:"5px", paddingBottom:"5px", borderWidth: "0px"}}>Filters</button>
        </div>
        <div className="filter-button-container">
          <button className="filter-header" style={{paddingRight: '20px', paddingTop:"5px", paddingBottom:"5px", borderWidth: "0px"}}>Sort By</button>
          <img src={downArrow} alt="" className="filter-arrow"/>
        </div>
        <div className="filter-button-container" style={{marginLeft: '8px'}}>
          <button className="filter-header" style={{padding:"5px 0", borderWidth: "0px"}}>Save Search</button>
        </div>
      </div>
  )
};

export default Filter;
