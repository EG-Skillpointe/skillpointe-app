import React from 'react';
import weldingTechnician from "../assets/images/welding_technician.svg";
import pipeWelder from "../assets/images/pipe_welder.svg";
import structuralWelder from "../assets/images/structural_welder.svg";
import underwaterWelder from "../assets/images/underwater_welder.svg";
import sheetMetalWorker from "../assets/images/sheet_metal_worker.svg";
import weldingEngineer from "../assets/images/welding_engineer.svg";

export const PopularCareers = (props) => {
    return (
        <div className="certification-container" style={{ height:"auto", background:"rgba(255,255,255,0)"}}>
            <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
                <div className="certification-item" style={{marginBottom:"12px", width:"100%", height:"37px", display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#FFFFFF"}}>
                    <h6 style={{padding:"0", margin:"0", fontSize:"20px", lineHeight:"16px", width:"85%", color:"#2D426B"}}><b>Popular Careers</b></h6>
                </div>

                <div className="certification-item" style={{marginBottom:"6px", width:"49%", height:"77px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", backgroundColor:"#FFFFFF"}}>
                    <img src={weldingTechnician} alt="" style={{marginBottom:"10px"}}/>
                    <h6 style={{padding:"0", margin:"0", fontSize:"14px", lineHeight:"16px", width:"85%", color:"#2D426B"}}><b>Welding Technician</b></h6>
                </div>
                <div className="certification-item" style={{marginBottom:"6px", width:"49%", height:"77px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", backgroundColor:"#FFFFFF"}}>
                    <img src={pipeWelder} alt="" style={{marginBottom:"10px"}}/>
                    <h6 style={{padding:"0", margin:"0", fontSize:"14px", lineHeight:"16px", width:"85%", color:"#2D426B"}}><b>Pipe Welder</b></h6>
                </div>
                <div className="certification-item" style={{marginBottom:"6px", width:"49%", height:"77px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", backgroundColor:"#FFFFFF"}}>
                    <img src={structuralWelder} alt="" style={{marginBottom:"10px"}}/>
                    <h6 style={{padding:"0", margin:"0", fontSize:"14px", lineHeight:"16px", width:"85%", color:"#2D426B"}}><b>Structural Welder</b></h6>
                </div>
                <div className="certification-item" style={{marginBottom:"6px", width:"49%", height:"77px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", backgroundColor:"#FFFFFF"}}>
                    <img src={underwaterWelder} alt="" style={{marginBottom:"10px"}}/>
                    <h6 style={{padding:"0", margin:"0", fontSize:"14px", lineHeight:"16px", width:"85%", color:"#2D426B"}}><b>Underwater Welder</b></h6>
                </div>
                <div className="certification-item" style={{marginBottom:"6px", width:"49%", height:"77px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", backgroundColor:"#FFFFFF"}}>
                    <img src={sheetMetalWorker} alt="" style={{marginBottom:"10px"}}/>
                    <h6 style={{padding:"0", margin:"0", fontSize:"14px", lineHeight:"16px", width:"85%", color:"#2D426B"}}><b>Sheet Metal Worker</b></h6>
                </div>
                <div className="certification-item" style={{marginBottom:"6px", width:"49%", height:"77px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", backgroundColor:"#FFFFFF"}}>
                    <img src={weldingEngineer} alt="" style={{marginBottom:"10px"}}/>
                    <h6 style={{padding:"0", margin:"0", fontSize:"14px", lineHeight:"16px", width:"85%", color:"#2D426B"}}><b>Welding Engineer</b></h6>
                </div>
            </div>
        </div>
    )
};

export default PopularCareers;
