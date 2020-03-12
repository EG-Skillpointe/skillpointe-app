import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const VerticalJobCard = (props) => {
  const image = require(`../assets/images/${props.job.image}`);
  const jobPageStyle = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
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

  return (

      <Card className="ambassador-card-container flex">
        <Card.Img variant="top" src={image} style={{height: '40%', width: '75%', borderRadius: "10px 10px 0 0", objectFit:"contain", paddingTop: "14px"}} />
        <Card.Body style={jobPageStyle}>
          <div style={{width:"100%", height:"100%", overflow:"hidden"}}>
            <h6 style={{margin:"0", fontSize:"8px"}}>{props.job.datePosted}</h6>
            <Card.Title style={{margin:"5px 0", fontSize:"14px", lineHeight:"12px"}}>{props.job.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted" style={{margin:"2px 0", fontSize:"8px", lineHeight:"10px"}}>{props.job.company}</Card.Subtitle>
            <Card.Text style={{margin:"2px 0", fontSize:"8px", lineHeight:"10px"}}>{props.job.location}</Card.Text>
            <Button className='card-button' style={{width:"50px", height:"15px", padding:"2px", marginTop:"5px", fontSize:"7px", lineHeight:"7px"}}>Learn More</Button>
          </div>
        </Card.Body>
      </Card>
  )
};

export default VerticalJobCard;
