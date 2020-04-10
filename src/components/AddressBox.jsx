import React, { Component } from 'react';
import worldwideweb from "../assets/images/worldwideweb.png";

const AddressBox = (props) => {  
    return (
        <div style={{border:"solid 1px #E5E5E5", background:"#F5F5F5", textAlign:"left", padding:"20px 0 20px 20px", marginLeft:"20px", marginRight:"20px"}}>
            <div>
                <div style={{display:"inline-block", verticalAlign:"top"}}>
                    <i className="glyphicon glyphicon-map-marker address-icon" style={{ fontSize:"16px"}}/>  
                </div>
                <div style={{display:"inline-block", width:"65%"}}>
                    <p>
                        101 W State St, Jacksonville, FL 32202
                        <br/>
                        <a href="https://www.google.com/maps/dir//fscj/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x88e5b73c915da969:0xee6ffd25872a9819?sa=X&ved=2ahUKEwjY77-S-93oAhXCTN8KHXgLDvIQ9RcwHHoECBEQEA">Get Directions</a>
                    </p>
                </div>
            </div>
            <div>
                <div style={{display:"inline-block", verticalAlign:"top"}}><i className="glyphicon glyphicon-earphone address-icon" style={{fontSize:"16px"}}/> </div>
                <div style={{display:"inline-block"}}><p>(904) 633-8100</p></div>
            </div>
            <div>
                <div style={{display:"inline-block", verticalAlign:"top"}}><img className="address-icon" src={worldwideweb} style={{height:"18px"}} ></img> </div>
                <div style={{display:"inline-block"}}><p><a href="https://www.fscj.edu/">www.fscj.edu</a></p></div>
            </div>

        </div>
    )

}

export default AddressBox