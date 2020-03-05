import React from 'react';
import Button from "react-bootstrap/Button";

export const PeopleCard = (props) => {
    const image = require('../assets/images/illya.png');
    
    return (
        <div className="people-card-containter">
            <div className="people-card-image-container">
                <img className="people-card-image" src={image} alt="Tammy"/>
            </div>
            <div className="people-card-text-container">
                    <h4 className="people-card-text">Illya Balakin</h4>
                    <h6 className="people-card-text">Physical Therapist</h6>
                    <h6 className="people-card-text">4 mutual connections</h6>
                    <div className="people-card-button-container">
                        <Button className="card-button" style={{margin:"2px 0", fontSize:"12px", height:"30px", textAlign:"center", lineHeight:"6px"}}>Connect</Button>
                        <Button className="card-button" style={{margin:"2px 0", fontSize:"12px", height:"30px", textAlign:"center", lineHeight:"6px"}}>Remove</Button>                    </div>
            </div>
        </div>
  )
};

export default PeopleCard;