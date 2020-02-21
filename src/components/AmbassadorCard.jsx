import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const AmbassadorCard = (props) => {
  return (
     <div className="container">
      <Card style={{ width: '18rem', margin: '5px auto' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">Construction</Card.Subtitle>
          <Card.Title>Wally</Card.Title>
          <Card.Text>Construction Service Worker</Card.Text>
          <Card.Body>
            <Button variant="primary">Jobs</Button>
            <Button variant="secondary">Training</Button>
          </Card.Body>
        </Card.Body>
      </Card>
     </div>
  )
};

export default AmbassadorCard;

