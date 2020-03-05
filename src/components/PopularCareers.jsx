import React from 'react';

export const PopularCareers = (props) => {
    return (
        <div className="certification-container" style={{padding:"0", margin:"0", marginBottom:"20px", width:"100%", height:"auto", background:"rgba(255,255,255,0)"}}>
            <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
                <div className="certification-item" style={{marginBottom:"12px", width:"100%", height:"37px", display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#FFFFFF"}}>
                    <h6 style={{padding:"0", margin:"0", fontSize:"20px", lineHeight:"16px", width:"85%", color:"#2D426B"}}><b>Popular Careers</b></h6>
                </div>

                <div className="certification-item" style={{marginBottom:"6px", width:"49%", height:"77px", display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#FFFFFF"}}>
                    <h6 style={{padding:"0", margin:"0", fontSize:"14px", lineHeight:"16px", width:"85%", color:"#2D426B"}}><b>American Welding Society Scholarship</b></h6>
                </div>
                <div className="certification-item" style={{marginBottom:"6px", width:"49%", height:"77px", display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#FFFFFF"}}>
                    <h6 style={{padding:"0", margin:"0", fontSize:"14px", lineHeight:"16px", width:"85%", color:"#2D426B"}}><b>Federal Welding Training Tuition Assistance</b></h6>
                </div>
                <div className="certification-item" style={{marginBottom:"6px", width:"49%", height:"77px", display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#FFFFFF"}}>
                    <h6 style={{padding:"0", margin:"0", fontSize:"14px", lineHeight:"16px", width:"85%", color:"#2D426B"}}><b>School Specific Scholarships</b></h6>
                </div>
                <div className="certification-item" style={{marginBottom:"6px", width:"49%", height:"77px", display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#FFFFFF"}}>
                    <h6 style={{padding:"0", margin:"0", fontSize:"14px", lineHeight:"16px", width:"85%", color:"#2D426B"}}><b>Merit Scholarships</b></h6>
                </div>
            </div>
        </div>
    )
};

export default PopularCareers;
