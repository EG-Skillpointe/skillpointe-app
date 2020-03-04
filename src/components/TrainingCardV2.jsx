import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const TrainingCardV2 = (props) => {
   const image = require(`../assets/images/${props.school.image}`);

   // const ambassadorPageStyle = {
   //   display:'flex',
   //   justifyContent:'center',
   //   alignItems:'center',
   //   height:'50%',
   //   overflow:'auto',
   //   backgroundColor: 'white',
   //   padding: '10px'
   // };

   const normalStyle = {
     display:'flex',
     justifyContent:'center',
     alignItems:'center',
     height:'50%',
     overflow:'auto',
   };

  return (
      <Card className="training-cardV2-container" style={{backgroundColor:"#DADADA", width:"92%", height:"92%", boxShadow: "0 1px 6px 0 rgba(0,0,0,.15)", borderRadius:"10px"}}>
        <Card.Img variant="top" src={image} style={{height:'50%', width:'50%', borderRadius:"10px 10px 0 0"}} />
        <Card.Body style={normalStyle}>
            <div>
                <Card.Title style={{lineHeight:"12px", fontSize:"10px", margin:"0"}}>{props.school.name}</Card.Title>
                <Card.Text style={{lineHeight:"9px", fontSize:"7px", marginTop:"5px"}}>{props.school.location}</Card.Text>
                <a href={props.school.wesbite} style={{height:"auto"}}>
                    <Button className="card-button" style={{padding:"0px", fontSize:"6px", width:"50px", height:"10px", textAlign:"center", lineHeight:"6px"}}>Learn More</Button>
                </a>
            </div>
        </Card.Body>
      </Card>
  )
};

export default TrainingCardV2;

