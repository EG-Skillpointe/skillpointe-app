import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const AmbassadorCard = (props) => {
   const image = require(`../assets/images/${props.ambassador.image}`);

  return (
      <Card className="ambassador-card-container" >
        <Card.Img variant="top" src={image} style={{width: '100%'}} />
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">{props.ambassador.industry}</Card.Subtitle>
          <Card.Title>{props.ambassador.name}</Card.Title>
          <Card.Text>{props.ambassador.title}</Card.Text>
          <Button className='card-button'>Learn More</Button>
        </Card.Body>
      </Card>
  )
};

export default AmbassadorCard;

