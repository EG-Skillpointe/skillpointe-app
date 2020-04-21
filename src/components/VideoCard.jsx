import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import homepageVideo from "../assets/videos/AmbassadorConcept.mp4";

export const VideoCard = () => {
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

   const buttonStyle = {
     margin: ' 10px 5px',
     width: '35%',
     borderRadius: '15px',
   };

  return (

      <Card className="ambassador-card-container">
        <Card.Body >
            <div style={ambassadorPageStyle}>
                <Card.Header style={{marginLeft:'5%'}}>COMMUNICATIONS</Card.Header>
                <Card.Title style={{marginLeft:'5%', marginBottom: '0'}}>Becoming a Graphic Artist</Card.Title>
                <div className='video-comp' style={{width:'90%', marginTop:'12px', marginLeft:'5%'}}>
                    <video controls preload="metadata" webkit-playsinline="true" playsInline={true}>
                        <source src={`${homepageVideo}#t=0.5`} type='video/mp4'/>
                    </video>
                </div>
                <div style={{width:'100%', display:'flex', marginLeft:'12%'}}>
                  <Button className='card-button' style={buttonStyle}>Training</Button>
                  <Button className='card-button' style={buttonStyle}>Jobs</Button>
                </div>
            </div>
        </Card.Body>
      </Card>
  )
};

export default VideoCard;

