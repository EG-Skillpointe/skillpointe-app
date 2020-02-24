import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import image from '../images/construction.jpg'

export const AmbassadorCard = (props) => {
  return (

      <Card className = "card-container" >
        <Card.Img variant="top" src={image} style={{width: '100%'}} />
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">Construction</Card.Subtitle>
          <Card.Title>Wally</Card.Title>
          <Card.Text>Construction Service Worker</Card.Text>
          <Button className='card-button' varaint="primary">Learn More</Button>
        </Card.Body>
      </Card>

  )
};

export default AmbassadorCard;

