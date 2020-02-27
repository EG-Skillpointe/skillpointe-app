import React from 'react';

export const Footer = (props) => {

	let height = props.mobileFooterPresent ? '180px' : '125px';
	
	return (
		<div>
		<div className="footer" id='footer' style={{height: height }}> 
			<p>&copy; 2020 Skillpointe</p>
			<label onClick={() => {window.location.replace('/contact')} }>Contact</label>
			<label> | </label>
			<label onClick={() => {window.location.replace('/faq')} }>FAQ</label>
			<label> | </label>
			<label onClick={() => {window.location.replace('/about')} }>About</label>
		</div>
		<div id="mobile-footer-sticky"></div>
		</div>
	)
};

export default Footer;