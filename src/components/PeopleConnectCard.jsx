import React from 'react';
import peopleIcon from "../assets/images/people.svg";

export const PeopleConnectCard = (props) => {
    const image = require('../assets/images/illya.png');
    const name = props.name ?? 'Illya Balakin';
    const title = props.title ?? 'Physical Therapist';
    const numberOfConnections = props.numberOfConnections ?? '4 mutual connections';
    
    return (
        <div className="people-card-container">
            <div className="people-card-image-container">
                <img className="people-card-image" src={image} alt="Tammy"/>
            </div>
            <div className="people-card-text-container">
                    <h4 className="people-card-text">{name}</h4>
                    <h6 className="people-card-text-subtitle">{title}</h6>
                    <div className="people-card-text-description-container">
                        <img className="people-icon" src={peopleIcon} alt=""/>
                        <h6 className="people-card-text-description">{numberOfConnections}</h6>
                    </div>
                    <div className="people-card-button-container">
                        <button className="people-connect-card-button">Connect</button>
                    </div>
            </div>
        </div>
  )
};

export default PeopleConnectCard;