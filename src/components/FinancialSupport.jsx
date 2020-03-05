import React from 'react';
import check from '../assets/images/right-arrow.svg'

export const Certification = (props) => {
    return (
        <div className="certification-container" style={{padding:'16px 20px 16px 20px', margin:"0", width:"100%"}}>
            <h5 className="certification-header">Welding Schools in you area</h5>
            <div className="certification-item" style={{height:"50px", alignItems:"center"}}>
                <div style={{display:"flex", flexDirection:"column", justifyContent:"center", width:"auto", height:"100%"}}>
                    <h6 className="certification-text" style={{paddingLeft:"15px", margin:"5px 0", fontSize:"14px", lineHeight:"100%", width:"85%", color:"#2D426B"}}><b>Northern Georgia Community College</b></h6>
                    <h6 className="certification-text" style={{paddingLeft:"15px", margin:"5px 0", fontSize:"12px", lineHeight:"100%", width:"auto"}}>Austell, GA</h6>
                </div>
                <img src={check} alt="" style={{width:"25px", position:"absolute", top:"40%", right:"20px"}}/>
            </div>
            <div className="certification-item" style={{height:"50px", alignItems:"center"}}>
                <div style={{display:"flex", flexDirection:"column", justifyContent:"center", width:"auto", height:"100%"}}>
                    <h6 className="certification-text" style={{paddingLeft:"15px", margin:"5px 0", fontSize:"14px", lineHeight:"100%", width:"85%", color:"#2D426B"}}><b>Atlanta Technical College</b></h6>
                    <h6 className="certification-text" style={{paddingLeft:"15px", margin:"5px 0", fontSize:"12px", lineHeight:"100%", width:"auto"}}>Atlanta, GA</h6>
                </div>
                <img src={check} alt="" style={{width:"25px", position:"absolute", top:"40%", right:"20px"}}/>
            </div>
            <div className="certification-item" style={{height:"50px", alignItems:"center"}}>
                <div style={{display:"flex", flexDirection:"column", justifyContent:"center", width:"auto", height:"100%"}}>
                    <h6 className="certification-text" style={{paddingLeft:"15px", margin:"5px 0", fontSize:"14px", lineHeight:"100%", width:"85%", color:"#2D426B"}}><b>Fortis College</b></h6>
                    <h6 className="certification-text" style={{paddingLeft:"15px", margin:"5px 0", fontSize:"12px", lineHeight:"100%", width:"auto"}}>Smyrna, GA</h6>
                </div>
                <img src={check} alt="" style={{width:"25px", position:"absolute", top:"40%", right:"20px"}}/>
            </div>
            <button style={{border:"none", color:"#FFFFFF", backgroundColor:"#F8A141", height:"22px", width:"80%", margin:"auto", fontSize:"12px", fontFamily:"Roboto", fontWeight:"bold", borderRadius:"5px", lineHeight:"14px"}}>More Atlanta Welding Schools</button>
        </div>
    )
};

export default Certification;
