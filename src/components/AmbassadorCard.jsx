import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import image from '../images/construction.jpg'

export const AmbassadorCard = (props) => {
  return (
      <Card className = "ambassador-card-container" >
        <Card.Img variant="top" src={props.image} style={{width: '100%'}} />
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">{props.industry}</Card.Subtitle>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.title}</Card.Text>
          <Button className='card-button'>Learn More</Button>
        </Card.Body>
      </Card>
  )
};

export default AmbassadorCard;

