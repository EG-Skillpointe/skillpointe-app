import React from 'react';
import Button from "react-bootstrap/Button";
import peopleIcon from "../assets/images/people.svg";

export const PeopleCard = (props) => {
    const image = require('../assets/images/illya.png');
    
    return (
        <div className="people-card-containter">
            <div className="people-card-image-container">
                <img className="people-card-image" src={image} alt="Tammy"/>
            </div>
            <div className="people-card-text-container">
                    <h4 className="people-card-text">Illya Balakin</h4>
                    <h6 className="people-card-text-subtitle">Physical Therapist</h6>
                    <div className="people-card-text-description-container">
                        <img className="people-icon" src={peopleIcon} alt=""/>
                        <h6 className="people-card-text-description">4 mutual connections</h6>
                    </div>
                    <div className="people-card-button-container">
                        <Button className="people-card-button" >Accept</Button>
                        <Button className="people-card-ignore-button">Ignore</Button> 
                    </div>
            </div>
        </div>
  )
};

export default PeopleCard;