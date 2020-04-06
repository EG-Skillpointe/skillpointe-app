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
                        8333 Little River Tpke Annandale, VA 22003
                        <br/>
                        <a href="">Get Directions</a>
                    </p>
                </div>
            </div>
            <div>
                <div style={{display:"inline-block", verticalAlign:"top"}}><i className="glyphicon glyphicon-earphone address-icon" style={{fontSize:"16px"}}/> </div>
                <div style={{display:"inline-block"}}><p>(703) 323-3000</p></div>
            </div>
            <div>
                <div style={{display:"inline-block", verticalAlign:"top"}}><img className="address-icon" src={worldwideweb} style={{height:"18px"}} ></img> </div>
                <div style={{display:"inline-block"}}><p><a href="">websitenvcc.edu</a></p></div>
            </div>

        </div>
    )

}

export default AddressBox