import React from 'react';
import check from '../assets/images/right-arrow-short.svg'

export const SchoolCard = (props) => {
  return (
      <div style={{padding:'10px 20px 0px 20px'}}>
        <div className="certification-item" style={{height:"83px", alignItems:"center"}}>
          <div style={{display:"flex", flexDirection:"column", justifyContent:"center", width:"auto", paddingTop:"10px"}}>
            <h6 className="school-text">{props.school.name}</h6>
            <h6 className="school-location" style={{margin:"0px"}}>{props.school.location}</h6>
          </div>
          <img src={check} alt="" style={{width:"32px", height:'26px', position:"absolute", top:"30%", right:"20px", paddingLeft:"5px" }}/>
        </div>
      </div>
  )
};

export default SchoolCard;
