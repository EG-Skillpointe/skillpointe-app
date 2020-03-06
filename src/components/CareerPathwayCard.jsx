import React from 'react';
import Card from "react-bootstrap/Card";

export const CareerPathwayCard = (props) => {
    const image = require(`../assets/images/${props.careerPathway.image}`);
    const style = {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:"auto",
        width:"90%",
        overflow:'auto',
        backgroundColor:'#DADADA',
        borderRadius:"5px",
        position:"absolute",
        top:"70px",
        zIndex:"-2"
    };

    return (
        <Card style={{height:"100%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <Card.Img variant="top" src={image} style={{position:"absolute", top:"0", height:'30%', borderRadius:"10px 10px 0 0"}} />
            <Card.Body style={style}>
                <div style={{paddingTop:"35px", width:"90%"}}>
                    <Card.Title style={{color:"#2D426B"}}>{props.careerPathway.name}</Card.Title>
                    <Card.Text style={{color:"#5578BB"}}>{props.careerPathway.title}</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted" style={{marginTop:"10px", color:"#000000"}}>{props.careerPathway.description}</Card.Subtitle>
                    <Card.Title style={{color:"#F8A141", fontSize:"14px", marginTop:'10px', marginBottom:"15px"}}>{props.careerPathway.name}'s Story</Card.Title>
                </div>
            </Card.Body>
        </Card>
    )
};

export default CareerPathwayCard;
