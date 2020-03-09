import React from 'react';

export const FindJobs = (props) => {
    return (
        <div className="certification-container" style={{padding:'0 20px 0', margin:"0 30px 30px", width:"315px"}}>
            <h5 className="certification-header" style={{margin:"10px auto"}}>Find Jobs</h5>
            <input className="home-page-input" placeholder="Search for job opportunities" />
            <input className="home-page-input" placeholder="Industry" />
            <input className="home-page-input" placeholder="Location" />
            <button style={{border:"none", color:"#FFFFFF", backgroundColor:"#F8A141", height:"22px", width:"80%", margin:"auto", fontSize:"12px", fontFamily:"Roboto", fontWeight:"bold", borderRadius:"5px", lineHeight:"14px"}}>Search</button>
        </div>
    )
};

export default FindJobs;
