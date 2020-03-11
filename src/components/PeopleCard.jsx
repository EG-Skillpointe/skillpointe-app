import React from 'react';
import Button from "react-bootstrap/Button";
import peopleIcon from "../assets/images/people.svg";

export const PeopleCard = (props) => {
    const image = props.image ? require(`../assets/images/${props.image}`) :require('../assets/images/illya.png');
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
                        <button className="people-card-button" >Accept</button>
                        <button className="people-card-ignore-button">Ignore</button> 
                    </div>
            </div>
        </div>
  )
};

export default PeopleCard;