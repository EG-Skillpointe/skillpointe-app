import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const VerticalJobCard = (props) => {
  const image = require(`../assets/images/vertial_choa.png`);
  const jobPageStyle = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'50%',
    overflow:'auto',
    backgroundColor: 'white',
    padding: '10px'
  };

  const normalStyle = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'50%',
    overflow:'auto',
  };

  const style =jobPageStyle;

  return (

      <Card className="ambassador-card-container flex">
        <Card.Img variant="top" src={image} style={{height: '50%', width: '100%', borderRadius: "10px 10px 0 0"}} />
        <Card.Body style={style}>
          <div>
            <h6 style={{margin:"0"}}>{props.job.datePosted}</h6>
            <Card.Title>{props.job.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted" style={{marginTop:"0"}}>{props.job.company}</Card.Subtitle>
            <Card.Text>{props.job.location}</Card.Text>
            <Button className='card-button' style={{marginTop: '10px'}}>Learn More</Button>
          </div>
        </Card.Body>
      </Card>
  )
};

export default VerticalJobCard;
