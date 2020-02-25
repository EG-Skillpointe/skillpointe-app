import React from 'react';

export const Footer = (props) => {
	return (
		<div className="footer">
			<p>&copy; 2020 Skillpointe</p>
			<label onClick={() => {window.location.replace('/contact')} }>Contact</label>
			<label> | </label>
			<label onClick={() => {window.location.replace('/faq')} }>FAQ</label>
			<label> | </label>
			<label onClick={() => {window.location.replace('/about')} }>About</label>
		</div>
	)
};

export default Footer;