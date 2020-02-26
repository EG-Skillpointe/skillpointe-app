import React from 'react';

export const CareerCard = (props) => {
  const image = require(`../assets/images/${props.industry.image}`);
  return (
      <div className="career-card-container col-sm-6 col-xs-6 col-md-6" style={{padding:'10px'}}>
        <div className="card bg-dark text-white" style={{position:'relative', display:'flex', backgroundColor:'#2d426b', borderRadius:'10px'}}>
          <img style={{width:"100%", borderRadius:'5px', opacity:'.2'}} className="card-img" src={image}  alt="Card image"/>
          <div className="card-image-overlay">
              <h5 className="card-title" style={{color:'white'}} >{props.industry.name}</h5>
          </div>
        </div>
      </div>
  )
};

export default CareerCard;
