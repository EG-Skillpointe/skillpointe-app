import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const AmbassadorCard = (props) => {
   const image = require(`../assets/images/${props.ambassador.image}`);

  return (

      <Card className="ambassador-card-container">
        <Card.Img variant="top" src={image} style={{height: '50%', width: '100%', borderRadius: "10px 10px 0 0"}} />
        <Card.Body style={{display:'flex', justifyContent:'center', alignItems:'center', height:'50%', overflow:'auto'}}>
            <div>
                <Card.Subtitle className="mb-2 text-muted" style={{marginTop:"0"}}>{props.ambassador.industry}</Card.Subtitle>
                <Card.Title>{props.ambassador.name}</Card.Title>
                <Card.Text>{props.ambassador.title}</Card.Text>
                <Button className='card-button' style={{marginTop: '10px'}}>Learn More</Button>
            </div>
        </Card.Body>
      </Card>
  )
};

export default AmbassadorCard;

