import React from 'react';
import Card from "react-bootstrap/Card";

export const JobInfoCards = () => {
    return (
        <div style={{display:"flex", justifyContent:"space-between", flexWrap:"wrap"}}>
            <Card style={{width:"30%", height:"110px", backgroundColor:"#FFFFFF", borderRadius:"5px"}}>
                <Card.Title style={{color:"#2D426B", margin:"12px 0", fontSize:"14px"}}>Welding Salary Range</Card.Title>
                <Card.Text style={{width:"90%", margin:"12px auto", color:"#F8A141", fontSize:"16px", fontWeight:'bold'}}>$37,961 - $85,000</Card.Text>
            </Card>

            <Card style={{width:"30%", height:"110px", backgroundColor:"#FFFFFF", borderRadius:"5px"}}>
                <Card.Title style={{color:"#2D426B", margin:"12px 0", fontSize:"14px"}}>Education <br/>Costs:</Card.Title>
                <Card.Text style={{width:"90%", margin:"12px auto", color:"#F8A141", fontSize:"16px", fontWeight:'bold'}}>$3,000 - $20,000</Card.Text>
            </Card>

            <Card style={{width:"30%", height:"110px", backgroundColor:"#FFFFFF", borderRadius:"5px"}}>
                <Card.Title style={{color:"#2D426B", margin:"12px 0", fontSize:"14px"}}>2020 Welder Shortage</Card.Title>
                <Card.Text style={{width:"90%", margin:"12px auto", color:"#F8A141", fontSize:"16px", fontWeight:'bold'}}>300,000 Workers</Card.Text>
            </Card>

            <Card style={{marginTop:"20px", width:"47.5%", height:"200px", backgroundColor:"#FFFFFF", borderRadius:"5px"}}>
                <Card.Title style={{color:"#2D426B", margin:"8px 0", fontSize:"14px"}}>Top 5 Highest Paid Welding Jobs</Card.Title>
              <div style={{maxHeight:"80%", overflow:'hidden', padding:'0px 10px'}}>
                <Card.Text style={{lineHeight:"15px", textAlign:"left", margin:"0 0 0 9px", color:"#000000", fontSize:"11px"}}>Military Support Welder <b>$160K</b></Card.Text>
                <Card.Text style={{lineHeight:"15px", textAlign:"left", margin:"0 0 0 9px", color:"#000000", fontSize:"11px"}}>Industrial Pipe Welder <b>$50 - $100k</b></Card.Text>
                <Card.Text style={{lineHeight:"15px", textAlign:"left", margin:"0 0 0 9px", color:"#000000", fontSize:"11px"}}>Underwater Welder <b>$55 - $200k</b></Card.Text>
                <Card.Text style={{lineHeight:"15px", textAlign:"left", margin:"0 0 0 9px", color:"#000000", fontSize:"11px"}}>Hi Tech Welder <b>$47k</b></Card.Text>
                <Card.Text style={{lineHeight:"15px", textAlign:"left", margin:"0 0 0 9px", color:"#000000", fontSize:"11px"}}>Sheet Metal Welder <b>$45,070</b></Card.Text>
              </div>

            </Card>

            <Card style={{marginTop:"20px", width:"47.5%", height:"200px", backgroundColor:"#FFFFFF", borderRadius:"5px"}}>
                <Card.Title style={{color:"#2D426B", margin:"8px 0", fontSize:"14px"}}>Top 4 Highest Paid Welding Industries</Card.Title>
              <div style={{maxHeight:"80%", overflow:'hidden', padding:'0px 12px'}}>
                <Card.Text style={{lineHeight:"16px", textAlign:"left", margin:"0 0 0 9px", color:"#000000", fontSize:"11px"}}>
                  <span style={{color:"#F8A141"}}>1.</span> Electric Power Generation
                </Card.Text>
                <Card.Text style={{lineHeight:"16px", textAlign:"left", margin:"0 0 0 9px", color:"#000000", fontSize:"11px"}}>
                  <span style={{color:"#F8A141"}}>2.</span> Natural Gas Distribution
                </Card.Text>
                <Card.Text style={{lineHeight:"16px", textAlign:"left", margin:"0 0 0 9px", color:"#000000", fontSize:"11px"}}>
                  <span style={{color:"#F8A141"}}>3.</span> Pipeline Transportation of Crude Oil
                </Card.Text>
                <Card.Text style={{lineHeight:"16px", textAlign:"left", margin:"0 0 0 9px", color:"#000000", fontSize:"11px"}}>
                  <span style={{color:"#F8A141"}}>4.</span> Pulp, Paper, and Paperboard Mills
                </Card.Text>
              </div>

            </Card>
        </div>
    )
};

export default JobInfoCards;

