import React from 'react';
import check from '../assets/images/right-arrow.svg'

export const WeldingSchools = (props) => {
    if (props.smallVersion) {
        return (
            <div className="certification-container" style={{padding:'0 20px 0', margin:"0 30px 30px", width:"315px"}}>
                <h5 className="certification-header" style={{margin:"10px auto"}}>Find Training</h5>
                <div className="certification-item" style={{height:"50px", alignItems:"center"}} onClick={ () =>{window.location.replace('/training/detail')}}>
                    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", width:"auto", height:"100%"}}>
                        <h6 className="certification-text" style={{paddingLeft:"15px", margin:"5px 0",  lineHeight:"100%", width:"85%", color:"#2D426B"}}><b>FSCJ Jacksonville Florida</b></h6>
                        <h6 className="certification-text" style={{paddingLeft:"15px", margin:"5px 0", fontSize:"12px", lineHeight:"100%", width:"auto"}}>Jacksonville, FL</h6>
                    </div>
                    <img src={check} alt="" style={{width:"25px", position:"absolute", top:"40%", right:"20px"}}/>
                </div>
                <div className="certification-item" style={{height:"50px", alignItems:"center"}} onClick={ () =>{window.location.replace('/training/detail')}}>
                    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", width:"auto", height:"100%"}}>
                        <h6 className="certification-text" style={{paddingLeft:"15px", margin:"5px 0",  lineHeight:"100%", width:"85%", color:"#2D426B"}}><b>Tulsa Welding School</b></h6>
                        <h6 className="certification-text" style={{paddingLeft:"15px", margin:"5px 0", fontSize:"12px", lineHeight:"100%", width:"auto"}}>Tulsa, OK</h6>
                    </div>
                    <img src={check} alt="" style={{width:"25px", position:"absolute", top:"40%", right:"20px"}} />
                </div>
                <div className="certification-item" style={{height:"50px", alignItems:"center"}} onClick={ () =>{window.location.replace('/training/detail')}}>
                    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", width:"auto", height:"100%"}}>
                        <h6 className="certification-text" style={{paddingLeft:"15px", margin:"5px 0",  lineHeight:"100%", width:"85%", color:"#2D426B"}}><b>Atlanta Technical College</b></h6>
                        <h6 className="certification-text" style={{paddingLeft:"15px", margin:"5px 0", fontSize:"12px", lineHeight:"100%", width:"auto"}}>Atlanta, GA</h6>
                    </div>
                    <img src={check} alt="" style={{width:"25px", position:"absolute", top:"40%", right:"20px"}}/>
                </div>
                <button style={{border:"none", color:"#FFFFFF", backgroundColor:"#F8A141", height:"22px", width:"80%", margin:"auto", fontSize:"12px", fontFamily:"Roboto", fontWeight:"bold", borderRadius:"5px", lineHeight:"14px"}}
                        onClick={ () =>{window.location.replace('/training/detail')}}
                >Explore Training</button>
            </div>
        )
    } else {
        return (
            <div className="certification-container" style={{padding:'0px 14px 0px 14px', marginBottom:"10px"}} >
                <h5 className="certification-header" style={{margin:"14px auto"}}>Welding Training in Your Area</h5>
                <div className="certification-item" style={{height:"58px", alignItems:"center"}} onClick={ () =>{window.location.replace('/training/detail')}}>
                    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", width:"auto", height:"100%"}}>
                        <h6 className="certification-text" style={{paddingLeft:"15px", margin:"5px 0",  lineHeight:"100%", width:"85%", color:"#2D426B"}}><b>FSCJ Jacksonville Florida</b></h6>
                        <h6 className="certification-text" style={{paddingLeft:"15px", margin:"5px 0", fontSize:"12px", lineHeight:"100%", width:"auto"}}>Jacksonville, FL</h6>
                    </div>
                    <img src={check} alt="" style={{width:"25px", position:"absolute", top:"40%", right:"20px"}}/>
                </div>
                <div className="certification-item" style={{height:"58px", alignItems:"center"}} onClick={ () =>{window.location.replace('/training/detail')}}>
                    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", width:"auto", height:"100%"}}>
                        <h6 className="certification-text" style={{paddingLeft:"15px", margin:"5px 0",  lineHeight:"100%", width:"85%", color:"#2D426B"}}><b>Tulsa Welding School</b></h6>
                        <h6 className="certification-text" style={{paddingLeft:"15px", margin:"5px 0", fontSize:"12px", lineHeight:"100%", width:"auto"}}>Tulsa, OK</h6>
                    </div>
                    <img src={check} alt="" style={{width:"25px", position:"absolute", top:"40%", right:"20px"}}/>
                </div>
                <div className="certification-item" style={{height:"58px", alignItems:"center"}} onClick={ () =>{window.location.replace('/training/detail')}}>
                    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", width:"auto", height:"100%"}}>
                        <h6 className="certification-text" style={{paddingLeft:"15px", margin:"5px 0",  lineHeight:"100%", width:"85%", color:"#2D426B"}}><b>Atlanta Technical College</b></h6>
                        <h6 className="certification-text" style={{paddingLeft:"15px", margin:"5px 0", fontSize:"12px", lineHeight:"100%", width:"auto"}}>Atlanta, GA</h6>
                    </div>
                    <img src={check} alt="" style={{width:"25px", position:"absolute", top:"40%", right:"20px"}}/>
                </div>
                <button style={{border:"none", color:"#FFFFFF", backgroundColor:"#F8A141", height:"25px", width:"70%", margin:"8px 46px 12px 46px", fontSize:"12px", fontFamily:"Roboto", fontWeight:"bold", borderRadius:"5px", lineHeight:"14px"}}
                        onClick={ () =>{window.location.replace('/training/detail')}}>
                              More Welding Programs
                </button>
            </div>
        )
    }
};

export default WeldingSchools;
