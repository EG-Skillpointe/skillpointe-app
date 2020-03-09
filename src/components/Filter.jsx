import React from 'react';
import downArrow from '../assets/images/keyboard_arrow_down_24px_outlined.svg';
import filter from '../assets/images/tune_24px_outlined.svg';

export const Filter = (props) => {
  return (
      <div className="filter-container">
        <div className="filter-button-container">
          <img src={filter} alt="" className="filter-image" />
          <button className="filter-header" style={{padding: '3px 0px 3px 40px'}}>Filters</button>
        </div>
        <div className="filter-button-container">
          <button className="filter-header" style={{padding:"2px 21px 3px 21px"}}>Sort By</button>
          <img src={downArrow} alt="" className="filter-arrow"/>
        </div>
        <div className="filter-button-container">
          <button className="filter-header" style={{padding:"3px 13px 3px 13px", fontSize:'13px'}}>Save Search</button>
        </div>
      </div>
  )
};

export default Filter;
