import React from 'react';
import Card from "react-bootstrap/Card";
import homepageVideo from "../assets/videos/Travis_Edmonds_Ambassador Video.mp4";
import {
    Video
} from "../components";

export const WeldingAmbassadorCard = (props) => {
    return (
        <Card className="welding-ambassador-card">
            <Card.Title style={{color:"#2D426B", margin:"12px 0", fontSize:"20px"}}>Welding Ambassador: Travis</Card.Title>
            <Video video={homepageVideo} type='video/mp4'/>
            <Card.Text style={{width:"90%", margin:"12px auto"}}>A defining trait for Travis Edmunds is curiosity. He likes to understand how things work and reach beyond his comfort zone.</Card.Text>
        </Card>
    )
};

export default WeldingAmbassadorCard;

