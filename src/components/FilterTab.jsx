import React from 'react';
import industries from "../assets/mockData/industries";

export const FilterTab = (props) => {

  return (
      <div className="flexbox-container">
        <button className='nav-button'
                style={{flex: '0 0 auto'}}>Popular</button>
        {industries.industries.map(industry => { return <button className='nav-button'
                                                                style={{flex: '0 0 auto'}}>{industry.name}</button>})}
      </div>
  )
};

export default FilterTab;
