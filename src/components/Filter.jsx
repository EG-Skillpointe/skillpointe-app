import React from 'react';


export const Filter = (props) => {
  return (
      <div className="filter-container">
        <div className="filter-button-container">
          <button className="filter-header" style={{paddingLeft:"35px"}}>Filters</button>
        </div>
        <div className="filter-button-container">
          <button className="filter-header" style={{paddingLeft:"10px"}}>Sort By</button>
        </div>
        <div className="filter-button-container">
          <button className="filter-header">Save Search</button>
        </div>
      </div>
  )
};

export default Filter;
