import React from 'react';

export const SchoolCard = (props) => {
    const image = require(`../assets/images/${props.school.image}`);

    return (
        <div className="job-card school-card">
            <div>
                <img src={image} alt="Cat"/>
            </div>
            
            <div>
                <h5 className="job-title">{props.school.name}</h5>
                    
                <h6 className="job-text">{props.school.location}</h6>

                
            </div>
        </div>
  )
};

export default SchoolCard;
