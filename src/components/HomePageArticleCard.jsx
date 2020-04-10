import React from 'react';
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const HomePageArticleCard = (props) => {
   const image = require(`../assets/images/choa.png`);
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
                <Card.Header style={{paddingLeft: '5px'}}>{props.article.industry}</Card.Header>
                <Card.Title style={{paddingLeft: '5px', marginBottom: '0'}}>{props.article.headline}</Card.Title>
                <Card.Text style={{paddingLeft: '5px', textAlign:'left'}}>{props.article.subTitle}</Card.Text>
                <div style={{width:'100%', display:'flex'}}>
                  <Button className='card-button' style={buttonStyle}>Jobs</Button>
                  <Button className='card-button' style={buttonStyle}>Training</Button>
                </div>
            </div>
        </Card.Body>
      </Card>
  )
};

export default HomePageArticleCard;

