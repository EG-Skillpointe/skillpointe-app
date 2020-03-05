import React from 'react';

export const PeopleCard = (props) => {
    const image = require('../assets/images/profile_picture.png');

    return (
        <div className="people-card-containter">
            <div className="people-card-image-container">
                <img className="people-card-image" src={image} alt="Tammy"/>
            </div>
            <div className="people-card-text-container">
                    <h4 className="people-card-text">Tammy R</h4>
                    <h6 className="people-card-text">Registerd Nurse</h6>
                    <h6 className="people-card-text">1 mutual connection</h6>
                    <div className="people-card-button-container">
                        <div className="people-card-button-view">

                        </div>
                        <div className="people-card-button-view">

                        </div>
                    </div>
            </div>
        </div>
  )
};

export default PeopleCard;