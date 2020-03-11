import React from 'react';

export const FinancialSupport = (props) => {
    return (
        <div className="certification-container" style={{padding:'0px 20px 6px 20px', height:"auto"}}>
            <h5 className="certification-header" style={{margin:"15px auto 8px"}}>Financial Support Opportunities</h5>
            <p style={{lineHeight:"14px", marginBottom:"15px"}}>
                Welding training ptorgrams can be expensive, however, several types of financial aid is available to help offset the cost of trade school, including:
            </p>

            <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
                <div className="certification-item" style={{width:"48%", height:"60px", display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <h6 style={{padding:"0", margin:"0", fontSize:"14px", lineHeight:"16px", width:"85%", color:"#2D426B"}}><b>American Welding Society Scholarship</b></h6>
                </div>
                <div className="certification-item" style={{width:"48%", height:"60px", display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <h6 style={{padding:"0", margin:"0", fontSize:"14px", lineHeight:"16px", width:"85%", color:"#2D426B"}}><b>Federal Welding Training Tuition Assistance</b></h6>
                </div>
                <div className="certification-item" style={{width:"48%", height:"60px", display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <h6 style={{padding:"0", margin:"0", fontSize:"14px", lineHeight:"16px", width:"85%", color:"#2D426B"}}><b>School Specific Scholarships</b></h6>
                </div>
                <div className="certification-item" style={{width:"48%", height:"60px", display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <h6 style={{padding:"0", margin:"0", fontSize:"14px", lineHeight:"16px", width:"85%", color:"#2D426B"}}><b>Merit Scholarships</b></h6>
                </div>
            </div>
        </div>
    )
};

export default FinancialSupport;
