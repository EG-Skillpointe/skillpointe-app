import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const AmbassadorCard = (props) => {
   const image = require(`../assets/images/${props.ambassador.image}`);
   const ambassadorPageStyle = {
     display:'flex',
     justifyContent:'flex-start',
     flexDirection:'column',
     alignItems:'flex-start',
     height:'100%',
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
   const buttonStyle = {
     margin: ' 10px 5px',
     width: '35%',
     borderRadius: '15px',
   };

   const style = props.isPage ? ambassadorPageStyle : normalStyle;

  return (

      <Card className="ambassador-card-container">
        <Card.Body >
            <div style={ambassadorPageStyle}>
                <Card.Header style={{paddingLeft: '5px'}}>{props.ambassador.industry}</Card.Header>
                <Card.Title style={{paddingLeft: '5px', marginBottom: '0'}}>HEADLINE</Card.Title>
                <Card.Text style={{paddingLeft: '5px', textAlign:'left'}}>Some Description about the industry and different career paths</Card.Text>
                <div style={{width:'100%', display:'flex'}}>
                  <Button className='card-button' style={buttonStyle}>JOBS</Button>
                  <Button className='card-button' style={buttonStyle}>Training</Button>
                </div>
            </div>
        </Card.Body>
      </Card>
  )
};

export default AmbassadorCard;

