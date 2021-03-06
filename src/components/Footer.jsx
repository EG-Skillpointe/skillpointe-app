import React from 'react';
import careersImg from "../assets/images/Explore_Careers.png";
import linkedin from "../assets/images/linkedin.png";
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";

export const Footer = (props) => {

	let height = props.mobileFooterPresent ? '180px' : '125px';
	
	return (
		<div>
			<div className="footer" id='footer' style={{height: height, display:"flex", flexDirection:"column"}}>
				<p>&copy; 2020 Skillpointe</p>
				<span>
					<label style={{fontSize:"10px", padding:"0", margin:"0"}} onClick={() => {} }>Contact</label>
					<label style={{padding:"0", margin:"2px 4px"}}> | </label>
					<label style={{fontSize:"10px", padding:"0", margin:"0"}} onClick={() => {} }>Privacy Policy</label>
					<label style={{padding:"0", margin:"2px 4px"}}> | </label>
					<label style={{fontSize:"10px", padding:"0", margin:"0"}} onClick={() => {} }>Advertise with Us</label>
					<label style={{padding:"0", margin:"2px 4px"}}> | </label>
					<label style={{fontSize:"10px", padding:"0", margin:"0"}} onClick={() => {} }>Terms of Use</label>
					<label style={{padding:"0", margin:"2px 4px"}}> | </label>
					<label style={{fontSize:"10px", padding:"0", margin:"0"}} onClick={() => {} }>Site Map</label>
				</span>

				<span style={{marginTop:"10px"}}>
					<img src={linkedin} alt="" width="50" />
					<img style={{margin:"0 10px"}} src={facebook} alt="" width="35" />
					<img src={twitter} alt="" width="42" />
				</span>
			</div>

			<div id="mobile-footer-sticky"></div>
		</div>
	)
};

export default Footer;
